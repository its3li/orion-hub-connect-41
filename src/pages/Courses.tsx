
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['الكل', 'برمجة', 'تصميم', 'تسويق', 'إدارة أعمال', 'مهارات شخصية'];

  const courses = [
    {
      id: 1,
      title: 'تطوير تطبيقات الويب باستخدام React',
      instructor: 'أحمد محمد',
      category: 'برمجة',
      level: 'متوسط',
      duration: '8 أسابيع',
      price: '499 جنيه',
      rating: 4.8,
      students: 1205,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
      description: 'تعلم React من الأساسيات حتى الاحتراف مع مشاريع عملية',
      skills: ['React', 'JavaScript', 'CSS', 'API Integration']
    },
    {
      id: 2,
      title: 'تصميم واجهات المستخدم UI/UX',
      instructor: 'فاطمة أحمد',
      category: 'تصميم',
      level: 'مبتدئ',
      duration: '6 أسابيع',
      price: '399 جنيه',
      rating: 4.9,
      students: 892,
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400',
      description: 'أسس تصميم تجارب المستخدم وواجهات تفاعلية جذابة',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research']
    },
    {
      id: 3,
      title: 'التسويق الرقمي ووسائل التواصل',
      instructor: 'محمد علي',
      category: 'تسويق',
      level: 'مبتدئ',
      duration: '5 أسابيع',
      price: '299 جنيه',
      rating: 4.7,
      students: 1543,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      description: 'استراتيجيات التسويق الرقمي الحديثة وإدارة الحملات',
      skills: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics']
    },
    {
      id: 4,
      title: 'إدارة المشاريع الاحترافية',
      instructor: 'سارة محمود',
      category: 'إدارة أعمال',
      level: 'متقدم',
      duration: '10 أسابيع',
      price: '699 جنيه',
      rating: 4.6,
      students: 678,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      description: 'أحدث أساليب إدارة المشاريع والفرق التقنية',
      skills: ['Agile', 'Scrum', 'Project Planning', 'Team Leadership']
    },
    {
      id: 5,
      title: 'برمجة تطبيقات الهاتف المحمول',
      instructor: 'خالد حسن',
      category: 'برمجة',
      level: 'متقدم',
      duration: '12 أسابيع',
      price: '799 جنيه',
      rating: 4.9,
      students: 523,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
      description: 'تطوير تطبيقات iOS و Android باستخدام React Native',
      skills: ['React Native', 'Mobile Development', 'iOS', 'Android']
    },
    {
      id: 6,
      title: 'مهارات التواصل والقيادة',
      instructor: 'نور الدين',
      category: 'مهارات شخصية',
      level: 'مبتدئ',
      duration: '4 أسابيع',
      price: '199 جنيه',
      rating: 4.5,
      students: 2105,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      description: 'طور مهاراتك في التواصل والقيادة الفعالة',
      skills: ['Communication', 'Leadership', 'Public Speaking', 'Team Building']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'الكل' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            الكورسات التدريبية
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف مجموعة واسعة من الكورسات المتخصصة لتطوير مهاراتك المهنية
          </p>
        </div>

        {/* Search and Filter */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="ابحث عن كورس أو مدرب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
          </div>

          {/* Categories */}
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
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="glass-effect rounded-2xl overflow-hidden hover-glow">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.level}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {course.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-300 text-sm font-medium">{course.category}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white text-sm mr-1">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <span>👨‍🏫 {course.instructor}</span>
                  <span className="mx-2">•</span>
                  <span>👥 {course.students} طالب</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.skills.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {course.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                      +{course.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-300">
                    {course.price}
                  </span>
                  <Link
                    to={`/course/${course.id}`}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    التفاصيل
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="glass-effect p-12 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              لا توجد كورسات مطابقة
            </h3>
            <p className="text-gray-300">
              جرب تغيير معايير البحث أو التصنيف
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="glass-effect p-8 rounded-2xl mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            لم تجد الكورس المناسب؟
          </h2>
          <p className="text-gray-300 mb-6">
            اقترح علينا كورس جديد أو تواصل معنا لطلب كورس مخصص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow"
            >
              اقتراح كورس
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 glass-effect text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              إنشاء حساب مجاني
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
