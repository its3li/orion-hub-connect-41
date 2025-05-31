
import React, { useState } from 'react';
import { User, Search, Plus, MessageSquare, Eye, ThumbsUp, Clock, Pin, Star, Filter, Bookmark, Share2 } from 'lucide-react';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  
  const categories = [
    { id: 'الكل', name: 'الكل', count: 245, color: 'purple' },
    { id: 'برمجة', name: 'برمجة', count: 89, color: 'blue' },
    { id: 'تصميم', name: 'تصميم', count: 67, color: 'pink' },
    { id: 'تسويق', name: 'تسويق', count: 45, color: 'green' },
    { id: 'إدارة أعمال', name: 'إدارة أعمال', count: 32, color: 'orange' },
    { id: 'أسئلة عامة', name: 'أسئلة عامة', count: 12, color: 'gray' }
  ];

  const posts = [
    {
      id: 1,
      title: 'ما أفضل طريقة لتعلم React للمبتدئين؟',
      author: 'أحمد محمد',
      authorLevel: 'خبير',
      category: 'برمجة',
      replies: 15,
      views: 234,
      likes: 28,
      lastActivity: 'منذ ساعتين',
      createdAt: 'منذ 3 أيام',
      content: 'أريد البدء في تعلم React ولكن لا أعرف من أين أبدأ. هل يمكن أن تنصحوني بأفضل المصادر والمسار التعليمي؟ لدي خبرة جيدة في HTML وCSS وبعض JavaScript.',
      isAnswered: true,
      isPinned: true,
      tags: ['React', 'JavaScript', 'مبتدئ', 'تعلم'],
      lastReply: {
        author: 'مريم أحمد',
        time: 'منذ ساعتين'
      }
    },
    {
      id: 2,
      title: 'تحدي في تصميم نظام إدارة المحتوى',
      author: 'فاطمة علي',
      authorLevel: 'متقدم',
      category: 'تصميم',
      replies: 8,
      views: 156,
      likes: 12,
      lastActivity: 'منذ 4 ساعات',
      createdAt: 'منذ يوم واحد',
      content: 'أواجه تحدياً في تصميم واجهة لنظام إدارة المحتوى. كيف يمكنني جعل التنقل أكثر سهولة للمستخدمين؟ المشكلة في كثرة الأقسام والفئات.',
      isAnswered: false,
      isPinned: false,
      tags: ['UI/UX', 'تصميم', 'إدارة المحتوى'],
      lastReply: {
        author: 'خالد حسن',
        time: 'منذ 4 ساعات'
      }
    },
    {
      id: 3,
      title: 'استراتيجيات التسويق الرقمي للشركات الناشئة',
      author: 'محمد علي',
      authorLevel: 'خبير',
      category: 'تسويق',
      replies: 22,
      views: 412,
      likes: 45,
      lastActivity: 'منذ يوم واحد',
      createdAt: 'منذ 3 أيام',
      content: 'ما هي أفضل استراتيجيات التسويق الرقمي للشركات الناشئة ذات الميزانية المحدودة؟ أبحث عن طرق فعالة ومنخفضة التكلفة.',
      isAnswered: true,
      isPinned: false,
      tags: ['تسويق رقمي', 'شركات ناشئة', 'ميزانية'],
      lastReply: {
        author: 'سارة أحمد',
        time: 'منذ يوم واحد'
      }
    },
    {
      id: 4,
      title: 'كيفية إدارة فريق العمل عن بُعد بفعالية؟',
      author: 'سارة محمود',
      authorLevel: 'متوسط',
      category: 'إدارة أعمال',
      replies: 31,
      views: 587,
      likes: 62,
      lastActivity: 'منذ 3 أيام',
      createdAt: 'منذ أسبوع',
      content: 'أحتاج نصائح عملية لإدارة فريق يعمل عن بُعد والحفاظ على الإنتاجية والتواصل الفعال. ما هي أفضل الأدوات والممارسات؟',
      isAnswered: true,
      isPinned: false,
      tags: ['إدارة الفرق', 'عمل عن بُعد', 'إنتاجية'],
      lastReply: {
        author: 'محمد حسن',
        time: 'منذ 3 أيام'
      }
    },
    {
      id: 5,
      title: 'مشكلة في ربط API مع قاعدة البيانات',
      author: 'خالد حسن',
      authorLevel: 'مبتدئ',
      category: 'برمجة',
      replies: 12,
      views: 189,
      likes: 8,
      lastActivity: 'منذ 5 ساعات',
      createdAt: 'منذ يومين',
      content: 'أواجه مشكلة في ربط API مع MongoDB. الكود يعمل محلياً ولكن لا يعمل على السيرفر. هل يمكن أن تساعدوني في حل هذه المشكلة؟',
      isAnswered: false,
      isPinned: false,
      tags: ['API', 'MongoDB', 'Node.js', 'مشكلة تقنية'],
      lastReply: {
        author: 'أحمد محمد',
        time: 'منذ 5 ساعات'
      }
    }
  ];

  const popularTags = [
    { name: 'React', count: 45, color: 'bg-blue-600' },
    { name: 'JavaScript', count: 38, color: 'bg-yellow-600' },
    { name: 'UI/UX', count: 32, color: 'bg-pink-600' },
    { name: 'Node.js', count: 28, color: 'bg-green-600' },
    { name: 'تسويق رقمي', count: 25, color: 'bg-purple-600' },
    { name: 'Python', count: 22, color: 'bg-indigo-600' },
    { name: 'تصميم', count: 20, color: 'bg-red-600' },
    { name: 'CSS', count: 18, color: 'bg-cyan-600' }
  ];

  const topContributors = [
    { name: 'أحمد محمد', posts: 45, reputation: 2450, avatar: 'أ', level: 'خبير' },
    { name: 'مريم أحمد', posts: 38, reputation: 2100, avatar: 'م', level: 'خبير' },
    { name: 'خالد حسن', posts: 32, reputation: 1890, avatar: 'خ', level: 'متقدم' },
    { name: 'فاطمة علي', posts: 28, reputation: 1650, avatar: 'ف', level: 'متقدم' },
    { name: 'محمد علي', posts: 25, reputation: 1420, avatar: 'م', level: 'متوسط' }
  ];

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
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow flex items-center whitespace-nowrap">
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

            {/* Posts List */}
            <div className="space-y-6">
              {sortedPosts.map(post => (
                <div key={post.id} className="glass-effect p-6 rounded-2xl hover-glow cursor-pointer transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Author Avatar */}
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {post.author[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Post Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {post.isPinned && (
                              <Pin className="w-4 h-4 text-yellow-400" />
                            )}
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              post.isAnswered 
                                ? 'bg-green-600/20 text-green-300' 
                                : 'bg-orange-600/20 text-orange-300'
                            }`}>
                              {post.isAnswered ? '✓ تم الرد' : '⏳ في الانتظار'}
                            </span>
                            <span className={`px-3 py-1 bg-${getCategoryColor(post.category)}-600/20 text-${getCategoryColor(post.category)}-300 rounded-full text-sm`}>
                              {post.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-white mb-2 hover:text-purple-300 transition-colors">
                            {post.title}
                          </h3>
                        </div>

                        {/* Post Actions */}
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <Bookmark className="w-4 h-4 text-gray-400" />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <Share2 className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {post.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs hover:bg-white/20 transition-colors cursor-pointer">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Post Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm gap-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                            <span className={`mr-1 text-xs ${getLevelColor(post.authorLevel)}`}>
                              ({post.authorLevel})
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.createdAt}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center hover:text-purple-300 transition-colors cursor-pointer">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>

                      {/* Last Reply */}
                      {post.lastReply && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <div className="text-sm text-gray-400">
                            آخر رد بواسطة <span className="text-purple-300">{post.lastReply.author}</span>
                            <span className="mr-2">{post.lastReply.time}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedPosts.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">لا توجد مواضيع متطابقة</h3>
                <p className="text-gray-300">جرب تغيير كلمات البحث أو الفئة</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Forum Stats */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">إحصائيات المنتدى</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">المواضيع</span>
                  <span className="text-purple-300 font-semibold">2,543</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">الردود</span>
                  <span className="text-purple-300 font-semibold">12,891</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">الأعضاء</span>
                  <span className="text-purple-300 font-semibold">1,205</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">نشط اليوم</span>
                  <span className="text-green-400 font-semibold">156</span>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">الوسوم الشائعة</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 ${tag.color}/20 text-white rounded-full text-sm cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1`}
                  >
                    #{tag.name}
                    <span className="text-xs opacity-75">({tag.count})</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">أبرز المساهمين</h3>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                        {contributor.avatar}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{contributor.name}</div>
                        <div className={`text-xs ${getLevelColor(contributor.level)}`}>
                          {contributor.level}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-300 text-sm font-semibold">{contributor.reputation}</div>
                      <div className="text-gray-400 text-xs">{contributor.posts} مشاركة</div>
                    </div>
                  </div>
                ))}
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
    </div>
  );
};

export default Forum;
