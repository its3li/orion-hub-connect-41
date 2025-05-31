
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* شعار الشركة */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ORION</h3>
            <p className="text-gray-300 mb-4">
              منصتك الرائدة للتطوير المهني والتعليم والربط بين المواهب وفرص العمل
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-purple-300 transition-colors">الكورسات</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-purple-300 transition-colors">الوظائف</Link></li>
              <li><Link to="/forum" className="text-gray-300 hover:text-purple-300 transition-colors">المنتدى</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-purple-300 transition-colors">عنا</Link></li>
            </ul>
          </div>

          {/* خدماتنا */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">دورات تدريبية</li>
              <li className="text-gray-300">فرص عمل</li>
              <li className="text-gray-300">ربط المواهب</li>
              <li className="text-gray-300">استشارات مهنية</li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">info@orion.com</li>
              <li className="text-gray-300">+123 456 789</li>
              <li><Link to="/contact" className="text-gray-300 hover:text-purple-300 transition-colors">نموذج التواصل</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ORION. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
