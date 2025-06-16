
import React, { useState, useEffect } from 'react';
import { User, Search, Plus, MessageSquare, Eye, ThumbsUp, Clock, Pin, Star, Filter, Bookmark, Share2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import NewPostModal from '../components/NewPostModal';

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  author?: string;
  authorLevel?: string;
  replies?: number;
  views?: number;
  likes?: number;
  lastActivity?: string;
  isAnswered?: boolean;
  isPinned?: boolean;
  lastReply?: any;
  images?: any[];
}

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<any>(null);
  const [userProfiles, setUserProfiles] = useState<any[]>([]);
  const [dailyPostCount, setDailyPostCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const categories = [
    { id: 'الكل', name: 'الكل', count: 0, color: 'purple' },
    { id: 'برمجة', name: 'برمجة', count: 0, color: 'blue' },
    { id: 'تصميم', name: 'تصميم', count: 0, color: 'pink' },
    { id: 'تسويق', name: 'تسويق', count: 0, color: 'green' },
    { id: 'إدارة أعمال', name: 'إدارة أعمال', count: 0, color: 'orange' },
    { id: 'أسئلة عامة', name: 'أسئلة عامة', count: 0, color: 'gray' },
    { id: 'أمن سيبراني', name: 'أمن سيبراني', count: 0, color: 'red' }
  ];

  useEffect(() => {
    // Check auth state
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        await checkDailyPostLimit(user.id);
      }
      setIsLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkDailyPostLimit(session.user.id);
      }
    });

    fetchPosts();
    fetchUserProfiles();

    return () => subscription.unsubscribe();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
        return;
      }

      if (data) {
        const postsWithDefaults = data.map(post => ({
          ...post,
          author: 'مستخدم',
          authorLevel: 'مبتدئ',
          replies: 0,
          views: Math.floor(Math.random() * 50) + 1,
          likes: Math.floor(Math.random() * 10),
          lastActivity: formatDate(post.created_at),
          isAnswered: false,
          isPinned: false,
          lastReply: null,
          images: []
        }));
        setPosts(postsWithDefaults);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchUserProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, account_type');

      if (error) {
        console.error('Error fetching profiles:', error);
        return;
      }

      if (data) {
        setUserProfiles(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const checkDailyPostLimit = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('daily_post_limits')
        .select('post_count')
        .eq('user_id', userId)
        .eq('post_date', new Date().toISOString().split('T')[0])
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking post limit:', error);
        return;
      }

      setDailyPostCount(data?.post_count || 0);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'الآن';
    if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
    if (diffHours < 24) return `منذ ${diffHours} ساعة`;
    return `منذ ${diffDays} يوم`;
  };

  const getUserName = (userId: string) => {
    const profile = userProfiles.find(p => p.id === userId);
    if (profile && (profile.first_name || profile.last_name)) {
      return `${profile.first_name || ''} ${profile.last_name || ''}`.trim();
    }
    return 'مستخدم';
  };

  const handleNewPost = async (postData: any) => {
    if (!user) {
      toast({
        title: "خطأ",
        description: "يجب تسجيل الدخول أولاً",
        variant: "destructive",
      });
      return;
    }

    if (dailyPostCount >= 3) {
      toast({
        title: "تم الوصول للحد الأقصى",
        description: "لا يمكنك نشر أكثر من 3 مواضيع في اليوم الواحد",
        variant: "destructive",
      });
      return;
    }

    try {
      // Check post limit using database function
      const { data: canPost, error: limitError } = await supabase
        .rpc('check_daily_post_limit', { p_user_id: user.id });

      if (limitError) {
        console.error('Error checking post limit:', limitError);
        toast({
          title: "خطأ",
          description: "حدث خطأ أثناء التحقق من حد النشر",
          variant: "destructive",
        });
        return;
      }

      if (!canPost) {
        toast({
          title: "تم الوصول للحد الأقصى",
          description: "لا يمكنك نشر أكثر من 3 مواضيع في اليوم الواحد",
          variant: "destructive",
        });
        return;
      }

      // Insert the new post
      const { data, error } = await supabase
        .from('posts')
        .insert([
          {
            title: postData.title,
            content: postData.content,
            category: postData.category,
            user_id: user.id
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error creating post:', error);
        toast({
          title: "خطأ",
          description: "حدث خطأ أثناء نشر الموضوع",
          variant: "destructive",
        });
        return;
      }

      // Refresh posts and post count
      await fetchPosts();
      await checkDailyPostLimit(user.id);

      toast({
        title: "تم نشر الموضوع",
        description: "تم نشر موضوعك بنجاح",
      });

      setIsNewPostModalOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "خطأ",
        description: "حدث خطأ غير متوقع",
        variant: "destructive",
      });
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      case 'popular':
        return (b.likes || 0) - (a.likes || 0);
      case 'replies':
        return (b.replies || 0) - (a.replies || 0);
      case 'views':
        return (b.views || 0) - (a.views || 0);
      default:
        return 0;
    }
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'خبير': return 'text-yellow-400';
      case 'متقدم': return 'text-purple-400';
      case 'متوسط': return 'text-blue-400';
      case 'مبتدئ': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat?.color || 'purple';
  };

  // Update category counts
  const updatedCategories = categories.map(cat => ({
    ...cat,
    count: cat.id === 'الكل' ? posts.length : posts.filter(p => p.category === cat.name).length
  }));

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 px-4 pb-12 flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            منتدى المجتمع
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
            تواصل مع المجتمع، اطرح أسئلتك، وشارك خبراتك مع الآخرين
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filters */}
            <div className="glass-effect p-6 rounded-2xl mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="ابحث في المنتدى..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <Filter className="text-purple-300 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="latest" className="bg-gray-800">الأحدث</option>
                    <option value="popular" className="bg-gray-800">الأكثر إعجاباً</option>
                    <option value="replies" className="bg-gray-800">الأكثر ردود</option>
                    <option value="views" className="bg-gray-800">الأكثر مشاهدة</option>
                  </select>
                </div>

                {/* New Post Button */}
                <button 
                  onClick={() => {
                    if (!user) {
                      toast({
                        title: "تسجيل الدخول مطلوب",
                        description: "يجب تسجيل الدخول أولاً لنشر موضوع جديد",
                        variant: "destructive",
                      });
                      return;
                    }
                    setIsNewPostModalOpen(true);
                  }}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow flex items-center whitespace-nowrap"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  موضوع جديد
                  {user && dailyPostCount >= 3 && (
                    <span className="mr-2 text-xs bg-red-500 px-2 py-1 rounded-full">
                      {dailyPostCount}/3
                    </span>
                  )}
                </button>
              </div>

              {/* Daily Post Limit Warning */}
              {user && dailyPostCount >= 3 && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-300 text-sm">
                    لقد وصلت للحد الأقصى من المواضيع اليومية (3/3). يمكنك النشر مرة أخرى غداً.
                  </p>
                </div>
              )}

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {updatedCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <span className="px-2">{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            {sortedPosts.length > 0 ? (
              <div className="space-y-4">
                {sortedPosts.map(post => (
                  <div key={post.id} className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {getUserName(post.user_id)[0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{getUserName(post.user_id)}</span>
                            <span className={`text-xs px-2 py-1 rounded-full bg-white/10 ${getLevelColor(post.authorLevel || 'مبتدئ')}`}>
                              {post.authorLevel || 'مبتدئ'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{post.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(post.category)}-600/20 text-${getCategoryColor(post.category)}-300`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 hover:text-purple-300 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {post.content}
                    </p>

                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.replies || 0}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views || 0}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes || 0}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 px-4">لا توجد مواضيع حالياً</h3>
                <p className="text-gray-300 px-4">كن أول من يبدأ النقاش وانشر موضوعاً جديداً</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Forum Stats */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4 px-2">إحصائيات المنتدى</h3>
              <div className="space-y-3">
                <div className="flex justify-between px-2">
                  <span className="text-gray-300">المواضيع</span>
                  <span className="text-purple-300 font-semibold">{posts.length}</span>
                </div>
                <div className="flex justify-between px-2">
                  <span className="text-gray-300">الردود</span>
                  <span className="text-purple-300 font-semibold">{posts.reduce((acc, post) => acc + (post.replies || 0), 0)}</span>
                </div>
                <div className="flex justify-between px-2">
                  <span className="text-gray-300">الأعضاء</span>
                  <span className="text-purple-300 font-semibold">{userProfiles.length}</span>
                </div>
                <div className="flex justify-between px-2">
                  <span className="text-gray-300">نشط اليوم</span>
                  <span className="text-green-400 font-semibold">{user ? 1 : 0}</span>
                </div>
              </div>
            </div>

            {/* User Post Limit Status */}
            {user && (
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 px-2">حالة النشر اليومي</h3>
                <div className="space-y-3">
                  <div className="flex justify-between px-2">
                    <span className="text-gray-300">المواضيع المنشورة اليوم</span>
                    <span className={`font-semibold ${dailyPostCount >= 3 ? 'text-red-400' : 'text-green-400'}`}>
                      {dailyPostCount}/3
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 px-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dailyPostCount >= 3 ? 'bg-red-500' : 'bg-green-500'
                      }`} 
                      style={{ width: `${(dailyPostCount / 3) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 text-sm px-2">
                    {dailyPostCount >= 3 
                      ? 'وصلت للحد الأقصى اليومي' 
                      : `يمكنك نشر ${3 - dailyPostCount} موضوع إضافي اليوم`
                    }
                  </p>
                </div>
              </div>
            )}

            {/* Top Contributors */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4 px-2">أبرز المساهمين</h3>
              {userProfiles.length > 0 ? (
                <div className="space-y-3">
                  {userProfiles.slice(0, 5).map((profile, index) => (
                    <div key={profile.id} className="flex items-center gap-3 px-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {(profile.first_name || 'U')[0]}
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm font-medium">
                          {profile.first_name || profile.last_name 
                            ? `${profile.first_name || ''} ${profile.last_name || ''}`.trim()
                            : 'مستخدم'
                          }
                        </div>
                        <div className="text-gray-400 text-xs">{profile.account_type || 'عضو'}</div>
                      </div>
                      <div className="text-purple-300 text-sm font-semibold">
                        #{index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 px-2">
                  لا يوجد مساهمون حالياً
                </div>
              )}
            </div>

            {/* Community Guidelines */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4 px-2">قواعد المجتمع</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start px-2">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">كن محترماً ومهذباً</span>
                </div>
                <div className="flex items-start px-2">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">ابحث قبل السؤال</span>
                </div>
                <div className="flex items-start px-2">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">استخدم العناوين الواضحة</span>
                </div>
                <div className="flex items-start px-2">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">حد أقصى 3 مواضيع يومياً</span>
                </div>
                <div className="flex items-start px-2">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-300">لا تنشر محتوى مسيء</span>
                </div>
                <div className="flex items-start px-2">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-300">لا تنشر إعلانات مباشرة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      <NewPostModal
        isOpen={isNewPostModalOpen}
        onClose={() => setIsNewPostModalOpen(false)}
        onSubmit={handleNewPost}
      />
    </div>
  );
};

export default Forum;
