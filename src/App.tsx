import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Globe, 
  ChevronRight, 
  Star, 
  ExternalLink, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Info,
  Menu,
  X,
  ArrowRight,
  Plus,
  ArrowLeftRight,
  Newspaper,
  Flame,
  Trophy,
  ThumbsUp,
  ThumbsDown,
  Loader2,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';

import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ToolsProvider, useTools } from './context/ToolsContext';
import { AITool } from './types';
import { ToolSchema } from './components/ToolSchema';
import { generateAINews } from './services/geminiService';
import { supabase } from './lib/supabase';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-black/80 backdrop-blur-xl border-white/10 py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
            <Zap className="text-black fill-black" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">AURA<span className="text-emerald-500">AI</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-2 glass-nav">
          <Link to="/" className="nav-link">{t.nav.directory}</Link>
          <div className="h-4 w-[1px] bg-white/10 mx-1" />
          <Link to="/compare" className="nav-link">{t.nav.compare}</Link>
          <div className="h-4 w-[1px] bg-white/10 mx-1" />
          <Link to="/blog" className="nav-link">{t.nav.blog}</Link>
          
          <div className="h-4 w-[1px] bg-white/10 mx-4" />
          
          {/* Pill Language Switcher */}
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 w-20 h-9 overflow-hidden">
            <motion.div
              className="absolute top-1 bottom-1 w-[36px] bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              initial={false}
              animate={{ x: language === 'en' ? 0 : 36 }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
            <button 
              onClick={() => setLanguage('en')}
              className={cn(
                "relative z-10 flex-1 text-[10px] font-black tracking-tighter transition-colors duration-300",
                language === 'en' ? "text-black" : "text-white/40 hover:text-white"
              )}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('vi')}
              className={cn(
                "relative z-10 flex-1 text-[10px] font-black tracking-tighter transition-colors duration-300",
                language === 'vi' ? "text-black" : "text-white/40 hover:text-white"
              )}
            >
              VI
            </button>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">{t.nav.directory}</Link>
            <Link to="/compare" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">{t.nav.compare}</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">{t.nav.blog}</Link>
            <button 
              onClick={() => { setLanguage(language === 'en' ? 'vi' : 'en'); setIsMobileMenuOpen(false); }}
              className="flex items-center gap-2 text-emerald-500 font-bold uppercase"
            >
              <Globe size={18} />
              {language === 'en' ? 'Tiếng Việt' : 'English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ToolCard = ({ tool }: { tool: AITool }) => {
  const { language, t } = useLanguage();
  
  const isHot = tool.rating >= 4.8;
  const isBestChoice = tool.reviewCount > 500 && tool.rating >= 4.7;

  const getCategoryStyles = (category: string) => {
    const cat = category.toLowerCase();
    switch (cat) {
      case 'coding':
        return 'bg-blue-500/10 text-blue-400 border-blue-400/20';
      case 'video':
        return 'bg-purple-500/10 text-purple-400 border-purple-400/20';
      case 'writing':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20';
      case 'image':
        return 'bg-rose-500/10 text-rose-400 border-rose-400/20';
      case 'audio':
        return 'bg-amber-500/10 text-amber-400 border-amber-400/20';
      case 'productivity':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20';
      default:
        return 'bg-white/5 text-white/50 border-white/10';
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group relative flex flex-col h-full bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
    >
      {/* Badges */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-1.5 items-end">
        {isHot && (
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-400 text-[9px] font-bold border border-emerald-400/20 uppercase tracking-wider backdrop-blur-md">
            <Flame size={12} className="fill-emerald-400/50" />
            Trending
          </div>
        )}
        {isBestChoice && (
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-950/40 text-amber-400 text-[9px] font-bold border border-amber-400/20 uppercase tracking-wider backdrop-blur-md">
            <Trophy size={12} className="fill-amber-400/50" />
            Best Choice
          </div>
        )}
      </div>

      <div className="p-7 flex-1">
        <div className="flex items-start justify-between mb-6">
          <div className="w-18 h-18 rounded-2xl bg-white/10 p-3 flex items-center justify-center overflow-hidden border border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:border-emerald-400/50">
            <LogoWithFallback tool={tool} className="w-full h-full object-contain filter drop-shadow-md" />
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-400/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-black border border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
            <Star size={14} className="fill-emerald-400" />
            {tool.rating}
          </div>
        </div>
        
        <h3 className="text-2xl font-black text-slate-50 mb-3 group-hover:text-emerald-400 transition-colors tracking-tight leading-none">{tool.name}</h3>
        <p className="text-[15px] text-slate-300 line-clamp-3 mb-8 leading-relaxed font-medium opacity-90">
          {tool.description?.[language]}
        </p>
        
        <div className="flex flex-wrap gap-2.5 mt-auto">
          <span className={cn(
            "px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300",
            getCategoryStyles(tool.category)
          )}>
            {tool.category}
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-white transition-colors">
            {tool.pricing?.[language]}
          </span>
        </div>
      </div>
      
      <div className="p-6 bg-white/[0.03] border-t border-white/10 flex gap-4">
        <Link 
          to={`/tool/${tool.slug || tool.domain}`}
          className="flex-1 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-[13px] font-black text-center transition-all duration-300 border border-white/10 hover:border-emerald-400/30 uppercase tracking-widest"
        >
          {t.blog.readMore}
        </Link>
        <a 
          href={tool.affiliateUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black text-[13px] font-black transition-all duration-300 flex items-center justify-center shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.5)] hover:-translate-y-1"
        >
          <ExternalLink size={18} strokeWidth={3} />
        </a>
      </div>
    </motion.div>
  );
};

const CompactToolCard = ({ tool, isHot }: { tool: AITool, isHot?: boolean }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-zinc-900/30 border border-white/5 rounded-xl p-4 hover:border-emerald-500/30 transition-all flex items-center gap-4 relative"
    >
      {isHot && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-[8px] font-black shadow-lg z-10">
          <Flame size={10} className="fill-white" />
          HOT
        </div>
      )}
      <div className="w-12 h-12 rounded-lg bg-white/5 p-2 flex items-center justify-center shrink-0 border border-white/10">
        <LogoWithFallback tool={tool} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-white truncate group-hover:text-emerald-400 transition-colors">{tool.name}</h4>
        <p className="text-[10px] text-white/40 uppercase tracking-widest">{tool.category}</p>
      </div>
      <Link 
        to={`/tool/${tool.slug || tool.domain}`}
        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-emerald-500 hover:text-black transition-all"
      >
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
};

