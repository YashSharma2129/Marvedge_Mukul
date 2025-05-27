import React from 'react';
import { Sparkles, Zap, Star, Image, BarChart3, Mail, Menu, X, Home } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'builder', label: 'Builder', icon: Zap },
  { id: 'features', label: 'Features', icon: Star },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'contact', label: 'Contact', icon: Mail }
];

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 shadow-xl transform hover:scale-110 transition-all duration-300">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              DemoStudio
            </h1>
            <p className="text-sm text-gray-600">Interactive Product Tours</p>
          </div>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                currentPage === id 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25' 
                  : 'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all duration-300"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-emerald-100 pt-4 animate-in slide-in-from-top duration-300">
          <div className="space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setCurrentPage(id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === id 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' 
                    : 'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;