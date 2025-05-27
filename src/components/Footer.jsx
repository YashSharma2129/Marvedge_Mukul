import React from 'react';

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">DemoStudio</h3>
          <p className="text-gray-400 leading-relaxed">
            Create stunning interactive product demos that engage your audience and drive conversions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <div className="space-y-2">
            <button 
              onClick={() => setCurrentPage('features')}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => setCurrentPage('builder')}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Builder
            </button>
            <button 
              onClick={() => setCurrentPage('analytics')}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Analytics
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <div className="space-y-2">
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Gallery
            </button>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Tutorials</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 DemoStudio. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
