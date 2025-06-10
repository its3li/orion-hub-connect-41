import React, { useState } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, CheckCircle, Crown, AlertCircle } from 'lucide-react';

const Payment = () => {
  const { courseId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan') || 'regular';
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    vodafoneNumber: ''
  });

  const courseData = {
    title: 'كورس React',
    regularPrice: '499 جنيه',
    vipPrice: '799 جنيه',
    instructor: 'أحمد محمد'
  };

  const isVip = plan === 'vip';
  const price = isVip ? courseData.vipPrice : courseData.regularPrice;

  const vodafoneNumbers = [
    '01021388768',
    '01120952576'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to course access page immediately
    navigate(`/course-access/${courseId}`);
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <Link to={`/course/${courseId}`} className="mr-4 p-2 hover:bg-white/10 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <h1 className="text-3xl font-bold text-white">إتمام عملية الدفع</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Method Selection */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-xl font-semibold text-white mb-4">طريقة الدفع</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <CreditCard className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                    <div className="text-white font-semibold">البطاقة البنكية</div>
                    <div className="text-gray-400 text-sm">Visa, Mastercard</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('vodafone')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === 'vodafone'
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <Smartphone className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <div className="text-white font-semibold">فودافون كاش</div>
                    <div className="text-gray-400 text-sm">دفع فوري</div>
                  </button>
                </div>
              </div>

              {/* Vodafone Cash Payment Info */}
              {paymentMethod === 'vodafone' && (
                <div className="glass-effect p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-red-400" />
                    أرقام فودافون كاش الخاصة بالموقع
                  </h3>
                  
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <div className="space-y-2 mb-4">
                      {vodafoneNumbers.map((number, index) => (
                        <div key={index} className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                          <span className="text-white font-mono text-lg">{number}</span>
                          <button
                            type="button"
                            onClick={() => navigator.clipboard.writeText(number)}
                            className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                          >
                            نسخ
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-start text-yellow-200 text-sm">
                      <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <p>
                        هذه هي الأرقام الخاصة بفودافون كاش فقط. ليس لدينا دفع فودافون كاش إلا على هذه الأرقام 
                        وسوف يتم التواصل معك خلال 10 إلى 15 دقيقة من عملية الدفع.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4">المعلومات الشخصية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                      placeholder="أدخل رقم هاتفك"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              {paymentMethod === 'card' && (
                <div className="glass-effect p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4">تفاصيل البطاقة البنكية</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">رقم البطاقة</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">تاريخ الانتهاء</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'vodafone' && (
                <div className="glass-effect p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4">رقم فودافون كاش المرسل منه</h3>
                  <input
                    type="tel"
                    name="vodafoneNumber"
                    value={formData.vodafoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="أدخل رقم فودافون كاش الذي ستحول منه"
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all text-lg hover-glow"
              >
                إتمام عملية الدفع
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-effect p-6 rounded-2xl sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">ملخص الطلب</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-semibold">{courseData.title}</h4>
                    <p className="text-gray-400 text-sm">بواسطة {courseData.instructor}</p>
                    {isVip && (
                      <div className="flex items-center mt-1">
                        <Crown className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-yellow-400 text-sm font-semibold">باقة VIP</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xl font-bold text-purple-300">{price}</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">المجموع</span>
                  <span className="text-2xl font-bold text-purple-300">{price}</span>
                </div>
              </div>

              {/* Features Included */}
              <div className="space-y-3 text-sm">
                <h4 className="font-semibold text-white">ما يشمله {isVip ? 'اشتراك VIP' : 'الاشتراك'}:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>وصول مدى الحياة للمحتوى</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>جميع فيديوهات الكورس</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>مواد تدريبية قابلة للتحميل</span>
                  </div>
                  {isVip && (
                    <>
                      <div className="flex items-center text-yellow-300">
                        <Crown className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>جلسات البث المباشر</span>
                      </div>
                      <div className="flex items-center text-yellow-300">
                        <Crown className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>التعليقات والمناقشات</span>
                      </div>
                      <div className="flex items-center text-yellow-300">
                        <Crown className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>اختبارات تفاعلية</span>
                      </div>
                      <div className="flex items-center text-yellow-300">
                        <Crown className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>محاضرة إضافية حصرية</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
