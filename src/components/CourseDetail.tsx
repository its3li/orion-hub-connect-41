
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, Users, Award, Star, PlayCircle, CheckCircle, FileText, Download } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  
  // Mock course data (في التطبيق الحقيقي سيتم جلبها من API)
  const course = {
    id: 1,
    title: 'تطوير تطبيقات الويب باستخدام React',
    instructor: 'أحمد محمد',
    category: 'برمجة',
    level: 'متوسط',
    duration: '8 أسابيع',
    price: '499 جنيه',
    originalPrice: '699 جنيه',
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
        title: 'مشروع عملي',
        lessons: ['تخطيط المشروع', 'بناء المكونات', 'التطبيق النهائي'],
        duration: '6 ساعات'
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
          
          {/* Course Card */}
          <div className="lg:col-span-1">
            <div className="glass-effect p-6 rounded-2xl sticky top-24">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-purple-300">{course.price}</span>
                  <span className="text-lg text-gray-400 line-through mr-3">{course.originalPrice}</span>
                </div>
                <div className="text-green-400 text-sm font-semibold">خصم 30%</div>
              </div>
              
              <Link
                to={`/payment/${course.id}`}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow block text-center mb-4"
              >
                اشترك الآن
              </Link>
              
              <button className="w-full glass-effect text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors mb-6">
                <PlayCircle className="w-5 h-5 inline mr-2" />
                معاينة مجانية
              </button>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>وصول مدى الحياة</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>شهادة إتمام</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>دعم فني مباشر</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>مواد تدريبية قابلة للتحميل</span>
                </div>
              </div>
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
            
            {/* Curriculum */}
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">محتوى الكورس</h2>
              <div className="space-y-4">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="border border-white/20 rounded-lg">
                    <div className="p-4 bg-white/5 rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{section.title}</h3>
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
