import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { AITool } from '../types';

interface ToolsContextType {
  tools: AITool[];
  loading: boolean;
  error: string | null;
}

const ToolsContext = createContext<ToolsContextType | undefined>(undefined);

export const ToolsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        // Try to load from cache first
        const cachedTools = localStorage.getItem('aura_tools_cache');
        if (cachedTools) {
          setTools(JSON.parse(cachedTools));
          setLoading(false);
        }

        const { data, error } = await supabase
          .from('tools')
          .select('id, name, slug, logo, category, rating, reviewCount, domain, affiliateUrl')
          .order('rating', { ascending: false });

        if (error) {
          throw error;
        }

        // Map the data to ensure logo is generated if missing, though the DB should store domain
        const formattedTools = (data || []).map(tool => ({
          ...tool,
          logo: tool.logo || `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`
        })) as AITool[];

        setTools(formattedTools);
        // Save to cache
        localStorage.setItem('aura_tools_cache', JSON.stringify(formattedTools));
      } catch (err: any) {
        console.error('Error fetching tools:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();

    // Set up real-time subscription
    const subscription = supabase
      .channel('tools_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tools' }, () => {
        fetchTools(); // Refetch on any change
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <ToolsContext.Provider value={{ tools, loading, error }}>
      {children}
    </ToolsContext.Provider>
  );
};

export const useTools = () => {
  const context = useContext(ToolsContext);
  if (context === undefined) {
    throw new Error('useTools must be used within a ToolsProvider');
  }
  return context;
};
