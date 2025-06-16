
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    skills: '',
    accountType: '',
    experience: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate password length
    if (name === 'password') {
      if (value.length < 8 && value.length > 0) {
        setPasswordError('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password.length < 8) {
      setPasswordError('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "خطأ",
        description: "كلمات المرور غير متطابقة",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        // Update profile with ALL the information from the form
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            skills: formData.skills,
            account_type: formData.accountType,
            experience: formData.experience,
            bio: `مرحباً، أنا ${formData.firstName} ${formData.lastName}. ${formData.skills ? `أعمل في مجال ${formData.skills}.` : ''} أتطلع لتطوير مهاراتي وتحقيق أهدافي المهنية من خلال منصة ORION.`,
            location: '',
            website: '',
            job_title: '',
            company: '',
            birth_date: '',
            languages: 'العربية',
            interests: 'التعلم والتطوير'
          })
          .eq('id', data.user.id);

        if (profileError) {
          console.error('Profile update error:', profileError);
          toast({
            title: "تنبيه",
            description: "تم إنشاء الحساب بنجاح ولكن حدث خطأ في حفظ بعض البيانات",
            variant: "destructive",
          });
        } else {
          toast({
            title: "تم إنشاء الحساب بنجاح",
            description: "تم حفظ جميع بياناتك بنجاح. يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب",
          });
        }

        // Redirect to profile page
        navigate('/profile');
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "خطأ في التسجيل",
        description: error.message || "حدث خطأ أثناء إنشاء الحساب",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                  الاسم الأول *
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
                  اسم العائلة *
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
                البريد الإلكتروني *
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
                رقم الهاتف *
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
                  كلمة المرور *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="كلمة المرور (8 أحرف على الأقل)"
                  required
                />
                {passwordError && (
                  <p className="text-red-400 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-white mb-2">
                  تأكيد كلمة المرور *
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
                المهارات والخبرات
              </label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                placeholder="اذكر مهاراتك وخبراتك (مثل: برمجة، تصميم، تسويق، إدارة...)"
              />
            </div>

            <div>
              <label htmlFor="accountType" className="block text-white mb-2">
                نوع الحساب *
              </label>
              <select
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                required
              >
                <option value="">اختر نوع الحساب</option>
                <option value="طالب">طالب</option>
                <option value="معلم">معلم</option>
                <option value="مستقل">مستقل</option>
                <option value="موظف">موظف</option>
                <option value="رائد أعمال">رائد أعمال</option>
                <option value="باحث عن عمل">باحث عن عمل</option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="block text-white mb-2">
                مستوى الخبرة *
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
                <option value="مبتدئ">مبتدئ (0-1 سنة)</option>
                <option value="متوسط">متوسط (2-5 سنوات)</option>
                <option value="متقدم">متقدم (5-10 سنوات)</option>
                <option value="خبير">خبير (أكثر من 10 سنوات)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
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
