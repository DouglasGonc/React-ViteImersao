import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zxrcgkkshsxmawkgykue.supabase.co'; // URL do seu projeto no Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cmNna2tzaHN4bWF3a2d5a3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNzE3NjksImV4cCI6MjA0MzY0Nzc2OX0.edTzYuzT-lC_LjQayJObn8gBKKhYefjVW1wLvX5qtCw'; // Chave API que você pegou nas configurações do Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);