
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Target, TrendingUp, Edit, Save, X, Camera, Star, Clock, Download } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [profileData, setProfileData] = useState({
    name: localStorage.getItem('userName') || 'أحمد محمد',
    email: localStorage.getItem('userEmail') || 'ahmed@example.com',
    phone: localStorage.getItem('userPhone') || '+201234567890',
    address: localStorage.getItem('userAddress') || 'القاهرة، مصر',
    dateOfBirth: localStorage.getItem('userDateOfBirth') || '1990-01-01',
    bio: 'مطور ويب متخصص في React و Node.js، أحب تعلم التقنيات الجديدة ومشاركة المعرفة',
    interests: ['برمجة', 'تصميم', 'ذكاء اصطناعي'],
    experience: 'متوسط',
    goals: 'أريد أن أصبح مطور full-stack محترف'
  });

  const [tempData, setTempData] = useState(profileData);

  const handleSave = () => {
    setProfileData(tempData);
    // Save to localStorage
    Object.entries(tempData).forEach(([key, value]) => {
      if (typeof value === 'string') {
        localStorage.setItem(`user${key.charAt(0).toUpperCase() + key.slice(1)}`, value);
      }
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'تطوير تطبيقات الويب باستخدام React',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      instructor: 'أحمد محمد',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300',
      lastAccessed: 'منذ يومين',
      rating: 4.8
    },
    {
      id: 2,
      title: 'تصميم UI/UX احترافي',
      progress: 45,
      totalLessons: 18,
      completedLessons: 8,
      instructor: 'مريم علي',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300',
      lastAccessed: 'منذ أسبوع',
      rating: 4.7
    }
  ];

  const achievements = [
    { id: 1, title: 'أول كورس مكتمل', icon: '🎓', date: '2024-01-15', description: 'أكمل أول كورس بنجاح' },
    { id: 2, title: 'نشط في المجتمع', icon: '💬', date: '2024-02-01', description: '10 مشاركات في المنتدى' },
    { id: 3, title: 'متعلم متفاني', icon: '📚', date: '2024-02-10', description: '30 ساعة تعلم متواصلة' },
    { id: 4, title: 'مقيم نشط', icon: '⭐', date: '2024-02-15', description: 'قيم 5 كورسات' }
  ];

  const certificates = [
    {
      id: 1,
      title: 'شهادة إتمام كورس React',
      course: 'تطوير تطبيقات الويب باستخدام React',
      date: '2024-01-15',
      instructor: 'أحمد محمد',
      grade: 'ممتاز'
    },
    {
      id: 2,
      title: 'شهادة تصميم UI/UX',
      course: 'تصميم UI/UX احترافي',
      date: '2024-02-20',
      instructor: 'مريم علي',
      grade: 'جيد جداً'
    }
  ];

  const learningStats = {
    totalHours: 120,
    coursesCompleted: 3,
    coursesInProgress: 2,
    certificatesEarned: 2,
    forumPosts: 15,
    averageGrade: 'ممتاز'
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: <User className="w-5 h-5" /> },
    { id: 'courses', label: 'كورساتي', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'achievements', label: 'الإنجازات', icon: <Award className="w-5 h-5" /> },
    { id: 'certificates', label: 'الشهادات', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Profile Header */}
        <div className="glass-effect p-8 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {profileData.name[0]}
              </div>
              {isEditing && (
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Camera className="w-5 h-5 text-white" />
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={tempData.name}
                    onChange={(e) => setTempData(prev => ({ ...prev, name: e.target.value }))}
                    className="text-3xl font-bold bg-white/10 border-b-2 border-purple-400 text-white focus:outline-none focus:border-purple-300 px-2 py-1 rounded"
                    placeholder="اسمك الكامل"
                  />
                  <textarea
                    value={tempData.bio}
                    onChange={(e) => setTempData(prev => ({ ...prev, bio: e.target.value }))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 resize-none focus:outline-none focus:border-purple-400"
                    rows={3}
                    placeholder="نبذة عنك..."
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{profileData.name}</h1>
                  <p className="text-gray-300 mb-4">{profileData.bio}</p>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">{learningStats.totalHours}</div>
                  <div className="text-gray-400 text-sm">ساعة تعلم</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">{learningStats.coursesCompleted}</div>
                  <div className="text-gray-400 text-sm">كورس مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">{learningStats.certificatesEarned}</div>
                  <div className="text-gray-400 text-sm">شهادة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">{learningStats.forumPosts}</div>
                  <div className="text-gray-400 text-sm">مشاركة</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <Save className="w-5 h-5" />
                      حفظ التغييرات
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      <X className="w-5 h-5" />
                      إلغاء
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                  >
                    <Edit className="w-5 h-5" />
                    تعديل البيانات
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="glass-effect p-2 rounded-2xl mb-8">
          <div className="flex space-x-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2" />
                  المعلومات الشخصية
                </h2>
                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-purple-300 mr-3" />
                        <input
                          type="email"
                          value={tempData.email}
                          onChange={(e) => setTempData(prev => ({ ...prev, email: e.target.value }))}
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                          placeholder="البريد الإلكتروني"
                        />
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-purple-300 mr-3" />
                        <input
                          type="tel"
                          value={tempData.phone}
                          onChange={(e) => setTempData(prev => ({ ...prev, phone: e.target.value }))}
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                          placeholder="رقم الهاتف"
                        />
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-purple-300 mr-3" />
                        <input
                          type="text"
                          value={tempData.address}
                          onChange={(e) => setTempData(prev => ({ ...prev, address: e.target.value }))}
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                          placeholder="العنوان"
                        />
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-purple-300 mr-3" />
                        <input
                          type="date"
                          value={tempData.dateOfBirth}
                          onChange={(e) => setTempData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 text-purple-300 mr-3" />
                        <span>{profileData.email}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 text-purple-300 mr-3" />
                        <span>{profileData.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 text-purple-300 mr-3" />
                        <span>{profileData.address}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-5 h-5 text-purple-300 mr-3" />
                        <span>{new Date(profileData.dateOfBirth).toLocaleDateString('ar-EG')}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Learning Progress */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  التقدم التعليمي
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">إجمالي الساعات</span>
                      <span className="text-purple-300 font-semibold">{learningStats.totalHours} ساعة</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">الكورسات المكتملة</span>
                      <span className="text-purple-300 font-semibold">{learningStats.coursesCompleted}/5</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">متوسط الدرجات</span>
                      <span className="text-purple-300 font-semibold">{learningStats.averageGrade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map(course => (
                <div key={course.id} className="glass-effect p-6 rounded-2xl hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>
                      <p className="text-gray-300 text-sm">{course.instructor}</p>
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-gray-300 text-sm">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">التقدم</span>
                      <span className="text-purple-300">{course.completedLessons}/{course.totalLessons} درس</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-purple-300 text-sm mt-1">{course.progress}% مكتمل</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>آخر وصول: {course.lastAccessed}</span>
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    متابعة التعلم
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map(achievement => (
                <div key={achievement.id} className="glass-effect p-6 rounded-2xl hover-glow text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                  <p className="text-purple-300 text-xs">{new Date(achievement.date).toLocaleDateString('ar-EG')}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map(certificate => (
                <div key={certificate.id} className="glass-effect p-6 rounded-2xl hover-glow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{certificate.title}</h3>
                      <p className="text-gray-300 text-sm">{certificate.course}</p>
                      <p className="text-purple-300 text-sm">المدرب: {certificate.instructor}</p>
                    </div>
                    <div className="text-center">
                      <Star className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
                      <p className="text-yellow-300 text-sm">{certificate.grade}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(certificate.date).toLocaleDateString('ar-EG')}
                    </span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <Download className="w-4 h-4" />
                      تحميل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
