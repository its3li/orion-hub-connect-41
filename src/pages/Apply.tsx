
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    portfolio: '',
    expectedSalary: '',
    startDate: '',
    cv: null as File | null
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        cv: file
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
    navigate('/jobs');
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-3xl">
        <div className="glass-effect p-8 rounded-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">التقديم على وظيفة</h1>
            <p className="text-gray-300">املأ النموذج للتقديم على الوظيفة</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-white mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div>
                <label htmlFor="position" className="block text-white mb-2">
                  المنصب المتقدم إليه *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="مثل: مطور React"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="experience" className="block text-white mb-2">
                  سنوات الخبرة *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                  required
                >
                  <option value="">اختر سنوات الخبرة</option>
                  <option value="0-1">أقل من سنة</option>
                  <option value="1-3">1-3 سنوات</option>
                  <option value="3-5">3-5 سنوات</option>
                  <option value="5-10">5-10 سنوات</option>
                  <option value="10+">أكثر من 10 سنوات</option>
                </select>
              </div>

              <div>
                <label htmlFor="expectedSalary" className="block text-white mb-2">
                  الراتب المتوقع
                </label>
                <input
                  type="text"
                  id="expectedSalary"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="مثل: 10000 جنيه"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="portfolio" className="block text-white mb-2">
                  رابط أعمالك (Portfolio)
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="https://portfolio.com"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-white mb-2">
                  تاريخ البدء المفضل
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-white mb-2">
                خطاب التقديم *
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                placeholder="اكتب خطاب تقديم مقنع يوضح سبب ملاءمتك لهذه الوظيفة..."
                required
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-white mb-2">
                رفع السيرة الذاتية (PDF) *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-purple-600 file:text-white hover:file:bg-purple-700 transition-colors"
                  required
                />
              </div>
              {formData.cv && (
                <p className="text-purple-300 text-sm mt-2">
                  تم اختيار: {formData.cv.name}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="mr-3"
              />
              <label htmlFor="terms" className="text-gray-300">
                أوافق على <span className="text-purple-300 underline cursor-pointer">الشروط والأحكام</span> وسياسة الخصوصية
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow text-lg"
            >
              إرسال طلب التقديم
            </button>
          </form>

          <div className="mt-8 p-4 bg-purple-600/20 rounded-lg">
            <h3 className="text-white font-semibold mb-2">نصائح للتقديم الناجح:</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• تأكد من أن سيرتك الذاتية محدثة ومتوافقة مع متطلبات الوظيفة</li>
              <li>• اكتب خطاب تقديم مخصص لهذه الوظيفة تحديداً</li>
              <li>• أضف رابط أعمالك إن وجد لزيادة فرص قبولك</li>
              <li>• تأكد من صحة بياناتك قبل الإرسال</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
