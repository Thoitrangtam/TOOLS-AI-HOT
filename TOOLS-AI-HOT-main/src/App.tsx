import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
  Newspaper
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { TOOLS, AITool } from './data/tools';
import { ToolSchema } from './components/ToolSchema';
import { generateAINews } from './services/geminiService';

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

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">{t.nav.directory}</Link>
          <Link to="/compare" className="text-sm font-medium text-white/70 hover:text-white transition-colors">{t.nav.compare}</Link>
          <Link to="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">{t.nav.blog}</Link>
          
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          
          <button 
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-semibold text-white uppercase tracking-wider"
          >
            <Globe size={14} className="text-emerald-500" />
            {language}
          </button>
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
  
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 flex flex-col"
    >
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-xl bg-white/5 p-2 flex items-center justify-center overflow-hidden border border-white/10">
            <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-lg text-xs font-bold">
            <Star size={12} className="fill-emerald-500" />
            {tool.rating}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
        <p className="text-sm text-white/50 line-clamp-2 mb-4 leading-relaxed">
          {tool.description[language]}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/40">
            {tool.category}
          </span>
          <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-emerald-500/60">
            {tool.pricing[language]}
          </span>
        </div>
      </div>
      
      <div className="p-4 bg-white/5 border-t border-white/5 flex gap-2">
        <Link 
          to={`/tool/${tool.id}`}
          className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold text-center transition-colors"
        >
          {t.blog.readMore}
        </Link>
        <a 
          href={tool.affiliateUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-colors flex items-center justify-center"
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

// --- Pages ---

const DirectoryPage = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const categories = ['all', 'video', 'image', 'writing', 'coding', 'audio', 'productivity'];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/50 max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl group-focus-within:bg-emerald-500/40 transition-all" />
          <div className="relative flex items-center bg-zinc-900 border border-white/10 rounded-2xl p-2 shadow-2xl">
            <Search className="ml-4 text-white/30" size={20} />
            <input 
              type="text" 
              placeholder={t.nav.searchPlaceholder}
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-white/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all border",
              activeCategory === cat 
                ? "bg-emerald-500 border-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]" 
                : "bg-white/5 border-white/10 text-white/50 hover:border-white/30"
            )}
          >
            {t.categories[cat as keyof typeof t.categories]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ToolDetailPage = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const tool = TOOLS.find(t => t.id === id);

  if (!tool) return <div className="pt-40 text-center text-white">Tool not found</div>;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <ToolSchema tool={tool} language={language} />
      
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group"
      >
        <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-3xl bg-white/5 p-4 flex items-center justify-center border border-white/10 shadow-2xl">
              <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{tool.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-emerald-500 font-bold">
                  <Star size={18} className="fill-emerald-500" />
                  {tool.rating}
                </div>
                <span className="text-white/30">|</span>
                <span className="text-white/50 font-medium uppercase tracking-widest text-xs">{tool.category}</span>
              </div>
            </div>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-12">
            {tool.description[language]}
          </p>

          {/* Screenshots Gallery */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="text-emerald-500" size={24} />
              Interface Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.screenshots.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 group">
                  <img src={src} alt={`${tool.name} screenshot ${i}`} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <h3 className="text-emerald-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                <ShieldCheck size={18} />
                {t.tool.pros}
              </h3>
              <ul className="space-y-3">
                {tool.pros[language].map((pro, i) => (
                  <li key={i} className="text-white/70 flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
              <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                <Info size={18} />
                {t.tool.cons}
              </h3>
              <ul className="space-y-3">
                {tool.cons[language].map((con, i) => (
                  <li key={i} className="text-white/70 flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to use */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">{t.tool.howToUse}</h2>
            <div className="space-y-4">
              {tool.howToUse[language].map((step, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-white/80 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 sticky top-32">
            <div className="mb-8">
              <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-1">{t.tool.pricing}</span>
              <div className="text-2xl font-bold text-emerald-500">{tool.pricing[language]}</div>
            </div>

            <div className="mb-8">
              <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-4">{t.tool.features}</span>
              <div className="space-y-3">
                {tool.features[language].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              {t.tool.visit}
              <ExternalLink size={18} />
            </a>
            
            <Link 
              to="/compare"
              state={{ initialToolId: tool.id }}
              className="w-full mt-4 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all border border-white/10"
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
            <img src={tool.logo} alt={tool.name} className="w-6 h-6 object-contain" referrerPolicy="no-referrer" />
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
                      <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
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
                      {tool.features[language].map((f, i) => (
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
                      {tool.pros[language].map((p, i) => (
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
  const { language, t } = useLanguage();
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const data = await generateAINews(language);
      setNews(data);
      setLoading(false);
    };
    fetchNews();
  }, [language]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{t.blog.title}</h1>
          <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest">
            <Newspaper size={14} />
            {t.blog.automated}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-white/5 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group"
            >
              <div className="text-emerald-500 text-xs font-bold mb-4">{item.date}</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{item.summary}</p>
              <button className="flex items-center gap-2 text-white font-bold text-sm group/btn">
                {t.blog.readMore}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Static "Best of" section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-white mb-8">Best AI Tools for 2026</h2>
        <div className="space-y-4">
          {TOOLS.slice(0, 3).map((tool, i) => (
            <Link 
              key={tool.id}
              to={`/tool/${tool.id}`}
              className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="text-2xl font-black text-white/10 group-hover:text-emerald-500/20 transition-colors">0{i+1}</div>
              <img src={tool.logo} alt={tool.name} className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
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
      <Router>
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<DirectoryPage />} />
              <Route path="/tool/:id" element={<ToolDetailPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
