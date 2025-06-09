
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CreditCard, Smartphone, Shield, ArrowRight, CheckCircle, Lock } from 'lucide-react';

const Payment = () => {
  const { courseId } = useParams();
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    vodafoneNumber: '',
    instapayUsername: '',
  });

  // Mock course data
  const course = {
    id: courseId,
    title: 'تطوير تطبيقات الويب باستخدام React',
    price: '499 جنيه',
    originalPrice: '699 جنيه',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
  };

  const paymentMethods = [
    {
      id: 'card',
      name: 'البطاقة البنكية',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'فيزا، ماستركارد، أو البطاقات المصرفية'
    },
    {
      id: 'vodafone',
      name: 'فودافون كاش',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'الدفع عبر محفظة فودافون كاش'
    },
    {
      id: 'instapay',
      name: 'انستاباي',
      icon: <Shield className="w-6 h-6" />,
      description: 'الدفع الفوري والآمن'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا سيتم إرسال البيانات لمعالجة الدفع
    console.log('Payment data:', { ...formData, method: selectedMethod, courseId });
    // بعد نجاح الدفع، سيتم التوجه لصفحة الكورس
    window.location.href = `/course-access/${courseId}`;
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-4xl">
        <nav className="text-purple-300 text-sm mb-6">
          <Link to="/courses" className="hover:text-purple-200">الكورسات</Link>
          <span className="mx-2">←</span>
          <Link to={`/course/${courseId}`} className="hover:text-purple-200">{course.title}</Link>
          <span className="mx-2">←</span>
          <span className="text-gray-400">الدفع</span>
        </nav>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            إتمام عملية الدفع
          </h1>
          <p className="text-gray-300">اختر طريقة الدفع المناسبة لك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold text-white mb-6">معلومات الدفع</h2>
              
              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">اختر طريقة الدفع</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-lg border-2 transition-all hover-glow ${
                        selectedMethod === method.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/20 hover:border-purple-400'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`mb-2 ${selectedMethod === method.id ? 'text-purple-300' : 'text-gray-400'}`}>
                          {method.icon}
                        </div>
                        <div className={`font-semibold mb-1 ${selectedMethod === method.id ? 'text-white' : 'text-gray-300'}`}>
                          {method.name}
                        </div>
                        <div className="text-xs text-gray-400">{method.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Vodafone Cash Numbers - Show only when Vodafone is selected */}
              {selectedMethod === 'vodafone' && (
                <div className="mb-8 p-6 bg-red-600/20 border border-red-400/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">أرقام فودافون كاش الخاصة بالموقع</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                      <span className="text-white font-semibold">الرقم الأول:</span>
                      <span className="text-red-300 font-bold">01021388768</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                      <span className="text-white font-semibold">الرقم الثاني:</span>
                      <span className="text-red-300 font-bold">01120952576</span>
                    </div>
                  </div>
                  <div className="bg-yellow-600/20 border border-yellow-400/30 rounded-lg p-4">
                    <p className="text-yellow-300 text-sm font-semibold">
                      هذه هي الأرقام الخاصة بفودافون كاش فقط ليس لدينا دفع فودافون كاش الا على هذة الأرقام و سوف يتم التواصل معك خلال ١٠ إلى ١٥ دقيقة من عملية الدفع
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">المعلومات الشخصية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">الاسم الكامل</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                        placeholder="اكتب اسمك الكامل"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-300 mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="+20 1XX XXX XXXX"
                      required
                    />
                  </div>
                </div>

                {/* Payment Method Specific Fields */}
                {selectedMethod === 'card' && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">معلومات البطاقة</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">رقم البطاقة</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                          placeholder="1234 5678 9012 3456"
                          required
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
                            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'vodafone' && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">فودافون كاش</h3>
                    <div>
                      <label className="block text-gray-300 mb-2">رقم فودافون كاش</label>
                      <input
                        type="tel"
                        name="vodafoneNumber"
                        value={formData.vodafoneNumber}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                        placeholder="010XXXXXXXX"
                        required
                      />
                    </div>
                    <div className="mt-4 p-4 bg-blue-600/20 border border-blue-400/30 rounded-lg">
                      <p className="text-blue-300 text-sm">
                        ستتلقى رسالة نصية لتأكيد عملية الدفع على الرقم المدخل
                      </p>
                    </div>
                  </div>
                )}

                {selectedMethod === 'instapay' && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">انستاباي</h3>
                    <div>
                      <label className="block text-gray-300 mb-2">اسم المستخدم أو رقم الهاتف</label>
                      <input
                        type="text"
                        name="instapayUsername"
                        value={formData.instapayUsername}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                        placeholder="اسم المستخدم أو رقم الهاتف"
                        required
                      />
                    </div>
                    <div className="mt-4 p-4 bg-green-600/20 border border-green-400/30 rounded-lg">
                      <p className="text-green-300 text-sm">
                        سيتم توجيهك إلى تطبيق انستاباي لإتمام عملية الدفع
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors hover-glow flex items-center justify-center"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  إتمام الدفع الآمن
                  <ArrowRight className="w-5 h-5 mr-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-effect p-6 rounded-2xl sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">ملخص الطلب</h3>
              
              <div className="flex items-center mb-6">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm leading-tight">{course.title}</h4>
                  <p className="text-purple-300 text-sm">كورس أونلاين</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">السعر الأصلي</span>
                  <span className="text-gray-400 line-through">{course.originalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">الخصم (30%)</span>
                  <span className="text-green-400">-200 جنيه</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">المجموع</span>
                    <span className="text-2xl font-bold text-purple-300">{course.price}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>وصول مدى الحياة</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>شهادة إتمام</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>دعم فني مباشر</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>ضمان استرداد 30 يوم</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-600/20 border border-purple-400/30 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-purple-300 mr-2" />
                  <span className="text-purple-300 font-semibold text-sm">دفع آمن ومشفر</span>
                </div>
                <p className="text-xs text-gray-400">
                  جميع عمليات الدفع محمية بتشفير SSL ومعايير الأمان العالمية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
