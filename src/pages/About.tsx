
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            من نحن
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ORION - منصة رائدة في مجال التطوير المهني والتعليم الرقمي
          </p>
        </div>

        {/* رؤيتنا ومهمتنا */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">رؤيتنا</h2>
            <p className="text-gray-300 leading-relaxed">
              نسعى لأن نكون المنصة الأولى في الوطن العربي للتطوير المهني، 
              حيث نربط بين المواهب والفرص لبناء مستقبل مهني مشرق للجميع.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">مهمتنا</h2>
            <p className="text-gray-300 leading-relaxed">
              توفير منصة شاملة تجمع بين التعليم عالي الجودة، فرص العمل المتنوعة، 
              وربط أصحاب المهارات بالعملاء المحتملين.
            </p>
          </div>
        </div>

        {/* قصتنا */}
        <div className="glass-effect p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">قصتنا</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              بدأت فكرة ORION من رؤية بسيطة: جعل التعلم والنمو المهني متاحاً للجميع. 
              في عام 2024، لاحظنا الفجوة الكبيرة بين المهارات المطلوبة في سوق العمل 
              والمهارات المتوفرة لدى الخريجين والمهنيين.
            </p>
            <p>
              قررنا إنشاء منصة تجمع كل ما يحتاجه الشخص لتطوير مهاراته المهنية 
              في مكان واحد. من الكورسات التدريبية المتخصصة إلى فرص العمل الحقيقية، 
              ومن ربط المواهب بالعملاء إلى بناء مجتمع مهني متفاعل.
            </p>
            <p>
              اليوم، ORION تخدم آلاف المستخدمين وتساعدهم في تحقيق أهدافهم المهنية 
              من خلال منصة متكاملة وسهلة الاستخدام.
            </p>
          </div>
        </div>

        {/* قيمنا */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">الجودة</h3>
              <p className="text-gray-300">نلتزم بتقديم محتوى عالي الجودة ومحدث باستمرار</p>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">التعاون</h3>
              <p className="text-gray-300">نؤمن بقوة العمل الجماعي وبناء الشراكات</p>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">الابتكار</h3>
              <p className="text-gray-300">نسعى للتجديد المستمر في أساليب التعلم</p>
            </div>
          </div>
        </div>

        {/* فريقنا */}
        <div className="glass-effect p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">فريقنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">أحمد محمد</h3>
              <p className="text-purple-300 mb-2">المؤسس والمدير التنفيذي</p>
              <p className="text-gray-300 text-sm">خبرة 10 سنوات في التكنولوجيا والتعليم</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">فاطمة أحمد</h3>
              <p className="text-purple-300 mb-2">مديرة التطوير التقني</p>
              <p className="text-gray-300 text-sm">متخصصة في تطوير المنصات التعليمية</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">محمد علي</h3>
              <p className="text-purple-300 mb-2">مدير المحتوى التعليمي</p>
              <p className="text-gray-300 text-sm">خبير في تصميم المناهج والبرامج التدريبية</p>
            </div>
          </div>
        </div>

        {/* إحصائياتنا */}
        <div className="glass-effect p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">إنجازاتنا</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">1000+</div>
              <div className="text-gray-300">طالب مسجل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
              <div className="text-gray-300">كورس متخصص</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">200+</div>
              <div className="text-gray-300">فرصة عمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-gray-300">معدل الرضا</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
