import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    skills: '',
    experience: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    
    // Store user data in localStorage
    const userData = {
      ...formData,
      bio: `مرحباً، أنا ${formData.firstName} ${formData.lastName}. ${formData.skills ? `متخصص في ${formData.skills}.` : ''} أتطلع لتطوير مهاراتي وتحقيق أهدافي المهنية من خلال منصة ORION.`,
      location: 'القاهرة، مصر',
      website: 'www.example.com',
      jobTitle: 'مطور',
      company: 'شركة التقنيات المتقدمة',
      joinDate: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' }),
      birthDate: '1 يناير 1995',
      languages: 'العربية، الإنجليزية',
      interests: 'البرمجة، التصميم، التعلم المستمر'
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    
    console.log('Registration data:', formData);
    // Redirect to profile page
    navigate('/profile');
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-effect p-8 rounded-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">إنشاء حساب جديد</h1>
            <p className="text-gray-300">انضم إلى مجتمع ORION</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-white mb-2">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="الاسم الأول"
                  required
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
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="اسم العائلة"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="أدخل بريدك الإلكتروني"
                required
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
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="رقم الهاتف"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-white mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="كلمة المرور"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-white mb-2">
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="تأكيد كلمة المرور"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="skills" className="block text-white mb-2">
                المهارات
              </label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                placeholder="اذكر مهاراتك (مثل: برمجة، تصميم، تسويق...)"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-white mb-2">
                مستوى الخبرة
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                required
              >
                <option value="">اختر مستوى الخبرة</option>
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
              إنشاء الحساب
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-300">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-purple-300 hover:text-purple-200 transition-colors">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
