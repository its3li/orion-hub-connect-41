
import React, { useState } from 'react';
import { User, Search, Plus, MessageSquare, Eye, ThumbsUp, Clock, Pin, Star, Filter, Bookmark, Share2 } from 'lucide-react';
import NewPostModal from '../components/NewPostModal';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);

  const categories = [
    { id: 'الكل', name: 'الكل', count: 0, color: 'purple' },
    { id: 'برمجة', name: 'برمجة', count: 0, color: 'blue' },
    { id: 'تصميم', name: 'تصميم', count: 0, color: 'pink' },
    { id: 'تسويق', name: 'تسويق', count: 0, color: 'green' },
    { id: 'إدارة أعمال', name: 'إدارة أعمال', count: 0, color: 'orange' },
    { id: 'أسئلة عامة', name: 'أسئلة عامة', count: 0, color: 'gray' },
    { id: 'أمن سيبراني', name: 'أمن سيبراني', count: 0, color: 'red' }
  ];

  const popularTags: any[] = [];

  const topContributors: any[] = [];

  const handleNewPost = (postData: any) => {
    const newPost = {
      id: posts.length + 1,
      title: postData.title,
      author: postData.author,
      authorLevel: 'مبتدئ',
      category: postData.category,
      replies: 0,
      views: 1,
      likes: 0,
      lastActivity: 'الآن',
      createdAt: 'الآن',
      content: postData.content,
      isAnswered: false,
      isPinned: false,
      tags: postData.tags,
      lastReply: null,
      images: postData.images,
      audioFile: postData.audioFile
    };
    
    setPosts([newPost, ...posts]);
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
        return b.id - a.id;
      case 'popular':
        return b.likes - a.likes;
      case 'replies':
        return b.replies - a.replies;
      case 'views':
        return b.views - a.views;
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

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            منتدى المجتمع
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  onClick={() => setIsNewPostModalOpen(true)}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow flex items-center whitespace-nowrap"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  موضوع جديد
                </button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* No Posts */}
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">لا توجد مواضيع حالياً</h3>
              <p className="text-gray-300">كن أول من يبدأ النقاش وانشر موضوعاً جديداً</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Forum Stats */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">إحصائيات المنتدى</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">المواضيع</span>
                  <span className="text-purple-300 font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">الردود</span>
                  <span className="text-purple-300 font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">الأعضاء</span>
                  <span className="text-purple-300 font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">نشط اليوم</span>
                  <span className="text-green-400 font-semibold">0</span>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">الوسوم الشائعة</h3>
              <div className="text-center text-gray-400">
                لا توجد وسوم متاحة حالياً
              </div>
            </div>

            {/* Top Contributors */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">أبرز المساهمين</h3>
              <div className="text-center text-gray-400">
                لا يوجد مساهمون حالياً
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">قواعد المجتمع</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">كن محترماً ومهذباً</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">ابحث قبل السؤال</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-300">استخدم العناوين الواضحة</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-300">لا تنشر محتوى مسيء</span>
                </div>
                <div className="flex items-start">
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
