
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Star, Users, Award, CheckCircle, TrendingUp, Globe, Play, BookOpen, Briefcase, Code, Palette, BarChart, MessageSquare, User, Building, Freelancer } from 'lucide-react';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'تطوير تطبيقات الويب باستخدام React',
      instructor: 'أحمد محمد',
      price: '499 جنيه',
      originalPrice: '699 جنيه',
      rating: 4.8,
      students: 1205,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      category: 'برمجة',
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'تصميم UI/UX احترافي',
      instructor: 'مريم علي',
      price: '399 جنيه',
      originalPrice: '599 جنيه',
      rating: 4.7,
      students: 1456,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      category: 'تصميم',
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'تحليل البيانات باستخدام Python',
      instructor: 'دكتور محمد إبراهيم',
      price: '799 جنيه',
      originalPrice: '1199 جنيه',
      rating: 4.9,
      students: 687,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      category: 'علوم البيانات',
      icon: <BarChart className="w-5 h-5" />
    }
  ];

  const learningPaths = [
    {
      type: 'student',
      title: 'كطالب',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      steps: [
        'اختر المجال الذي يناسب اهتماماتك',
        'ابدأ بالكورسات التأسيسية',
        'تدرب على المشاريع العملية',
        'احصل على شهادة معتمدة',
        'ابني portfolio قوي'
      ]
    },
    {
      type: 'employee',
      title: 'كموظف',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      steps: [
        'حدد المهارات المطلوبة في وظيفتك',
        'خذ كورسات تطوير المهارات',
        'تعلم أحدث التقنيات في مجالك',
        'طبق ما تعلمته في عملك',
        'اطلب ترقية أو زيادة راتب'
      ]
    },
    {
      type: 'freelancer',
      title: 'كمستقل',
      icon: <User className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      steps: [
        'تعلم مهارات عالية الطلب',
        'بني portfolio متميز',
        'تعلم مهارات التسويق الشخصي',
        'ابدأ في استقبال المشاريع',
        'وسع شبكة عملائك'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-pulse">
              ORION
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white">
              منصتك الرائدة للنمو المهني
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              اكتشف عالماً من الفرص مع ORION - منصة شاملة للكورسات التدريبية، فرص العمل، 
              وربط المواهب بالعملاء. ابدأ رحلتك نحو النجاح اليوم!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Link
              to="/register"
              className="px-8 py-4 bg-purple-600 text-white rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all hover-glow transform hover:scale-105"
            >
              ابدأ الآن مجاناً
            </Link>
            <Link
              to="/courses"
              className="px-8 py-4 glass-effect text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all hover-glow transform hover:scale-105"
            >
              استكشف الكورسات
            </Link>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-purple-300 mx-auto" />
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">كيف تبدأ رحلتك؟</h2>
            <p className="text-xl text-gray-300">اختر المسار الذي يناسب وضعك الحالي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover-glow group transform hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  {path.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {path.title}
                </h3>
                <div className="space-y-4">
                  {path.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className={`w-6 h-6 bg-gradient-to-r ${path.color} rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/register"
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${path.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                  >
                    ابدأ الآن
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">الكورسات الأكثر طلباً</h2>
            <p className="text-xl text-gray-300">ابدأ رحلتك مع أفضل الكورسات المختارة بعناية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map(course => (
              <div key={course.id} className="glass-effect p-6 rounded-2xl hover-glow group transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 right-3 bg-purple-600 p-2 rounded-full">
                    {course.icon}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-purple-600/80 text-white text-xs rounded-full">
                      {course.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center text-gray-300 text-sm mb-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    {course.instructor[0]}
                  </div>
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-purple-300">{course.price}</span>
                    <span className="text-sm text-gray-400 line-through mr-2">{course.originalPrice}</span>
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow block text-center"
                >
                  عرض التفاصيل
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="inline-block px-8 py-3 glass-effect text-white rounded-lg font-semibold hover:bg-white/20 transition-colors hover-glow"
            >
              عرض جميع الكورسات
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            لماذا تختار ORION؟
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="glass-effect p-8 rounded-2xl hover-glow">
              <Globe className="w-16 h-16 text-purple-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">تعلم من أي مكان</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                احصل على تعليم عالي الجودة من المنزل مع كورسات تفاعلية ومدربين محترفين
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> محتوى محدث باستمرار</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> دعم فني 24/7</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> شهادات معتمدة</li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Online Learning" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-purple-600/20 rounded-2xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Team Work" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-purple-600/20 rounded-2xl"></div>
            </div>
            <div className="glass-effect p-8 rounded-2xl hover-glow order-1 lg:order-2">
              <TrendingUp className="w-16 h-16 text-purple-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">نمو مهني مضمون</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                طور مهاراتك مع خبراء الصناعة واحصل على فرص عمل حقيقية
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> مشاريع عملية</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> متابعة شخصية</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> شبكة مهنية واسعة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            خدماتنا المميزة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* الكورسات */}
            <div className="glass-effect p-8 rounded-2xl hover-glow group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                كورسات تدريبية
              </h3>
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                دورات تدريبية متقدمة في مختلف المجالات التقنية والمهنية مع شهادات معتمدة
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <Link 
                to="/courses"
                className="block text-center mt-6 text-purple-300 hover:text-purple-200 transition-colors font-semibold"
              >
                اكتشف المزيد ←
              </Link>
            </div>

            {/* فرص العمل */}
            <div className="glass-effect p-8 rounded-2xl hover-glow group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                فرص عمل
              </h3>
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                اكتشف آلاف الوظائف في مختلف المجالات وتقدم للوظيفة المناسبة لمهاراتك
              </p>
              <div className="flex justify-center items-center mb-4">
                <Users className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-purple-300 text-sm">+500 شركة شريكة</span>
              </div>
              <Link 
                to="/jobs"
                className="block text-center mt-6 text-purple-300 hover:text-purple-200 transition-colors font-semibold"
              >
                ابحث عن وظيفة ←
              </Link>
            </div>

            {/* ربط المواهب */}
            <div className="glass-effect p-8 rounded-2xl hover-glow group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                ربط المواهب
              </h3>
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                نربط بين أصحاب المواهب والعملاء لتحقيق أفضل النتائج للطرفين
              </p>
              <div className="flex justify-center items-center mb-4">
                <Award className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-purple-300 text-sm">مصداقية مضمونة</span>
              </div>
              <Link 
                to="/register"
                className="block text-center mt-6 text-purple-300 hover:text-purple-200 transition-colors font-semibold"
              >
                انضم إلينا ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto hover:scale-105 transition-transform">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              جاهز لبدء رحلتك المهنية؟
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              انضم إلى آلاف المتخصصين الذين يطورون مهاراتهم مع ORION
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-block px-12 py-4 bg-purple-600 text-white text-xl font-semibold rounded-xl hover:bg-purple-700 transition-all hover-glow transform hover:scale-105"
              >
                ابدأ رحلتك الآن
              </Link>
              <Link
                to="/courses"
                className="inline-block px-12 py-4 glass-effect text-white text-xl font-semibold rounded-xl hover:bg-white/20 transition-all hover-glow transform hover:scale-105"
              >
                تصفح الكورسات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
