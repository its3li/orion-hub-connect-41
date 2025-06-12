
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogIn } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would be API call
    console.log('Login attempt:', formData);
    
    // Set login status
    localStorage.setItem('isLoggedIn', 'true');
    
    // Check if user has registration data, if not create basic profile
    const existingUserData = localStorage.getItem('userData');
    if (!existingUserData) {
      const basicUserData = {
        firstName: '',
        lastName: '',
        email: formData.email,
        phone: '',
        skills: '',
        accountType: '',
        experience: '',
        bio: '',
        location: '',
        website: '',
        jobTitle: '',
        company: '',
        joinDate: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' }),
        birthDate: '',
        languages: '',
        interests: ''
      };
      localStorage.setItem('userData', JSON.stringify(basicUserData));
    }
    
    // Trigger a storage event to update other components
    window.dispatchEvent(new Event('storage'));
    
    // Redirect to profile page
    navigate('/profile');
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-md">
        <div className="glass-effect p-8 rounded-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">تسجيل الدخول</h1>
            <p className="text-gray-300">مرحباً بك مرة أخرى في ORION</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="أدخل كلمة المرور"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-300">تذكرني</span>
              </label>
              <Link to="#" className="text-purple-300 hover:text-purple-200 transition-colors">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow"
            >
              تسجيل الدخول
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-300">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-purple-300 hover:text-purple-200 transition-colors">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
