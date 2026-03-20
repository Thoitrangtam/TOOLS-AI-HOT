-- Create the tools table
CREATE TABLE public.tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT NOT NULL,
  category TEXT NOT NULL,
  logo TEXT,
  rating NUMERIC,
  "reviewCount" INTEGER,
  pricing JSONB,
  description JSONB,
  features JSONB,
  pros JSONB,
  cons JSONB,
  "useCases" JSONB,
  "howToUse" JSONB,
  "expertTip" JSONB,
  screenshots JSONB,
  "affiliateUrl" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON public.tools
  FOR SELECT USING (true);

-- Create policy to allow anon users to insert/update/delete for the import script
CREATE POLICY "Allow anon users to insert" ON public.tools
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anon users to update" ON public.tools
  FOR UPDATE USING (true);

CREATE POLICY "Allow anon users to delete" ON public.tools
  FOR DELETE USING (true);

-- Enable real-time for the tools table
ALTER PUBLICATION supabase_realtime ADD TABLE public.tools;
