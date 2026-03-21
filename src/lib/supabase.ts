import { createClient } from '@supabase/supabase-js';

// CÁCH SỬA ĐÚNG: Dán link và key vào trong dấu ngoặc kép
const supabaseUrl = 'https://edsluwkzjciizlhxkzbf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkc2x1d2t6amNpaXpsaHhremJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4ODA3NjMsImV4cCI6MjA4OTQ1Njc2M30.uwVuAJ-6UR8ySqxmlgBVHfQ78kkDAhYdss5fzApXHWw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);