// --- Pages ---

const NewsSection = ({ title }: { title: string }) => {
  const { t } = useLanguage();
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const data = await generateAINews();
      setNews(data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Newspaper className="text-emerald-500" size={20} />
          {title}
        </h2>
        <div className="h-[1px] flex-1 bg-white/5 ml-6" />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 h-64 animate-pulse">
              <div className="h-4 w-24 bg-white/10 rounded mb-6" />
              <div className="h-6 w-full bg-white/10 rounded mb-4" />
              <div className="h-4 w-full bg-white/10 rounded mb-2" />
              <div className="h-4 w-2/3 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      ) : news.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-zinc-900/50 rounded-3xl border border-white/5">
          <Loader2 className="text-emerald-500 animate-spin mb-4" size={32} />
          <p className="text-white/50 font-medium">Đang cập nhật tin tức mới nhất...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-emerald-500 text-xs font-bold uppercase tracking-widest">{item.publishedDate}</div>
                <ExternalLink size={14} className="text-white/20 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{item.summary}</p>
              {item.insight && (
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                    <Sparkles size={12} />
                    Nhận định từ Aura AI
                  </div>
                  <p className="text-emerald-400/80 text-xs italic leading-relaxed line-clamp-3">
                    "{item.insight}"
                  </p>
                </div>
              )}
              <a 
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold text-sm group/btn hover:text-emerald-500 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {t.blog.readMore}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

const DirectoryPage = () => {
  const { language, t } = useLanguage();
  const { tools: TOOLS, loading } = useTools();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [itemsToShow, setItemsToShow] = useState(12);

  const suggestedTools = useMemo(() => {
    return [...TOOLS]
      .sort((a, b) => {
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.reviewCount - a.reviewCount;
      })
      .slice(0, 4);
  }, [TOOLS]);

  const filteredTools = useMemo(() => {
    let list = TOOLS;
    
    if (activeCategory === 'all' && !search) {
      const suggestedIds = new Set(suggestedTools.map(t => t.id));
      list = list.filter(tool => !suggestedIds.has(tool.id));
    }

    return list.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                           tool.description.en.toLowerCase().includes(search.toLowerCase()) ||
                           tool.description.vi.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, suggestedTools, TOOLS]);

  const displayedTools = useMemo(() => {
    return filteredTools.slice(0, itemsToShow);
  }, [filteredTools, itemsToShow]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setItemsToShow(prev => prev + 12);
    }, 500);
  };

  useEffect(() => {
    setItemsToShow(12);
  }, [search, activeCategory]);

  const categories = ['all', 'video', 'image', 'writing', 'coding', 'audio', 'productivity'];

  const masonryBreakpoints = {
    default: 4,
    1280: 3,
    1024: 2,
    768: 1
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/50 max-w-2xl mx-auto mb-10 font-medium"
        >
          {t.hero.subtitle}
        </motion.p>
      </div>

      {/* Sticky Header for Search & Filter */}
      <div className="sticky top-24 z-40 mb-16 space-y-6 py-6 bg-black/40 backdrop-blur-3xl -mx-6 px-6 border-b border-white/5">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-0 bg-emerald-500/10 blur-2xl group-focus-within:bg-emerald-500/20 transition-all rounded-3xl" />
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-1.5 shadow-2xl backdrop-blur-md focus-within:border-emerald-500/50 transition-all">
            <Search className="ml-4 text-white/30" size={20} />
            <input 
              type="text" 
              placeholder={t.nav.searchPlaceholder}
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-white/20 font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-black transition-all border uppercase tracking-widest",
                activeCategory === cat 
                  ? "bg-emerald-500 border-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105" 
                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white"
              )}
            >
              {t.categories[cat as keyof typeof t.categories]}
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Tools Section */}
      {!search && activeCategory === 'all' && (
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight">
              <Zap className="text-emerald-500 fill-emerald-500/20" size={24} />
              {t.tool.suggestedTools}
            </h2>
            <div className="h-[1px] flex-1 bg-white/5 ml-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {suggestedTools.map(tool => (
              <CompactToolCard key={`suggested-${tool.id}`} tool={tool} isHot />
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-emerald-500">
          <Loader2 className="animate-spin mb-4" size={40} />
          <p className="text-white/50 font-bold tracking-widest uppercase text-xs">Loading tools...</p>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={displayedTools.length}
          next={fetchMoreData}
          hasMore={displayedTools.length < filteredTools.length}
          loader={
            <div className="flex justify-center py-12">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Loader2 className="animate-spin text-emerald-500" size={20} />
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase">Loading more tools...</span>
              </div>
            </div>
          }
          endMessage={
            <div className="text-center py-12">
              <p className="text-white/20 text-xs font-bold tracking-widest uppercase">You've reached the end of the directory</p>
            </div>
          }
          className="overflow-visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            <AnimatePresence mode="popLayout">
              {displayedTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </AnimatePresence>
          </div>
        </InfiniteScroll>
      )}

      {/* News Section on Home Page */}
      <div className="mt-20">
        <NewsSection title={language === 'vi' ? 'Tin tức AI mới nhất hôm nay' : 'Latest AI News Today'} />
      </div>
    </div>
  );
};

