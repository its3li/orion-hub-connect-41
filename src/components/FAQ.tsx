
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "كيف يمكنني التسجيل في منصة ORION؟",
      answer: "يمكنك التسجيل بسهولة من خلال النقر على زر 'إنشاء حساب' في الصفحة الرئيسية وملء البيانات المطلوبة."
    },
    {
      question: "هل الكورسات مجانية؟",
      answer: "نوفر مجموعة متنوعة من الكورسات، منها المجاني ومنها المدفوع. يمكنك تصفح جميع الكورسات المتاحة في قسم الكورسات."
    },
    {
      question: "كيف يمكنني نشر منتج في المتجر؟",
      answer: "إذا كان حسابك من نوع 'مستقل' أو 'معلم'، يمكنك إضافة منتجاتك للبيع في المتجر من خلال النقر على زر 'إضافة منتج'."
    },
    {
      question: "كيف يمكنني التواصل مع الدعم الفني؟",
      answer: "يمكنك التواصل معنا من خلال نموذج الاتصال في هذه الصفحة، أو عبر البريد الإلكتروني أو الهاتف."
    },
    {
      question: "هل يمكنني الحصول على شهادة بعد إتمام الكورس؟",
      answer: "نعم، نوفر شهادات إتمام للكورسات المدفوعة بعد اجتياز جميع الوحدات والاختبارات المطلوبة."
    },
    {
      question: "كيف يمكنني البحث عن وظيفة مناسبة؟",
      answer: "قم بزيارة قسم الوظائف واستخدم فلاتر البحث لإيجاد الوظائف المناسبة لمهاراتك وخبرتك."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="glass-effect p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-white mb-6 text-center px-4">الأسئلة الشائعة</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-white/20 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-right bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span className="text-white font-medium px-2">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-purple-300" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-300" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white/5 border-t border-white/10">
                <p className="text-gray-300 px-2">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
