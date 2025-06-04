import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 animate-fade-in">
            من نحن
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ORION - منصة رائدة في مجال التطوير المهني والتعليم الرقمي في الوطن العربي
          </p>
        </div>

        {/* Hero Section */}
        <div className="glass-effect p-12 rounded-3xl mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">نبني مستقبل التعليم الرقمي</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              في عالم يتطور بسرعة البرق، نؤمن أن التعليم هو المفتاح الحقيقي للنجاح. 
              منصة ORION تجمع بين أحدث التقنيات التعليمية وأفضل المدربين لتقدم لك تجربة تعلم استثنائية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">2025</div>
                <div className="text-gray-300">سنة التأسيس</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">0</div>
                <div className="text-gray-300">طالب مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">0</div>
                <div className="text-gray-300">كورس متخصص</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-white">رؤيتنا</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نسعى لأن نكون المنصة الأولى في الوطن العربي للتطوير المهني، 
              حيث نربط بين المواهب والفرص لبناء مستقبل مهني مشرق للجميع. 
              نؤمن بأن كل شخص يستحق الوصول إلى تعليم عالي الجودة يساعده على تحقيق أحلامه.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-white">مهمتنا</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              توفير منصة شاملة تجمع بين التعليم عالي الجودة، فرص العمل المتنوعة، 
              وربط أصحاب المهارات بالعملاء المحتملين. نسعى لتمكين كل فرد من 
              اكتساب المهارات اللازمة للنجاح في عصر التكنولوجيا الرقمية.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="glass-effect p-10 rounded-3xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">قصة نجاحنا</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                بدأت فكرة ORION من رؤية بسيطة: جعل التعلم والنمو المهني متاحاً للجميع. 
                في عام 2025، لاحظنا الفجوة الكبيرة بين المهارات المطلوبة في سوق العمل 
                والمهارات المتوفرة لدى الخريجين والمهنيين الطموحين.
              </p>
              <p>
                قررنا إنشاء منصة تجمع كل ما يحتاجه الشخص لتطوير مهاراته المهنية 
                في مكان واحد. من الكورسات التدريبية المتخصصة إلى فرص العمل الحقيقية، 
                ومن ربط المواهب بالعملاء إلى بناء مجتمع مهني متفاعل ومتعاون.
              </p>
              <p>
                اليوم، ORION تخدم آلاف المستخدمين وتساعدهم في تحقيق أهدافهم المهنية 
                من خلال منصة متكاملة وسهلة الاستخدام. نحن فخورون بكل قصة نجاح 
                ونواصل العمل لتحقيق المزيد من الإنجازات.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">الخبرة في البرمجة</span>
                  <span className="text-purple-400 font-bold">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">الذكاء الاصطناعي</span>
                  <span className="text-purple-400 font-bold">65%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">التصميم</span>
                  <span className="text-purple-400 font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">التسويق والدعاية</span>
                  <span className="text-purple-400 font-bold">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">مجالات أخرى</span>
                  <span className="text-purple-400 font-bold">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">الجودة</h3>
              <p className="text-gray-300 text-sm">نلتزم بتقديم محتوى عالي الجودة ومحدث باستمرار يواكب أحدث التطورات</p>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">التعاون</h3>
              <p className="text-gray-300 text-sm">نؤمن بقوة العمل الجماعي وبناء الشراكات طويلة المدى</p>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">الابتكار</h3>
              <p className="text-gray-300 text-sm">نسعى للتجديد المستمر في أساليب التعلم واستخدام أحدث التقنيات</p>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">التميز</h3>
              <p className="text-gray-300 text-sm">نسعى دائماً لتقديم أفضل تجربة تعليمية ومهنية لمستخدمينا</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="glass-effect p-10 rounded-3xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">فريقنا المتميز</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">يوسف عمرو دياب</h3>
              <p className="text-purple-300 mb-3">المؤسس والمدير التنفيذي</p>
              <p className="text-gray-300 text-sm">خبرة سنتين في التكنولوجيا والتعليم، حاصل على ماجستير في إدارة الأعمال</p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">علي محمود</h3>
              <p className="text-purple-300 mb-3">مدير النظام والتوظيف</p>
              <p className="text-gray-300 text-sm">متخصص في إدارة الأنظمة وتطوير استراتيجيات التوظيف الفعالة</p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">👨‍🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">براء يسري</h3>
              <p className="text-purple-300 mb-3">مدير المحتوى</p>
              <p className="text-gray-300 text-sm">خبير في تصميم المناهج والبرامج التدريبية وإنتاج المحتوى التعليمي</p>
            </div>
          </div>
        </div>

        {/* Achievements & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">إنجازاتنا بالأرقام</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
                <div className="text-gray-300 text-sm">طالب مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
                <div className="text-gray-300 text-sm">كورس متخصص</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
                <div className="text-gray-300 text-sm">فرصة عمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">0%</div>
                <div className="text-gray-300 text-sm">معدل الرضا</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
                <div className="text-gray-300 text-sm">مدرب معتمد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
                <div className="text-gray-300 text-sm">شركة شريكة</div>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">جوائز وشهادات</h2>
            <div className="text-center py-8">
              <div className="text-gray-400">
                <span className="text-4xl mb-4 block">🏆</span>
                <p>لا توجد جوائز أو شهادات حالياً</p>
                <p className="text-sm mt-2">نسعى لتحقيق المزيد من الإنجازات</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-effect p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">انضم إلى رحلة النجاح</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            كن جزءاً من مجتمع ORION واستفد من أفضل الكورسات والفرص المهنية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow">
              ابدأ رحلتك الآن
            </button>
            <button className="px-8 py-4 glass-effect text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
              استكشف الكورسات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
