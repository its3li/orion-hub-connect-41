
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            ORION
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white">
            منصتك الرائدة للنمو المهني
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            اكتشف عالماً من الفرص مع ORION - منصة شاملة للكورسات التدريبية، فرص العمل، 
            وربط المواهب بالعملاء. ابدأ رحلتك نحو النجاح اليوم!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/register"
              className="px-8 py-4 bg-purple-600 text-white rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all hover-glow"
            >
              ابدأ الآن مجاناً
            </Link>
            <Link
              to="/courses"
              className="px-8 py-4 glass-effect text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all hover-glow"
            >
              استكشف الكورسات
            </Link>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-purple-300 mx-auto" />
          </div>
        </div>
      </section>

      {/* خدماتنا */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            خدماتنا المميزة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* الكورسات */}
            <div className="glass-effect p-8 rounded-2xl hover-glow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                كورسات تدريبية
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                دورات تدريبية متقدمة في مختلف المجالات التقنية والمهنية مع شهادات معتمدة
              </p>
              <Link 
                to="/courses"
                className="block text-center mt-6 text-purple-300 hover:text-purple-200 transition-colors"
              >
                اكتشف المزيد ←
              </Link>
            </div>

            {/* فرص العمل */}
            <div className="glass-effect p-8 rounded-2xl hover-glow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                فرص عمل
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                اكتشف آلاف الوظائف في مختلف المجالات وتقدم للوظيفة المناسبة لمهاراتك
              </p>
              <Link 
                to="/jobs"
                className="block text-center mt-6 text-purple-300 hover:text-purple-200 transition-colors"
              >
                ابحث عن وظيفة ←
              </Link>
            </div>

            {/* ربط المواهب */}
            <div className="glass-effect p-8 rounded-2xl hover-glow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                ربط المواهب
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                نربط بين أصحاب المواهب والعملاء لتحقيق أفضل النتائج للطرفين
              </p>
              <Link 
                to="/register"
                className="block text-center mt-6 text-purple-300 hover:text-purple-200 transition-colors"
              >
                انضم إلينا ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* الإحصائيات */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-300 mb-2">1000+</div>
              <div className="text-gray-300">طالب مسجل</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
              <div className="text-gray-300">كورس متاح</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-300 mb-2">200+</div>
              <div className="text-gray-300">فرصة عمل</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-gray-300">معدل الرضا</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              جاهز لبدء رحلتك المهنية؟
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              انضم إلى آلاف المتخصصين الذين يطورون مهاراتهم مع ORION
            </p>
            <Link
              to="/register"
              className="inline-block px-12 py-4 bg-purple-600 text-white text-xl font-semibold rounded-xl hover:bg-purple-700 transition-all hover-glow"
            >
              ابدأ رحلتك الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
