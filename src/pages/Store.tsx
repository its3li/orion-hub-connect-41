
import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Star, Eye, Download, User, Grid, List } from 'lucide-react';

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('الأحدث');

  const categories = [
    'الكل',
    'قوالب ويب',
    'تصاميم جرافيك',
    'مشاريع البرمجة',
    'القوالب التعليمية',
    'التطبيقات',
    'الأدوات والمكونات'
  ];

  const sortOptions = [
    'الأحدث',
    'الأقدم',
    'الأعلى تقييماً',
    'الأكثر تحميلاً',
    'السعر: من الأقل للأعلى',
    'السعر: من الأعلى للأقل'
  ];

  // Sample products data (empty for now as requested)
  const products = [];

  const EmptyState = () => (
    <div className="text-center py-16">
      <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-500" />
      <h3 className="text-2xl font-bold text-white mb-4">المتجر قيد التطوير</h3>
      <p className="text-gray-300 mb-6">
        سيتم إضافة المنتجات والأعمال قريباً. ترقبوا إطلاق منتجات المستقلين والمطورين المميزة
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        <div className="glass-effect p-6 rounded-2xl">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Grid className="w-8 h-8 text-purple-400" />
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">قوالب ومشاريع</h4>
          <p className="text-gray-400 text-sm">تصفح مجموعة واسعة من القوالب والمشاريع الجاهزة</p>
        </div>
        <div className="glass-effect p-6 rounded-2xl">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-purple-400" />
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">أعمال المستقلين</h4>
          <p className="text-gray-400 text-sm">اكتشف أعمال المطورين والمصممين المحترفين</p>
        </div>
        <div className="glass-effect p-6 rounded-2xl">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-purple-400" />
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">جودة مضمونة</h4>
          <p className="text-gray-400 text-sm">جميع المنتجات مراجعة ومعتمدة لضمان الجودة</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            متجر <span className="text-gradient">ORION</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف أفضل الأعمال والمشاريع من المستقلين والمطورين المحترفين
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Product Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* User Search */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن مستخدم معين..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
            >
              {sortOptions.map(option => (
                <option key={option} value={option} className="bg-gray-800">
                  {option}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className="glass-effect p-8 rounded-2xl">
          {products.length === 0 ? (
            <EmptyState />
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {/* Products will be rendered here when data is available */}
            </div>
          )}
        </div>

        {/* Categories Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">فئات المنتجات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.slice(1).map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-4 rounded-xl border-2 border-dashed transition-all hover:border-purple-400 hover:bg-purple-600/10 ${
                  selectedCategory === category 
                    ? 'border-purple-400 bg-purple-600/20' 
                    : 'border-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">{['🌐', '🎨', '💻', '📚', '📱', '🔧'][index]}</span>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
