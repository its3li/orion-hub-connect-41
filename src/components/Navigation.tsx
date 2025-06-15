
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الكورسات', path: '/courses' },
    { name: 'الوظائف', path: '/jobs' },
    { name: 'المتجر', path: '/store' },
    { name: 'المنتدى', path: '/forum' },
    { name: 'عنا', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Check login status on component mount and location change
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    };
    
    checkLoginStatus();
    
    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'isLoggedIn') {
        checkLoginStatus();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [location]);

  return (
    <nav className="glass-effect fixed w-full top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://storage.googleapis.com/gpt-engineer-file-uploads/sGUceFcPQkgxXxuRxbjSMYN9dgs2/55a363c3-4287-4a53-b73d-1310bb9521d2?Expires=1750035827&GoogleAccessId=admin-2%40gpt-engineer-390607.iam.gserviceaccount.com&Signature=wStfHCBIE1vXCYxrFXhqnoGNfMeaZMKKsn7JcftfkevOqdUA3%2B%2BUz%2FjvpWM%2BA1xtmaYWuIju%2FWZy7gtRIJnyMu3fHDNsuWzyf%2FurifxGihBfGQMi5jWr613n6P1hF6PpcNavqJR7oQUAAWn6MOvr3SQxi%2FAZhs0uP5E2uGcXyofI%2BsMmCKuMshj7ZSh6dA7gdnF7o8OylcKp4rnFt2%2B17FZrXR5uaphbBGipdPOKjKQdMHOlZ7ErdrK%2FY2wJ%2B9pgJECaAW3%2FXg9ApXhYwfbm%2BvSOCTQLlfk%2BHzyBZDUYPAzZm5xVLSaeGekXgDjYRm%2BKt3a%2FrX%2B8S0nXMfXr9P2EAw%3D%3D"
              alt="ORION Logo" 
              className="h-10 w-auto mr-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-purple-300 px-2 ${
                  isActive(item.path) ? 'text-purple-300' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors hover-glow"
                >
                  إنشاء حساب
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-4 transition-colors hover:text-purple-300 ${
                  isActive(item.path) ? 'text-purple-300' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="block py-2 px-4 text-white hover:text-purple-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    تسجيل الدخول
                  </Link>
                  <Link
                    to="/register"
                    className="block py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    إنشاء حساب
                  </Link>
                </>
              ) : (
                <Link
                  to="/profile"
                  className="block py-2 px-4 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  الملف الشخصي
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
