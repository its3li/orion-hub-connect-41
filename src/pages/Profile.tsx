
import React, { useState } from 'react';
import { User, FileText } from 'lucide-react';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userData, setUserData] = useState({
    firstName: 'أحمد',
    lastName: 'محمد',
    email: 'ahmed@example.com',
    phone: '+123456789',
    skills: 'برمجة، تصميم، تسويق رقمي',
    experience: 'متقدم',
    bio: 'مطور ويب متخصص في React و Node.js مع خبرة 5 سنوات',
    location: 'القاهرة، مصر',
    website: 'www.ahmed-dev.com'
  });

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
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', userData);
    alert('تم حفظ البيانات بنجاح!');
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            صفحة المستخدم
          </h1>

          {/* Profile Image Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-purple-600 flex items-center justify-center mx-auto mb-4">
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
                <FileText className="w-4 h-4 text-white" />
              </label>
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <p className="text-gray-300">اضغط لتغيير صورة الملف الشخصي</p>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-white mb-2">
                  الموقع
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={userData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-white mb-2">
                  الموقع الشخصي
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={userData.website}
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

            <div>
              <label htmlFor="skills" className="block text-white mb-2">
                المهارات
              </label>
              <textarea
                id="skills"
                name="skills"
                value={userData.skills}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-white mb-2">
                مستوى الخبرة
              </label>
              <select
                id="experience"
                name="experience"
                value={userData.experience}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
              >
                <option value="مبتدئ">مبتدئ</option>
                <option value="متوسط">متوسط</option>
                <option value="متقدم">متقدم</option>
                <option value="خبير">خبير</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow"
            >
              حفظ التغييرات
            </button>
          </form>

          {/* Statistics Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">5</div>
              <div className="text-gray-300">كورسات مكتملة</div>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">12</div>
              <div className="text-gray-300">مشاريع منجزة</div>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">4.8</div>
              <div className="text-gray-300">تقييم العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
