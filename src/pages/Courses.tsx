import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, Users, BookOpen, Award, TrendingUp, Code, Palette, BarChart, Shield, Megaphone, Database } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedLevel, setSelectedLevel] = useState('الكل');

  const categories = ['الكل', 'برمجة', 'تصميم', 'تسويق', 'إدارة أعمال', 'علوم البيانات', 'أمن سيبراني'];
  const levels = ['الكل', 'مبتدئ', 'متوسط', 'متقدم'];

  const courses = [
    {
      id: 1,
      title: 'تطوير تطبيقات الويب باستخدام React',
      instructor: 'أحمد محمد',
      category: 'برمجة',
      level: 'متوسط',
      duration: '8 أسابيع',
      price: '499 جنيه',
      originalPrice: '699 جنيه',
      rating: 4.8,
      students: 0,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      description: 'تعلم React من الأساسيات حتى الاحتراف مع مشاريع عملية',
      skills: ['React', 'JavaScript', 'CSS', 'API Integration'],
      icon: <Code className="w-6 h-6" />,
      isPopular: true
    },
    {
      id: 2,
      title: 'تطوير تطبيقات Flutter للجوال',
      instructor: 'سارة أحمد',
      category: 'برمجة',
      level: 'متقدم',
      duration: '12 أسبوع',
      price: '699 جنيه',
      originalPrice: '999 جنيه',
      rating: 4.9,
      students: 0,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      description: 'إنشاء تطبيقات جوال احترافية باستخدام Flutter و Dart',
      skills: ['Flutter', 'Dart', 'Mobile Development', 'Firebase'],
      icon: <Code className="w-6 h-6" />,
      isNew: true
    },
    {
      id: 3,
      title: 'تصميم UI/UX احترافي',
      instructor: 'مريم علي',
      category: 'تصميم',
      level: 'مبتدئ',
      duration: '6 أسابيع',
      price: '399 جنيه',
      originalPrice: '599 جنيه',
      rating: 4.7,
      students: 0,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      description: 'أساسيات التصميم وتجربة المستخدم باستخدام Figma و Adobe XD',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'User Research'],
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'التسويق الرقمي الشامل',
      instructor: 'خالد حسن',
      category: 'تسويق',
      level: 'متوسط',
      duration: '10 أسابيع',
      price: '549 جنيه',
      originalPrice: '799 جنيه',
      rating: 4.6,
      students: 0,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      description: 'استراتيجيات التسويق الرقمي ووسائل التواصل الاجتماعي',
      skills: ['Social Media', 'Google Ads', 'SEO', 'Content Marketing'],
      icon: <TrendingUp className="w-6 h-6" />,
      isPopular: true
    },
    {
      id: 5,
      title: 'تحليل البيانات باستخدام Python',
      instructor: 'دكتور محمد إبراهيم',
      category: 'علوم البيانات',
      level: 'متقدم',
      duration: '14 أسبوع',
      price: '799 جنيه',
      originalPrice: '1199 جنيه',
      rating: 4.9,
      students: 0,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      description: 'تعلم تحليل البيانات والذكاء الاصطناعي باستخدام Python',
      skills: ['Python', 'Pandas', 'Machine Learning', 'Data Visualization'],
      icon: <BarChart className="w-6 h-6" />,
      isNew: true
    },
    {
      id: 6,
      title: 'إدارة المشاريع الرقمية',
      instructor: 'أمينة صالح',
      category: 'إدارة أعمال',
      level: 'مبتدئ',
      duration: '8 أسابيع',
      price: '449 جنيه',
      originalPrice: '649 جنيه',
      rating: 4.5,
      students: 0,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
      description: 'أساسيات إدارة المشاريع وأدوات التخطيط الحديثة',
      skills: ['Project Management', 'Agile', 'Scrum', 'Team Leadership'],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 7,
      title: 'الأمن السيبراني والحماية الرقمية',
      instructor: 'دكتور عمر الشريف',
      category: 'أمن سيبراني',
      level: 'متقدم',
      duration: '16 أسبوع',
      price: '899 جنيه',
      originalPrice: '1299 جنيه',
      rating: 4.9,
      students: 0,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      description: 'تعلم أساسيات الأمن السيبراني وحماية الأنظمة والشبكات',
      skills: ['Cybersecurity', 'Network Security', 'Ethical Hacking', 'Risk Assessment'],
      icon: <Shield className="w-6 h-6" />,
      isNew: true
    },
    {
      id: 8,
      title: 'تصميم الشعارات والإعلانات',
      instructor: 'نادية حسين',
      category: 'تصميم',
      level: 'مبتدئ',
      duration: '6 أسابيع',
      price: '349 جنيه',
      originalPrice: '499 جنيه',
      rating: 4.6,
      students: 0,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      description: 'تعلم تصميم الشعارات الاحترافية والإعلانات الجذابة',
      skills: ['Logo Design', 'Adobe Illustrator', 'Brand Identity', 'Creative Design'],
      icon: <Megaphone className="w-6 h-6" />,
      isPopular: true
    },
    {
      id: 9,
      title: 'إدارة قواعد البيانات MySQL',
      instructor: 'محمد الصادق',
      category: 'برمجة',
      level: 'متوسط',
      duration: '10 أسابيع',
      price: '599 جنيه',
      originalPrice: '849 جنيه',
      rating: 4.7,
      students: 0,
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
      description: 'تعلم إدارة وتطوير قواعد البيانات باستخدام MySQL',
      skills: ['MySQL', 'Database Design', 'SQL Queries', 'Data Management'],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'الكل' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            كورساتنا التدريبية
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف مجموعة واسعة من الكورسات المتخصصة التي تساعدك على تطوير مهاراتك المهنية
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن كورس..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-purple-300 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
            >
              {levels.map(level => (
                <option key={level} value={level} className="bg-gray-800">
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-effect p-4 rounded-xl text-center">
            <BookOpen className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{courses.length}</div>
            <div className="text-gray-300 text-sm">كورس متاح</div>
          </div>
          <div className="glass-effect p-4 rounded-xl text-center">
            <Users className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-gray-300 text-sm">طالب نشط</div>
          </div>
          <div className="glass-effect p-4 rounded-xl text-center">
            <Star className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-gray-300 text-sm">متوسط التقييم</div>
          </div>
          <div className="glass-effect p-4 rounded-xl text-center">
            <Award className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-gray-300 text-sm">شهادة صادرة</div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="glass-effect p-6 rounded-2xl hover-glow group transform hover:scale-105 transition-all duration-300">
              {/* Course Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {course.isPopular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full font-semibold">
                      الأكثر طلباً
                    </span>
                  )}
                  {course.isNew && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">
                      جديد
                    </span>
                  )}
                </div>

                {/* Course Icon */}
                <div className="absolute bottom-3 right-3 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  {course.icon}
                </div>
              </div>

              {/* Course Info */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                    {course.category}
                  </span>
                  <span className="text-gray-400 text-sm">{course.level}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {course.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {course.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {course.skills.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                      +{course.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Instructor */}
                <div className="flex items-center text-gray-300 text-sm mb-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    {course.instructor[0]}
                  </div>
                  <span>{course.instructor}</span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-purple-300">{course.price}</span>
                    <span className="text-lg text-gray-400 line-through mr-2">{course.originalPrice}</span>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">خصم 30%</span>
                </div>

                {/* Action Button */}
                <Link
                  to={`/course/${course.id}`}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow block text-center"
                >
                  عرض التفاصيل
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">لا توجد كورسات متطابقة</h3>
            <p className="text-gray-300">جرب تغيير معايير البحث أو الفلاتر</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">لم تجد ما تبحث عنه؟</h2>
            <p className="text-gray-300 mb-6">
              تواصل معنا لاقتراح كورسات جديدة أو للحصول على استشارة مجانية
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
