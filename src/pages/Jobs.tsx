
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, DollarSign, Briefcase, Filter, Star, Users } from 'lucide-react';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedLocation, setSelectedLocation] = useState('الكل');
  const [selectedType, setSelectedType] = useState('الكل');

  const categories = ['الكل', 'برمجة', 'تصميم', 'تسويق', 'إدارة', 'كتابة', 'ترجمة', 'بيانات'];
  const locations = ['الكل', 'القاهرة', 'الإسكندرية', 'الجيزة', 'عن بعد', 'المنصورة', 'أسوان'];
  const jobTypes = ['الكل', 'دوام كامل', 'دوام جزئي', 'مشروع', 'تدريب'];

  const jobs = [
    {
      id: 1,
      title: 'مطور React متقدم',
      company: 'شركة التقنيات المتقدمة',
      location: 'القاهرة',
      type: 'دوام كامل',
      category: 'برمجة',
      salary: '15,000 - 25,000 جنيه',
      experience: '3-5 سنوات',
      description: 'نبحث عن مطور React متمرس للانضمام لفريقنا في تطوير تطبيقات ويب حديثة...',
      requirements: ['React', 'JavaScript', 'TypeScript', 'Node.js'],
      posted: 'منذ يومين',
      applications: 45,
      rating: 4.8,
      urgent: true
    },
    {
      id: 2,
      title: 'مصمم UI/UX',
      company: 'استوديو الإبداع الرقمي',
      location: 'الإسكندرية',
      type: 'دوام كامل',
      category: 'تصميم',
      salary: '12,000 - 18,000 جنيه',
      experience: '2-4 سنوات',
      description: 'مطلوب مصمم UI/UX مبدع لتصميم واجهات تطبيقات الجوال والويب...',
      requirements: ['Figma', 'Adobe XD', 'Photoshop', 'User Research'],
      posted: 'منذ 3 أيام',
      applications: 32,
      rating: 4.6
    },
    {
      id: 3,
      title: 'أخصائي تسويق رقمي',
      company: 'وكالة التسويق الذكي',
      location: 'عن بعد',
      type: 'دوام جزئي',
      category: 'تسويق',
      salary: '8,000 - 12,000 جنيه',
      experience: '1-3 سنوات',
      description: 'نبحث عن أخصائي تسويق رقمي لإدارة حملات إعلانية على وسائل التواصل...',
      requirements: ['Facebook Ads', 'Google Ads', 'SEO', 'Analytics'],
      posted: 'منذ أسبوع',
      applications: 28,
      rating: 4.4
    },
    {
      id: 4,
      title: 'محلل بيانات',
      company: 'شركة البيانات الذكية',
      location: 'الجيزة',
      type: 'دوام كامل',
      category: 'بيانات',
      salary: '18,000 - 28,000 جنيه',
      experience: '3-6 سنوات',
      description: 'مطلوب محلل بيانات متخصص في تحليل البيانات الضخمة وإعداد التقارير...',
      requirements: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
      posted: 'منذ 4 أيام',
      applications: 52,
      rating: 4.9
    },
    {
      id: 5,
      title: 'كاتب محتوى تقني',
      company: 'مدونة التقنية العربية',
      location: 'عن بعد',
      type: 'مشروع',
      category: 'كتابة',
      salary: '5,000 - 8,000 جنيه',
      experience: '1-2 سنوات',
      description: 'نبحث عن كاتب محتوى متخصص في المجال التقني لكتابة مقالات تعليمية...',
      requirements: ['Arabic Writing', 'Technical Knowledge', 'SEO', 'Research'],
      posted: 'منذ 5 أيام',
      applications: 38,
      rating: 4.3
    },
    {
      id: 6,
      title: 'مدير مشاريع تقنية',
      company: 'مجموعة الحلول الرقمية',
      location: 'القاهرة',
      type: 'دوام كامل',
      category: 'إدارة',
      salary: '25,000 - 35,000 جنيه',
      experience: '5-8 سنوات',
      description: 'مطلوب مدير مشاريع خبير لقيادة فرق التطوير وإدارة المشاريع التقنية...',
      requirements: ['Project Management', 'Agile', 'Scrum', 'Leadership'],
      posted: 'منذ يوم',
      applications: 67,
      rating: 4.7,
      featured: true
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'الكل' || job.location === selectedLocation;
    const matchesType = selectedType === 'الكل' || job.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            فرص العمل المتاحة
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            اكتشف آلاف الفرص الوظيفية في مختلف المجالات واطلق مسيرتك المهنية
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-xl">
              <Briefcase className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-300">وظيفة متاحة</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <Users className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-gray-300">شركة شريكة</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <Star className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-gray-300">معدل التوظيف</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <DollarSign className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">20K</div>
              <div className="text-gray-300">متوسط الراتب</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن وظيفة أو شركة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
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

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
            >
              {locations.map(location => (
                <option key={location} value={location} className="bg-gray-800">
                  {location}
                </option>
              ))}
            </select>

            {/* Job Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
            >
              {jobTypes.map(type => (
                <option key={type} value={type} className="bg-gray-800">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300">
            تم العثور على <span className="text-white font-semibold">{filteredJobs.length}</span> وظيفة
          </p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">ترتيب حسب الأحدث</span>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform relative">
              {job.urgent && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  عاجل
                </span>
              )}
              {job.featured && (
                <span className="absolute top-4 left-4 bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  مميز
                </span>
              )}

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-purple-300 font-medium">{job.company}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-white font-medium">{job.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-300" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-purple-300" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-purple-300" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-purple-300" />
                  <span>{job.experience}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.slice(0, 3).map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
                {job.requirements.length > 3 && (
                  <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs">
                    +{job.requirements.length - 3} المزيد
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  <span>{job.posted}</span>
                  <span className="mx-2">•</span>
                  <span>{job.applications} متقدم</span>
                </div>
                <Link
                  to="/apply"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors hover-glow"
                >
                  تقديم الطلب
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">لا توجد وظائف متاحة</h3>
            <p className="text-gray-500">جرب تغيير معايير البحث أو المرشحات</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 glass-effect text-white rounded-lg hover:bg-white/20 transition-colors">
              عرض المزيد من الوظائف
            </button>
          </div>
        )}

        {/* Job Alerts Section */}
        <div className="glass-effect p-8 rounded-2xl mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">تنبيهات الوظائف</h2>
            <p className="text-gray-300 mb-6">
              احصل على إشعارات فورية عند توفر وظائف تناسب مهاراتك واهتماماتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors hover-glow">
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
