/*
  # Complete Database Schema Setup

  1. New Tables
    - `profiles` - User profile information with comprehensive fields
    - `posts` - Forum posts with category and content management
    - `daily_post_limits` - Track daily posting limits per user

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for data access control
    - Secure functions with SECURITY DEFINER

  3. Functions
    - `handle_new_user()` - Auto-create profile on user registration
    - `check_daily_post_limit()` - Manage daily posting limits
    - `delete_user_account()` - Complete user account deletion

  4. Triggers
    - Auto-create profile trigger on user signup
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  skills TEXT,
  account_type TEXT,
  experience TEXT,
  bio TEXT,
  location TEXT,
  website TEXT,
  job_title TEXT,
  company TEXT,
  birth_date TEXT,
  languages TEXT,
  interests TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create profiles policies
CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.profiles FOR SELECT 
  TO public 
  USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT 
  TO public 
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON public.profiles FOR UPDATE 
  TO public 
  USING (auth.uid() = id);

-- Create posts table
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable RLS on posts
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create posts policies
CREATE POLICY "Users can view all posts" 
  ON public.posts FOR SELECT 
  TO public 
  USING (true);

CREATE POLICY "Users can create their own posts" 
  ON public.posts FOR INSERT 
  TO public 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own posts" 
  ON public.posts FOR UPDATE 
  TO public 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own posts" 
  ON public.posts FOR DELETE 
  TO public 
  USING (auth.uid() = user_id);

-- Create daily post limits table
CREATE TABLE IF NOT EXISTS public.daily_post_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  post_date DATE DEFAULT CURRENT_DATE NOT NULL,
  post_count INTEGER DEFAULT 0 NOT NULL,
  UNIQUE(user_id, post_date)
);

-- Enable RLS on daily post limits
ALTER TABLE public.daily_post_limits ENABLE ROW LEVEL SECURITY;

-- Create daily post limits policies
CREATE POLICY "Users can view their own post limits" 
  ON public.daily_post_limits FOR SELECT 
  TO public 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own post limits" 
  ON public.daily_post_limits FOR INSERT 
  TO public 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own post limits" 
  ON public.daily_post_limits FOR UPDATE 
  TO public 
  USING (auth.uid() = user_id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name)
  VALUES (new.id, '', '');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created'
  ) THEN
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
  END IF;
END $$;

-- Create function to check daily post limit
CREATE OR REPLACE FUNCTION public.check_daily_post_limit(p_user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  current_count INTEGER;
BEGIN
  -- Get or create today's record
  INSERT INTO public.daily_post_limits (user_id, post_date, post_count)
  VALUES (p_user_id, CURRENT_DATE, 0)
  ON CONFLICT (user_id, post_date) DO NOTHING;
  
  -- Get current count
  SELECT post_count INTO current_count
  FROM public.daily_post_limits
  WHERE user_id = p_user_id AND post_date = CURRENT_DATE;
  
  -- Check if limit reached (3 posts per day)
  IF current_count >= 3 THEN
    RETURN FALSE;
  END IF;
  
  -- Increment count
  UPDATE public.daily_post_limits
  SET post_count = post_count + 1
  WHERE user_id = p_user_id AND post_date = CURRENT_DATE;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to delete user account
CREATE OR REPLACE FUNCTION public.delete_user_account(user_id UUID)
RETURNS VOID AS $$
BEGIN
  -- Delete user profile (this will cascade to posts and daily_post_limits)
  DELETE FROM public.profiles WHERE id = user_id;
  
  -- Delete user from auth.users
  DELETE FROM auth.users WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;