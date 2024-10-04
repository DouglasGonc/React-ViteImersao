// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co'; // URL do seu projeto no Supabase
const supabaseKey = 'your-public-anon-key'; // Chave API que você pegou nas configurações do Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);