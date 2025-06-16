
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Target, TrendingUp, Edit, Save, X, Camera, Star, Clock, Download, LogOut, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface ProfileData {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  skills?: string;
  account_type?: string;
  experience?: string;
  bio?: string;
  location?: string;
  website?: string;
  job_title?: string;
  company?: string;
  birth_date?: string;
  languages?: string;
  interests?: string;
  created_at?: string;
  updated_at?: string;
}

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tempData, setTempData] = useState<ProfileData>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth state
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        fetchProfile(user.id);
      } else {
        navigate('/login');
      }
      setIsLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        fetchProfile(session.user.id);
      } else {
        setUser(null);
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfileData(data);
      setTempData(data || {});
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSave = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update(tempData)
        .eq('id', user.id);

      if (error) {
        throw error;
      }

      setProfileData(tempData);
      setIsEditing(false);
      toast({
        title: "تم حفظ التغييرات",
        description: "تم تحديث ملفك الشخصي بنجاح",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء حفظ التغييرات",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setTempData(profileData || {});
    setIsEditing(false);
  };

  const handleLogout = async () => {
    try {
      if (deleteAccount) {
        // For now, we'll just sign out. Account deletion would need additional setup
        toast({
          title: "تنبيه",
          description: "حذف الحساب نهائياً غير متاح حالياً. تم تسجيل الخروج فقط.",
          variant: "destructive",
        });
      }

      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setShowLogoutModal(false);
      setDeleteAccount(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء تسجيل الخروج",
        variant: "destructive",
      });
    }
  };

  const getFullName = () => {
    if (!profileData?.first_name) return user?.email || 'مستخدم جديد';
    return `${profileData.first_name} ${profileData.last_name || ''}`.trim();
  };

  const getInitials = () => {
    if (!profileData?.first_name) return user?.email?.[0]?.toUpperCase() || 'U';
    return profileData.first_name[0] + (profileData.last_name ? profileData.last_name[0] : '');
  };

  // Empty states for stats
  const learningStats = {
    totalHours: 0,
    coursesCompleted: 0,
    coursesInProgress: 0,
    certificatesEarned: 0,
    forumPosts: 0,
    averageGrade: ''
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: <User className="w-5 h-5" /> },
    { id: 'courses', label: 'كورساتي', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'achievements', label: 'الإنجازات', icon: <Award className="w-5 h-5" /> },
    { id: 'certificates', label: 'الشهادات', icon: <Star className="w-5 h-5" /> }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 px-4 pb-12 flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-24 px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-effect p-8 rounded-2xl text-center">
            <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
              <User className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">مرحباً بك في ORION</h1>
            <p className="text-gray-300 mb-8">يرجى تسجيل الدخول لعرض ملفك الشخصي</p>
            <div className="flex gap-4 justify-center">
              <a 
                href="/login" 
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                تسجيل الدخول
              </a>
              <a 
                href="/register" 
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                إنشاء حساب جديد
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Profile Header */}
        <div className="glass-effect p-8 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {getInitials()}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={tempData.first_name || ''}
                      onChange={(e) => setTempData(prev => ({ ...prev, first_name: e.target.value }))}
                      className="text-xl font-bold bg-white/10 border-b-2 border-purple-400 text-white focus:outline-none focus:border-purple-300 px-2 py-1 rounded"
                      placeholder="الاسم الأول"
                    />
                    <input
                      type="text"
                      value={tempData.last_name || ''}
                      onChange={(e) => setTempData(prev => ({ ...prev, last_name: e.target.value }))}
                      className="text-xl font-bold bg-white/10 border-b-2 border-purple-400 text-white focus:outline-none focus:border-purple-300 px-2 py-1 rounded"
                      placeholder="اسم العائلة"
                    />
                  </div>
                  <textarea
                    value={tempData.bio || ''}
                    onChange={(e) => setTempData(prev => ({ ...prev, bio: e.target.value }))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 resize-none focus:outline-none focus:border-purple-400"
                    rows={3}
                    placeholder="نبذة عنك..."
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{getFullName()}</h1>
                  <p className="text-gray-300 mb-4">{profileData?.bio || 'لم يتم إضافة نبذة شخصية بعد'}</p>
                  {profileData?.account_type && (
                    <p className="text-purple-300 mb-2">نوع الحساب: {profileData.account_type}</p>
                  )}
                  {profileData?.experience && (
                    <p className="text-purple-300 mb-4">مستوى الخبرة: {profileData.experience}</p>
                  )}
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
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                    >
                      <Edit className="w-5 h-5" />
                      تعديل البيانات
                    </button>
                    <button
                      onClick={() => setShowLogoutModal(true)}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-5 h-5" />
                      تسجيل الخروج
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Logout Modal */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="glass-effect p-6 rounded-2xl max-w-md mx-4">
              <h3 className="text-xl font-bold text-white mb-4">تسجيل الخروج</h3>
              <p className="text-gray-300 mb-6">هل تريد تسجيل الخروج من حسابك؟</p>
              
              <div className="flex items-center gap-3 mb-6">
                <input
                  type="checkbox"
                  id="deleteAccount"
                  checked={deleteAccount}
                  onChange={(e) => setDeleteAccount(e.target.checked)}
                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="deleteAccount" className="text-gray-300 flex items-center gap-2">
                  <Trash2 className="w-4 h-4 text-red-500" />
                  حذف الحساب نهائياً
                </label>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  تسجيل الخروج
                </button>
                <button
                  onClick={() => {
                    setShowLogoutModal(false);
                    setDeleteAccount(false);
                  }}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}

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
                        <span className="text-gray-300">{user.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-purple-300 mr-3" />
                        <input
                          type="tel"
                          value={tempData.phone || ''}
                          onChange={(e) => setTempData(prev => ({ ...prev, phone: e.target.value }))}
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                          placeholder="رقم الهاتف"
                        />
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-purple-300 mr-3" />
                        <input
                          type="text"
                          value={tempData.location || ''}
                          onChange={(e) => setTempData(prev => ({ ...prev, location: e.target.value }))}
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                          placeholder="الموقع"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 text-purple-300 mr-3" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 text-purple-300 mr-3" />
                        <span>{profileData?.phone || 'لم يتم إضافة رقم هاتف'}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 text-purple-300 mr-3" />
                        <span>{profileData?.location || 'لم يتم تحديد الموقع'}</span>
                      </div>
                      {profileData?.skills && (
                        <div className="flex items-start text-gray-300">
                          <Target className="w-5 h-5 text-purple-300 mr-3 mt-1" />
                          <div>
                            <span className="font-medium text-white">المهارات:</span>
                            <p className="mt-1">{profileData.skills}</p>
                          </div>
                        </div>
                      )}
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
                <div className="text-center text-gray-400 py-8">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>ابدأ رحلتك التعليمية معنا</p>
                  <p className="text-sm mt-2">لم تبدأ أي كورسات بعد</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="glass-effect p-8 rounded-2xl text-center">
              <BookOpen className="w-24 h-24 mx-auto mb-6 text-gray-500" />
              <h3 className="text-2xl font-bold text-white mb-4">لا توجد كورسات مسجلة</h3>
              <p className="text-gray-300 mb-6">ابدأ رحلتك التعليمية واكتشف كورساتنا المميزة</p>
              <a 
                href="/courses" 
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                تصفح الكورسات
              </a>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="glass-effect p-8 rounded-2xl text-center">
              <Award className="w-24 h-24 mx-auto mb-6 text-gray-500" />
              <h3 className="text-2xl font-bold text-white mb-4">لا توجد إنجازات بعد</h3>
              <p className="text-gray-300">ابدأ التعلم واحصل على إنجازاتك الأولى</p>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="glass-effect p-8 rounded-2xl text-center">
              <Star className="w-24 h-24 mx-auto mb-6 text-gray-500" />
              <h3 className="text-2xl font-bold text-white mb-4">لا توجد شهادات</h3>
              <p className="text-gray-300">أكمل الكورسات واحصل على شهاداتك المعتمدة</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
