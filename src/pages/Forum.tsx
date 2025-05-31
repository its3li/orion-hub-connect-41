
import React, { useState } from 'react';
import { User } from 'lucide-react';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  
  const categories = ['الكل', 'برمجة', 'تصميم', 'تسويق', 'إدارة أعمال', 'أسئلة عامة'];

  const posts = [
    {
      id: 1,
      title: 'ما أفضل طريقة لتعلم React للمبتدئين؟',
      author: 'أحمد محمد',
      category: 'برمجة',
      replies: 15,
      views: 234,
      lastActivity: 'منذ ساعتين',
      content: 'أريد البدء في تعلم React ولكن لا أعرف من أين أبدأ. هل يمكن أن تنصحوني بأفضل المصادر والمسار التعليمي؟',
      isAnswered: true
    },
    {
      id: 2,
      title: 'تحدي في تصميم نظام إدارة المحتوى',
      author: 'فاطمة أحمد',
      category: 'تصميم',
      replies: 8,
      views: 156,
      lastActivity: 'منذ 4 ساعات',
      content: 'أواجه تحدياً في تصميم واجهة لنظام إدارة المحتوى. كيف يمكنني جعل التنقل أكثر سهولة للمستخدمين؟',
      isAnswered: false
    },
    {
      id: 3,
      title: 'استراتيجيات التسويق الرقمي للشركات الناشئة',
      author: 'محمد علي',
      category: 'تسويق',
      replies: 22,
      views: 412,
      lastActivity: 'منذ يوم واحد',
      content: 'ما هي أفضل استراتيجيات التسويق الرقمي للشركات الناشئة ذات الميزانية المحدودة؟',
      isAnswered: true
    },
    {
      id: 4,
      title: 'كيفية إدارة فريق العمل عن بُعد بفعالية؟',
      author: 'سارة محمود',
      category: 'إدارة أعمال',
      replies: 31,
      views: 587,
      lastActivity: 'منذ 3 أيام',
      content: 'أحتاج نصائح عملية لإدارة فريق يعمل عن بُعد والحفاظ على الإنتاجية والتواصل الفعال.',
      isAnswered: true
    },
    {
      id: 5,
      title: 'مشكلة في ربط API مع قاعدة البيانات',
      author: 'خالد حسن',
      category: 'برمجة',
      replies: 12,
      views: 189,
      lastActivity: 'منذ 5 ساعات',
      content: 'أواجه مشكلة في ربط API مع MongoDB. الكود يعمل محلياً ولكن لا يعمل على السيرفر.',
      isAnswered: false
    }
  ];

  const filteredPosts = posts.filter(post => 
    selectedCategory === 'الكل' || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            منتدى المجتمع
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            تواصل مع المجتمع، اطرح أسئلتك، وشارك خبراتك مع الآخرين
          </p>
        </div>

        {/* Categories and New Post */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow">
              + إنشاء موضوع جديد
            </button>
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="glass-effect p-6 rounded-2xl hover-glow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.isAnswered 
                        ? 'bg-green-600/20 text-green-300' 
                        : 'bg-orange-600/20 text-orange-300'
                    }`}>
                      {post.isAnswered ? '✓ تم الرد' : '⏳ في الانتظار'}
                    </span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="flex items-center mr-6">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <span className="mr-6">💬 {post.replies} رد</span>
                    <span className="mr-6">👁 {post.views} مشاهدة</span>
                    <span>{post.lastActivity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Forum Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-300 mb-2">2,543</div>
            <div className="text-gray-300">مواضيع</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-300 mb-2">12,891</div>
            <div className="text-gray-300">ردود</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-300 mb-2">1,205</div>
            <div className="text-gray-300">أعضاء</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-300 mb-2">156</div>
            <div className="text-gray-300">نشط اليوم</div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="glass-effect p-8 rounded-2xl mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">قواعد المجتمع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3">✅ مسموح</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• طرح أسئلة تقنية ومهنية</li>
                <li>• مشاركة الخبرات والمعرفة</li>
                <li>• تقديم حلول مفيدة</li>
                <li>• التفاعل بإيجابية واحترام</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-300 mb-3">❌ غير مسموح</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• المحتوى المسيء أو المهين</li>
                <li>• الإعلانات المباشرة</li>
                <li>• المواضيع خارج نطاق المنصة</li>
                <li>• انتهاك حقوق الملكية الفكرية</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
