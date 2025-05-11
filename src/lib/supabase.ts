import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://jalzezkphjcnfgbthiix.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphbHplemtwaGpjbmZnYnRoaWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NjI3ODksImV4cCI6MjA2MjUzODc4OX0.rhIK6dkrfzWao53ekXzXTybUBkgRvsSla5r4r6pa948'
);
