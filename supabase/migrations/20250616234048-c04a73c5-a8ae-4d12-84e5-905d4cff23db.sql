
-- Add account deletion functionality by creating a function to handle user deletion
CREATE OR REPLACE FUNCTION delete_user_account(user_id UUID)
RETURNS VOID AS $$
BEGIN
  -- Delete user profile
  DELETE FROM public.profiles WHERE id = user_id;
  
  -- Delete user from auth.users (this will cascade to other related data)
  DELETE FROM auth.users WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create posts table for forum functionality
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on posts table
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create policies for posts
CREATE POLICY "Users can view all posts" ON public.posts FOR SELECT USING (true);
CREATE POLICY "Users can create their own posts" ON public.posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own posts" ON public.posts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own posts" ON public.posts FOR DELETE USING (auth.uid() = user_id);

-- Create daily post limits table
CREATE TABLE public.daily_post_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  post_date DATE NOT NULL DEFAULT CURRENT_DATE,
  post_count INTEGER NOT NULL DEFAULT 0,
  UNIQUE(user_id, post_date)
);

-- Enable RLS on daily post limits
ALTER TABLE public.daily_post_limits ENABLE ROW LEVEL SECURITY;

-- Create policies for daily post limits
CREATE POLICY "Users can view their own post limits" ON public.daily_post_limits FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own post limits" ON public.daily_post_limits FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own post limits" ON public.daily_post_limits FOR UPDATE USING (auth.uid() = user_id);

-- Create function to check and increment daily post count
CREATE OR REPLACE FUNCTION check_daily_post_limit(p_user_id UUID)
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
  
  -- Check if limit reached
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
