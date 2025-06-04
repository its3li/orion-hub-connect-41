
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

  const jobs: any[] = [];

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
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-gray-300">وظيفة متاحة</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <Users className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-gray-300">شركة شريكة</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <Star className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">0%</div>
              <div className="text-gray-300">معدل التوظيف</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <DollarSign className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">0</div>
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

        {/* No Jobs Available */}
        <div className="text-center py-12">
          <Briefcase className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl text-gray-400 mb-2">لا توجد وظائف متاحة حالياً</h3>
          <p className="text-gray-500">سيتم إضافة المزيد من الوظائف قريباً</p>
        </div>

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
