
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'استفسار عام'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactType: 'استفسار عام'
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار أو اقتراح
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                  <label htmlFor="contactType" className="block text-white mb-2">
                    نوع الاستفسار
                  </label>
                  <select
                    id="contactType"
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="استفسار عام">استفسار عام</option>
                    <option value="دعم تقني">دعم تقني</option>
                    <option value="شراكة">شراكة</option>
                    <option value="شكوى">شكوى</option>
                    <option value="اقتراح">اقتراح</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white mb-2">
                  موضوع الرسالة *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="موضوع رسالتك"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  الرسالة *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">معلومات التواصل</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300">البريد الإلكتروني</p>
                    <p className="text-white font-semibold">orionvp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300">الهاتف</p>
                    <p className="text-white font-semibold">01021388768</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                    <img 
                      src="/lovable-uploads/79ee787e-00cc-42f2-a484-fd8f7e6372ac.png" 
                      alt="WhatsApp" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300">واتساب</p>
                    <p className="text-white font-semibold">01120952576</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">العنوان</p>
                    <p className="text-white font-semibold">القاهرة، مصر</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">ساعات العمل</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>الأحد - الخميس</span>
                  <span className="text-white">10:00 ص - 8:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة - السبت</span>
                  <span className="text-white">مغلق</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">تابعنا على</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a 
                  href="https://www.facebook.com/share/1LeVMruGJ2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform overflow-hidden"
                >
                  <img 
                    src="/lovable-uploads/14f48c9f-d3f5-418d-94a7-ddd044bc8d09.png" 
                    alt="Facebook" 
                    className="w-12 h-12 object-contain"
                  />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform overflow-hidden"
                >
                  <img 
                    src="/lovable-uploads/74e38fd8-37c5-4722-bd76-a8cd9f384a95.png" 
                    alt="X (Twitter)" 
                    className="w-12 h-12 object-contain"
                  />
                </a>
                <a 
                  href="https://www.instagram.com/youssef_1o1?igsh=MXFzdmVxdHJ3cmV3YQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform overflow-hidden"
                >
                  <img 
                    src="/lovable-uploads/8e03e9ff-560a-469b-9593-5303d584d83c.png" 
                    alt="Instagram" 
                    className="w-12 h-12 object-contain"
                  />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform overflow-hidden"
                >
                  <img 
                    src="/lovable-uploads/5cf46720-c837-4f2a-8a41-2a21f326808d.png" 
                    alt="YouTube" 
                    className="w-12 h-12 object-contain"
                  />
                </a>
                <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors overflow-hidden">
                  <img 
                    src="/lovable-uploads/79ee787e-00cc-42f2-a484-fd8f7e6372ac.png" 
                    alt="WhatsApp" 
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">أسئلة شائعة</h3>
              <div className="space-y-3">
                <button className="w-full text-right p-3 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-colors">
                  كيف أسجل في المنصة؟
                </button>
                <button className="w-full text-right p-3 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-colors">
                  ما هي تكلفة الكورسات؟
                </button>
                <button className="w-full text-right p-3 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-colors">
                  كيف أحصل على شهادة؟
                </button>
                <button className="w-full text-right p-3 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-colors">
                  هل يمكنني استرداد المال؟
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
