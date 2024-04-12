import { createClient } from '@supabase/supabase-js';
const URL = 'https://eeygyltyfbqzixtliigv.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVleWd5bHR5ZmJxeml4dGxpaWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NzI1NTAsImV4cCI6MjAyODQ0ODU1MH0.Lw56Pk9ENp7QeWYz98XxXhJGP14i2mx0UqfKknyV5t0';
const supabase = createClient(URL, API_KEY);
export default supabase;
// Path: BetApp/src/client.jsx