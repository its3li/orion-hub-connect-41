
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="glass-effect fixed w-full top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient">
            ORION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-purple-300 ${
                  isActive(item.path) ? 'text-purple-300' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
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
            <Link
              to="/profile"
              className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
