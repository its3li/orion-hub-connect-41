import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, Users, Award, Star, PlayCircle, CheckCircle, FileText, Download, Crown, Video, Trophy, MessageCircle } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  
  const course = {
    id: 1,
    title: 'تطوير تطبيقات الويب باستخدام React',
    instructor: 'أحمد محمد',
    category: 'برمجة',
    level: 'متوسط',
    duration: '8 أسابيع',
    price: '499 جنيه',
    originalPrice: '699 جنيه',
    vipPrice: '799 جنيه',
    vipOriginalPrice: '999 جنيه',
    rating: 4.8,
    students: 1205,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    description: 'كورس شامل لتعلم React من الأساسيات حتى الاحتراف مع مشاريع عملية وحقيقية. ستتعلم كيفية بناء تطبيقات ويب تفاعلية ومتجاوبة باستخدام أحدث تقنيات React.',
    whatYouWillLearn: [
      'أساسيات React و JSX',
      'إدارة الحالة مع useState و useEffect',
      'بناء مكونات قابلة لإعادة الاستخدام',
      'التعامل مع APIs وجلب البيانات',
      'React Router للتنقل',
      'أفضل الممارسات في React',
      'نشر التطبيق على الإنترنت',
      'مشاريع عملية متقدمة'
    ],
    vipFeatures: [
      'جلسات البث المباشر التفاعلية',
      'إمكانية التعليق على الفيديوهات',
      'اختبارات تفاعلية بعد كل محاضرة',
      'محاضرة إضافية - التطبيق العملي',
      'دعم فني مباشر 24/7',
      'مجموعة VIP المغلقة',
      'شهادة احترافية معتمدة',
      'وصول مبكر للكورسات الجديدة'
    ],
    curriculum: [
      {
        title: 'مقدمة في React',
        lessons: ['ما هو React؟', 'إعداد بيئة التطوير', 'أول مكون React'],
        duration: '2 ساعات'
      },
      {
        title: 'JSX والمكونات',
        lessons: ['فهم JSX', 'إنشاء مكونات', 'Props والمعاملات'],
        duration: '3 ساعات'
      },
      {
        title: 'إدارة الحالة',
        lessons: ['useState Hook', 'useEffect Hook', 'إدارة الحالة المعقدة'],
        duration: '4 ساعات'
      },
      {
        title: 'مشروع عملي (VIP فقط)',
        lessons: ['تخطيط المشروع', 'بناء المكونات', 'التطبيق النهائي'],
        duration: '6 ساعات',
        isVip: true
      }
    ],
    requirements: [
      'معرفة أساسية بـ HTML و CSS',
      'معرفة JavaScript الأساسية',
      'حاسوب مع اتصال بالإنترنت',
      'رغبة في التعلم والممارسة'
    ],
    skills: ['React', 'JavaScript', 'CSS', 'API Integration', 'Git', 'Deployment']
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <nav className="text-purple-300 text-sm mb-4">
              <Link to="/courses" className="hover:text-purple-200">الكورسات</Link>
              <span className="mx-2">←</span>
              <span className="text-gray-400">{course.category}</span>
              <span className="mx-2">←</span>
              <span className="text-gray-400">{course.title}</span>
            </nav>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {course.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                <span className="text-white font-semibold">{course.rating}</span>
                <span className="text-gray-400 mr-2">({course.reviews} تقييم)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span>{course.students} طالب</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 mr-2" />
                <span>{course.level}</span>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-semibold">{course.instructor[0]}</span>
              </div>
              <div>
                <div className="text-white font-semibold">{course.instructor}</div>
                <div className="text-purple-300 text-sm">مدرب معتمد</div>
              </div>
            </div>
          </div>
          
          {/* Course Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Regular Course Card */}
            <div className="glass-effect p-6 rounded-2xl">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">الاشتراك العادي</h3>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
              </div>
              
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-purple-300">{course.price}</span>
                  <span className="text-lg text-gray-400 line-through mr-3">{course.originalPrice}</span>
                </div>
                <div className="text-green-400 text-sm font-semibold">خصم 30%</div>
              </div>
              
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>وصول مدى الحياة للمحتوى</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>جميع فيديوهات الكورس</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>مواد تدريبية قابلة للتحميل</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>شهادة إتمام أساسية</span>
                </div>
              </div>
              
              <Link
                to={`/payment/${course.id}?plan=regular`}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow block text-center mb-3"
              >
                اشترك الآن
              </Link>
              
              <button className="w-full glass-effect text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                <PlayCircle className="w-5 h-5 inline mr-2" />
                معاينة مجانية
              </button>
            </div>

            {/* VIP Course Card */}
            <div className="glass-effect p-6 rounded-2xl border-2 border-yellow-500/50 relative overflow-hidden">
              {/* VIP Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-yellow-600 text-black px-4 py-1 text-sm font-bold flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                VIP
              </div>
              
              <div className="text-center mb-4 mt-4">
                <h3 className="text-lg font-semibold text-white mb-2">اشتراك VIP المميز</h3>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-32 object-cover rounded-lg mb-4 border-2 border-yellow-500/50"
                />
              </div>
              
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-yellow-400">{course.vipPrice}</span>
                  <span className="text-lg text-gray-400 line-through mr-3">{course.vipOriginalPrice}</span>
                </div>
                <div className="text-green-400 text-sm font-semibold">خصم 20% - عرض محدود!</div>
              </div>

              {/* VIP Features Preview */}
              <div className="space-y-2 text-sm mb-6">
                <div className="text-yellow-400 font-semibold mb-2">مميزات حصرية:</div>
                <div className="flex items-center text-gray-300">
                  <Video className="w-4 h-4 text-yellow-400 mr-2" />
                  <span>بث مباشر تفاعلي</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  <span>تعليقات ومناقشات</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                  <span>اختبارات تفاعلية</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Crown className="w-4 h-4 text-yellow-400 mr-2" />
                  <span>محاضرة إضافية حصرية</span>
                </div>
              </div>
              
              <Link
                to={`/payment/${course.id}?plan=vip`}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all hover-glow block text-center mb-3"
              >
                <Crown className="w-5 h-5 inline mr-2" />
                اشترك في VIP
              </Link>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">ماذا ستتعلم</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VIP Features */}
            <div className="glass-effect p-8 rounded-2xl border border-yellow-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Crown className="w-6 h-6 text-yellow-500 mr-2" />
                مميزات VIP الحصرية
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.vipFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Crown className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Curriculum */}
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">محتوى الكورس</h2>
              <div className="space-y-4">
                {course.curriculum.map((section, index) => (
                  <div key={index} className={`border rounded-lg ${
                    section.isVip ? 'border-yellow-500/50 bg-yellow-500/5' : 'border-white/20'
                  }`}>
                    <div className={`p-4 rounded-t-lg ${
                      section.isVip ? 'bg-yellow-500/10' : 'bg-white/5'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                          {section.isVip && (
                            <Crown className="w-5 h-5 text-yellow-500 mr-2" />
                          )}
                        </div>
                        <span className="text-purple-300 text-sm">{section.duration}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center text-gray-300">
                            <PlayCircle className="w-4 h-4 mr-3 text-purple-400" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Requirements */}
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">المتطلبات</h2>
              <ul className="space-y-3">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <FileText className="w-5 h-5 mr-3 text-purple-400" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Skills & More Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">المهارات التي ستكتسبها</h3>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">معلومات إضافية</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <strong className="text-white">اللغة:</strong> العربية
                </div>
                <div>
                  <strong className="text-white">آخر تحديث:</strong> ديسمبر 2024
                </div>
                <div>
                  <strong className="text-white">مستوى الصعوبة:</strong> {course.level}
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <span>مواد قابلة للتحميل</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
