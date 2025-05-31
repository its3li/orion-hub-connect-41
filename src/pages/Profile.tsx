import React, { useState, useEffect } from 'react';
import { User, FileText, BookOpen, Award, TrendingUp, Calendar, MapPin, Link as LinkIcon, Mail, Phone, Edit3, Settings, Download, Share2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'مستخدم',
    lastName: 'جديد',
    email: 'user@example.com',
    phone: '+123456789',
    skills: 'لم يتم تحديد المهارات بعد',
    experience: 'مبتدئ',
    bio: 'مرحباً بك في ORION! يمكنك تحديث معلوماتك الشخصية من هنا.',
    location: 'القاهرة، مصر',
    website: 'www.example.com',
    jobTitle: 'مطور',
    company: 'شركة التقنيات المتقدمة',
    joinDate: 'يناير 2024',
    birthDate: '1 يناير 1995',
    languages: 'العربية، الإنجليزية',
    interests: 'البرمجة، التصميم، التعلم المستمر'
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage if available
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const completedCourses = [
    {
      id: 1,
      title: 'تطوير تطبيقات الويب باستخدام React',
      instructor: 'أحمد محمد',
      completionDate: '15 نوفمبر 2024',
      grade: 'A+',
      certificate: true,
      progress: 100
    },
    {
      id: 2,
      title: 'تصميم UI/UX احترافي',
      instructor: 'مريم علي',
      completionDate: '5 أكتوبر 2024',
      grade: 'A',
      certificate: true,
      progress: 100
    }
  ];

  const ongoingCourses = [
    {
      id: 4,
      title: 'تحليل البيانات باستخدام Python',
      instructor: 'دكتور محمد إبراهيم',
      progress: 65,
      nextLesson: 'Machine Learning Basics',
      estimatedCompletion: '15 يناير 2025'
    }
  ];

  const achievements = [
    { title: 'عضو جديد', icon: '🎉', date: userData.joinDate },
    { title: 'متعلم نشط', icon: '⚡', date: '1 أكتوبر 2024' },
    { title: 'مشارك في المجتمع', icon: '🤝', date: '15 أكتوبر 2024' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const updatedData = {
      ...userData,
      [e.target.name]: e.target.value
    };
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('تم حفظ البيانات بنجاح!');
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: <User className="w-4 h-4" /> },
    { id: 'courses', label: 'كورساتي', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'achievements', label: 'الإنجازات', icon: <Award className="w-4 h-4" /> },
    { id: 'settings', label: 'الإعدادات', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Logout Confirmation Dialog */}
        {showLogoutDialog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="glass-effect p-6 rounded-xl max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold text-white mb-4">تأكيد تسجيل الخروج</h3>
              <p className="text-gray-300 mb-6">هل أنت متأكد من رغبتك في تسجيل الخروج؟</p>
              <div className="flex gap-4">
                <button
                  onClick={handleLogout}
                  className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  تسجيل الخروج
                </button>
                <button
                  onClick={() => setShowLogoutDialog(false)}
                  className="flex-1 py-2 glass-effect text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Header */}
        <div className="glass-effect p-8 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16 text-white" />
                )}
              </div>
              <label htmlFor="profile-image" className="absolute bottom-2 right-2 bg-purple-600 p-2 rounded-full cursor-pointer hover:bg-purple-700 transition-colors">
                <Edit3 className="w-4 h-4 text-white" />
              </label>
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-3xl font-bold text-white mb-2">
                {userData.firstName} {userData.lastName}
              </h1>
              <p className="text-xl text-purple-300 mb-4">{userData.jobTitle}</p>
              <p className="text-gray-300 mb-4 max-w-2xl">{userData.bio}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>انضم في {userData.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setShowLogoutDialog(true)}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                تسجيل الخروج
              </button>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                مشاركة الملف
              </button>
              <button className="px-6 py-2 glass-effect text-white rounded-lg hover:bg-white/20 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                تحميل السيرة
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <BookOpen className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{completedCourses.length}</div>
            <div className="text-gray-300">كورس مكتمل</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <TrendingUp className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{ongoingCourses.length}</div>
            <div className="text-gray-300">كورس جاري</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <Award className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{achievements.length}</div>
            <div className="text-gray-300">إنجاز</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <User className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">4.8</div>
            <div className="text-gray-300">تقييم عام</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="glass-effect rounded-2xl overflow-hidden">
          <div className="border-b border-white/20">
            <div className="flex overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-purple-300 border-b-2 border-purple-300 bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">المعلومات الشخصية</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-purple-300" />
                        <span>{userData.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-purple-300" />
                        <span>{userData.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-purple-300" />
                        <span>تاريخ الميلاد: {userData.birthDate}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-purple-300">🌐</span>
                        <span>اللغات: {userData.languages}</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">المعلومات المهنية</h3>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <span className="text-purple-300">الشركة: </span>
                        <span>{userData.company}</span>
                      </div>
                      <div>
                        <span className="text-purple-300">مستوى الخبرة: </span>
                        <span>{userData.experience}</span>
                      </div>
                      <div>
                        <span className="text-purple-300">المهارات: </span>
                        <span>{userData.skills}</span>
                      </div>
                      <div>
                        <span className="text-purple-300">الاهتمامات: </span>
                        <span>{userData.interests}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">النشاط الأخير</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">انضم إلى منصة ORION</span>
                      <span className="text-purple-300 text-sm mr-auto">اليوم</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">أكمل إعداد الحساب</span>
                      <span className="text-purple-300 text-sm mr-auto">اليوم</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div className="space-y-8">
                {/* Ongoing Courses */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">الكورسات الجارية</h3>
                  {ongoingCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {ongoingCourses.map(course => (
                        <div key={course.id} className="bg-white/5 p-6 rounded-xl">
                          <h4 className="text-lg font-semibold text-white mb-2">{course.title}</h4>
                          <p className="text-gray-300 text-sm mb-3">بواسطة {course.instructor}</p>
                          
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-300 mb-1">
                              <span>التقدم</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="text-sm text-gray-300">
                            <p>الدرس التالي: {course.nextLesson}</p>
                            <p>الإنجاز المتوقع: {course.estimatedCompletion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 text-lg">لا توجد كورسات جارية حالياً</p>
                      <p className="text-gray-500">ابدأ رحلة التعلم واستكشف كورساتنا المتنوعة!</p>
                    </div>
                  )}
                </div>

                {/* Completed Courses */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">الكورسات المكتملة</h3>
                  {completedCourses.length > 0 ? (
                    <div className="space-y-4">
                      {completedCourses.map(course => (
                        <div key={course.id} className="bg-white/5 p-6 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-white">{course.title}</h4>
                            {course.certificate && (
                              <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                                شهادة متاحة
                              </span>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
                            <div>
                              <span className="text-purple-300">المدرب: </span>
                              <span>{course.instructor}</span>
                            </div>
                            <div>
                              <span className="text-purple-300">تاريخ الإكمال: </span>
                              <span>{course.completionDate}</span>
                            </div>
                            <div>
                              <span className="text-purple-300">الدرجة: </span>
                              <span>{course.grade}</span>
                            </div>
                            <div>
                              <span className="text-purple-300">التقدم: </span>
                              <span>{course.progress}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Award className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 text-lg">لم تكمل أي كورسات بعد</p>
                      <p className="text-gray-500">ابدأ التعلم واحصل على شهاداتك الأولى!</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">الإنجازات والأوسمة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white/5 p-6 rounded-xl text-center hover:scale-105 transition-transform">
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                      <p className="text-gray-300 text-sm">{achievement.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <form onSubmit={handleSave} className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4">إعدادات الحساب</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white mb-2">
                      الاسم الأول
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-white mb-2">
                      اسم العائلة
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-white mb-2">
                    نبذة شخصية
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={userData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jobTitle" className="block text-white mb-2">
                      المسمى الوظيفي
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={userData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white mb-2">
                      الشركة
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={userData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow"
                >
                  حفظ التغييرات
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