const StepCard = ({ step, index, language }: { step: string, index: number, language: 'en' | 'vi' }) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  const colors = [
    'border-emerald-500/30 bg-emerald-500/5 text-emerald-500',
    'border-blue-500/30 bg-blue-500/5 text-blue-500',
    'border-purple-500/30 bg-purple-500/5 text-purple-500',
    'border-amber-500/30 bg-amber-500/5 text-amber-500',
    'border-rose-500/30 bg-rose-500/5 text-rose-500',
  ];
  const colorClass = colors[index % colors.length];

  return (
    <motion.div 
      initial={false}
      className={cn("border rounded-2xl overflow-hidden transition-all", colorClass)}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-lg", colorClass.split(' ')[0].replace('border-', 'bg-').replace('/30', ''))}>
            {index + 1}
          </div>
          <span className="text-lg font-bold text-white">{language === 'vi' ? `Bước ${index + 1}` : `Step ${index + 1}`}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus size={20} className={cn(isOpen && "rotate-45")} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-[1px] w-full bg-white/10 mb-4" />
              <p className="text-white/80 text-lg leading-relaxed">{step}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const LogoWithFallback = ({ tool, className }: { tool: AITool, className?: string }) => {
  const [imgError, setImgError] = useState(false);
  const [useClearbit, setUseClearbit] = useState(false);
  
  if (imgError && useClearbit) {
    return (
      <div className={cn("flex items-center justify-center bg-emerald-500/20 text-emerald-500 font-bold", className)}>
        {tool.name.charAt(0)}
      </div>
    );
  }

  return (
    <img 
      src={imgError ? `https://logo.clearbit.com/${tool.domain}` : tool.logo} 
      alt={tool.name} 
      className={className} 
      referrerPolicy="no-referrer" 
      loading="lazy"
      onError={() => {
        if (!imgError) {
          setImgError(true);
        } else {
          setUseClearbit(true);
        }
      }}
    />
  );
};

const ToolDetailPage = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const { tools: TOOLS, loading: contextLoading } = useTools();
  const navigate = useNavigate();
  
  const [tool, setTool] = useState<AITool | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchFullTool = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('tools')
          .select('*')
          .or(`slug.eq.${slug},domain.eq.${slug}`)
          .single();
          
        if (error) throw error;
        
        if (data && isMounted) {
          const fullTool = {
            ...data,
            logo: data.logo || `https://www.google.com/s2/favicons?domain=${data.domain}&sz=128`
          } as AITool;
          setTool(fullTool);
        }
      } catch (err) {
        console.error('Error fetching full tool details:', err);
        // Fallback to context tool if fetch fails
        if (isMounted) {
          const contextTool = TOOLS.find(t => t.slug === slug || t.domain === slug);
          if (contextTool) setTool(contextTool);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    
    fetchFullTool();
    return () => { isMounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const relatedTools = useMemo(() => {
    if (!tool) return [];
    return TOOLS
      .filter(t => t.category === tool.category && t.id !== tool.id)
      .slice(0, 4);
  }, [tool, TOOLS]);

  useEffect(() => {
    if (tool && tool.description) {
      document.title = `${tool.name} - ${tool.description[language]?.slice(0, 60)}... | Aura AI`;
      const metaDescription = document.querySelector('meta[name="description"]');
      const content = tool.description[language];
      if (metaDescription) {
        metaDescription.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = content;
        document.head.appendChild(meta);
      }
      window.scrollTo(0, 0);
    }
  }, [tool, language]);

  if (loading || contextLoading) return <div className="pt-40 text-center text-white flex justify-center"><Loader2 className="animate-spin text-emerald-500" size={32} /></div>;
  if (!tool) return <div className="pt-40 text-center text-white">Tool not found</div>;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <ToolSchema tool={tool} language={language} />
      
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group"
      >
        <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} />
        {language === 'vi' ? 'Quay lại' : 'Back'}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-2 space-y-12">
          {/* Hero Section */}
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
              <div className="w-32 h-32 rounded-3xl bg-white/5 p-6 flex items-center justify-center border border-white/10 shadow-inner shrink-0">
                <LogoWithFallback tool={tool} className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold text-xs uppercase tracking-widest">
                    {tool.category}
                  </span>
                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white text-xs font-bold">
                    <Star size={14} className="fill-emerald-500 text-emerald-500" />
                    {tool.rating}
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/50 text-xs font-medium">
                    <MessageSquare size={14} />
                    {tool.reviewCount} reviews
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{tool.name}</h1>
                <p className="text-xl text-white/70 leading-relaxed">
                  {tool.description[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              {t.tool.features}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.features?.[language]?.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors group">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros & Cons Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              {t.tool.prosCons}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden group backdrop-blur-sm">
                <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                  <ThumbsUp size={100} className="text-emerald-500" />
                </div>
                <h3 className="text-emerald-500 font-black mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
                  <ShieldCheck size={20} />
                  {t.tool.pros}
                </h3>
                <ul className="space-y-4 relative z-10">
                  {tool.pros?.[language]?.map((pro, i) => (
                    <li key={i} className="text-white/80 flex items-start gap-3 text-lg">
                      <div className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-3xl p-8 relative overflow-hidden group backdrop-blur-sm">
                <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity -rotate-12">
                  <ThumbsDown size={100} className="text-red-500" />
                </div>
                <h3 className="text-red-500 font-black mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
                  <Info size={20} />
                  {t.tool.cons}
                </h3>
                <ul className="space-y-4 relative z-10">
                  {tool.cons?.[language]?.map((con, i) => (
                    <li key={i} className="text-white/80 flex items-start gap-3 text-lg">
                      <div className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Screenshots Gallery */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              Interface Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(tool.screenshots || []).map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 group relative aspect-video bg-zinc-900">
                  <img src={src} alt={`${tool.name} screenshot ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* How to use */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              {t.tool.howToUse}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {tool.howToUse?.[language]?.map((step, i) => (
                <StepCard key={i} step={step} index={i} language={language} />
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              {t.tool.useCases}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.useCases?.[language]?.map((uc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all relative overflow-hidden group shadow-lg"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity scale-150 -translate-y-4 translate-x-4">
                    <Zap size={80} className="text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-500 mb-6 relative z-10">{uc.title}</h4>
                  <div className="space-y-3 relative z-10">
                    {uc.examples?.map((ex, j) => (
                      <div key={j} className="p-4 bg-black/40 rounded-xl border border-white/5 flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 shrink-0" />
                        <p className="text-white/70 text-sm leading-relaxed">{ex}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expert Tip */}
          {tool.expertTip && (
            <div>
              <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity scale-150">
                  <Sparkles size={100} className="text-emerald-500" />
                </div>
                <h3 className="text-emerald-500 font-black mb-6 flex items-center gap-2 uppercase tracking-widest text-sm relative z-10">
                  <Zap size={20} />
                  {language === 'vi' ? 'Lời khuyên từ chuyên gia Aura AI' : 'Expert Tip from Aura AI'}
                </h3>
                <div className="relative z-10">
                  <Quote size={40} className="text-emerald-500/20 absolute -top-4 -left-4" />
                  <p className="text-white/90 text-xl md:text-2xl leading-relaxed italic font-medium pl-6">
                    {tool.expertTip[language]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Related Tools Section */}
          {relatedTools.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                {t.tool.relatedTools}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedTools.map(rTool => (
                  <CompactToolCard key={rTool.id} tool={rTool} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-32 shadow-2xl">
            <div className="mb-8 p-6 bg-black/40 rounded-2xl border border-white/5">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-2">{t.tool.pricing}</span>
              <div className="text-3xl font-black text-emerald-500">{tool.pricing?.[language]}</div>
            </div>

            <a 
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-black flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] group mb-4"
            >
              {t.tool.visit}
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <Link 
              to="/compare"
              state={{ initialToolId: tool.id }}
              className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all border border-white/10 hover:border-white/20"
            >
              <ArrowLeftRight size={18} />
              {t.tool.compare}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparePage = () => {
  const { language, t } = useLanguage();
  const { tools: TOOLS } = useTools();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleTool = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedTools = useMemo(() => 
    TOOLS.filter(tool => selectedIds.includes(tool.id)),
  [selectedIds]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">{t.compare.title}</h1>
      <p className="text-white/50 mb-12">{t.compare.select} (Max 3)</p>

      <div className="flex flex-wrap gap-4 mb-16">
        {TOOLS.map(tool => (
          <button
            key={tool.id}
            onClick={() => toggleTool(tool.id)}
            className={cn(
              "px-4 py-2 rounded-xl flex items-center gap-3 transition-all border",
              selectedIds.includes(tool.id)
                ? "bg-emerald-500 border-emerald-500 text-black font-bold"
                : "bg-white/5 border-white/10 text-white/50 hover:border-white/30"
            )}
          >
            <LogoWithFallback tool={tool} className="w-6 h-6 object-contain" />
            {tool.name}
            {selectedIds.includes(tool.id) ? <X size={14} /> : <Plus size={14} />}
          </button>
        ))}
      </div>

      {selectedTools.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-6 text-left border-b border-white/10 w-1/4"></th>
                {selectedTools.map(tool => (
                  <th key={tool.id} className="p-6 text-center border-b border-white/10">
                    <div className="flex flex-col items-center gap-4">
                      <LogoWithFallback tool={tool} className="w-16 h-16 object-contain" />
                      <span className="text-xl font-bold text-white">{tool.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr>
                <td className="p-6 font-bold text-white border-b border-white/5">{t.compare.pricing}</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-6 text-center border-b border-white/5 text-emerald-500 font-bold">
                    {tool.pricing[language]}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-6 font-bold text-white border-b border-white/5">{t.compare.features}</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-6 border-b border-white/5 align-top">
                    <div className="flex flex-col gap-2 items-center">
                      {tool.features?.[language]?.map((f, i) => (
                        <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded-md">{f}</span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-6 font-bold text-white border-b border-white/5">{t.compare.pros}</td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-6 border-b border-white/5 align-top">
                    <div className="flex flex-col gap-2">
                      {tool.pros?.[language]?.map((p, i) => (
                        <div key={i} className="text-xs text-emerald-500 flex items-center gap-1">
                          <ShieldCheck size={12} /> {p}
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-6 font-bold text-white"></td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-6 text-center">
                    <a 
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors"
                    >
                      {t.hero.cta}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <ArrowLeftRight size={48} className="mx-auto text-white/10 mb-4" />
          <p className="text-white/30">{t.compare.select}</p>
        </div>
      )}
    </div>
  );
};

const BlogPage = () => {
  const { language } = useLanguage();
  const { tools: TOOLS } = useTools();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <NewsSection title={language === 'vi' ? 'Tin tức AI mới nhất hôm nay' : 'Latest AI News Today'} />

      {/* Static "Best of" section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-white mb-8">Best AI Tools for 2026</h2>
        <div className="space-y-4">
          {TOOLS.slice(0, 3).map((tool, i) => (
            <Link 
              key={tool.id}
              to={`/tool/${tool.slug || tool.domain}`}
              className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="text-2xl font-black text-white/10 group-hover:text-emerald-500/20 transition-colors">0{i+1}</div>
              <LogoWithFallback tool={tool} className="w-12 h-12 object-contain" />
              <div className="flex-1">
                <h4 className="font-bold text-white">{tool.name}</h4>
                <p className="text-xs text-white/40">{tool.category}</p>
              </div>
              <ArrowRight className="text-white/20 group-hover:text-emerald-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="text-black fill-black" size={18} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">AURA<span className="text-emerald-500">AI</span></span>
          </Link>
          <p className="text-white/40 max-w-sm leading-relaxed">
            {t.footer.about}
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><Link to="/" className="hover:text-emerald-500 transition-colors">{t.nav.directory}</Link></li>
            <li><Link to="/compare" className="hover:text-emerald-500 transition-colors">{t.nav.compare}</Link></li>
            <li><Link to="/blog" className="hover:text-emerald-500 transition-colors">{t.nav.blog}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Affiliate Disclosure</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-white/20 font-medium tracking-widest uppercase">
        © 2026 AURA AI. {t.footer.rights}
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <ToolsProvider>
        <Router>
          <div className="min-h-screen text-white selection:bg-emerald-500 selection:text-black">
            {/* Mesh Gradients */}
            <div className="mesh-glow top-[-10%] left-[-10%] w-[40%] h-[40%]" />
            <div className="mesh-glow bottom-[-10%] right-[-10%] w-[40%] h-[40%]" />
            <div className="mesh-glow top-[30%] right-[10%] w-[20%] h-[20%] opacity-10" />
            
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<DirectoryPage />} />
                <Route path="/tool/:slug" element={<ToolDetailPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/blog" element={<BlogPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ToolsProvider>
    </LanguageProvider>
  );
}
