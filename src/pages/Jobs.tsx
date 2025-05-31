
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'برمجة', 'تصميم', 'تسويق', 'إدارة', 'مبيعات'];

  const jobs = [
    {
      id: 1,
      title: 'مطور React Frontend',
      company: 'شركة التقنية المتقدمة',
      location: 'القاهرة، مصر',
      type: 'دوام كامل',
      salary: '8000 - 12000 جنيه',
      category: 'برمجة',
      description: 'نبحث عن مطور React متمرس للانضمام لفريقنا',
      requirements: ['خبرة 3+ سنوات في React', 'معرفة بـ TypeScript', 'خبرة في Git'],
      posted: 'منذ يوم واحد'
    },
    {
      id: 2,
      title: 'مصمم UI/UX',
      company: 'استوديو الإبداع',
      location: 'الإسكندرية، مصر',
      type: 'دوام جزئي',
      salary: '5000 - 8000 جنيه',
      category: 'تصميم',
      description: 'مصمم UI/UX لتصميم تطبيقات الجوال والويب',
      requirements: ['خبرة في Figma', 'معرفة بـ Adobe XD', 'فهم UX principles'],
      posted: 'منذ 3 أيام'
    },
    {
      id: 3,
      title: 'أخصائي تسويق رقمي',
      company: 'وكالة النجاح',
      location: 'دبي، الإمارات',
      type: 'عن بُعد',
      salary: '10000 - 15000 درهم',
      category: 'تسويق',
      description: 'خبير في التسويق الرقمي وإدارة حملات السوشيال ميديا',
      requirements: ['خبرة في Google Ads', 'إدارة Facebook Ads', 'تحليل البيانات'],
      posted: 'منذ أسبوع'
    },
    {
      id: 4,
      title: 'مدير مشروع',
      company: 'مؤسسة التطوير',
      location: 'الرياض، السعودية',
      type: 'دوام كامل',
      salary: '15000 - 20000 ريال',
      category: 'إدارة',
      description: 'مدير مشروع لإدارة فرق التطوير التقني',
      requirements: ['شهادة PMP', 'خبرة 5+ سنوات', 'مهارات قيادية'],
      posted: 'منذ 5 أيام'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            فرص العمل
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف آلاف الوظائف في مختلف المجالات وابدأ مسيرتك المهنية
          </p>
        </div>

        {/* Search and Filter */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="ابحث عن وظيفة أو شركة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="glass-effect p-6 rounded-2xl hover-glow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-purple-300 text-lg mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                    <span>💰 {job.salary}</span>
                    <span>🕒 {job.posted}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm mb-2">
                    {job.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{job.description}</p>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">المتطلبات:</h4>
                <ul className="text-gray-300 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  تقدم للوظيفة
                </Link>
                <button className="px-6 py-3 glass-effect text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  حفظ الوظيفة
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="glass-effect p-12 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              لا توجد وظائف مطابقة
            </h3>
            <p className="text-gray-300">
              جرب تغيير معايير البحث أو التصنيف
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="glass-effect p-8 rounded-2xl mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            لم تجد الوظيفة المناسبة؟
          </h2>
          <p className="text-gray-300 mb-6">
            أنشئ ملفك الشخصي ودع أصحاب العمل يجدونك
          </p>
          <Link
            to="/profile"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow"
          >
            إنشاء ملف شخصي
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
