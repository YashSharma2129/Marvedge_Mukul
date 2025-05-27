import React from 'react';
import { MousePointerClick, Image, Edit3, Sparkles, Smartphone, SunMoon, ArrowRight } from 'lucide-react';

const analytics = [
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    label: 'Steps Simulated',
    value: '3',
    description: 'Number of steps in your current product tour.'
  },
  {
    icon: <Image className="w-6 h-6" />,
    label: 'Screens Previewed',
    value: '3',
    description: 'Screens or images shown in your interactive demo.'
  },
  {
    icon: <Edit3 className="w-6 h-6" />,
    label: 'Edits Made',
    value: '5',
    description: 'Times you edited or updated your tour steps.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    label: 'Animations Triggered',
    value: '8',
    description: 'Smooth transitions and highlights used in your tour.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    label: 'Mobile Previews',
    value: '2',
    description: 'How many times you previewed your tour on mobile.'
  },
  {
    icon: <SunMoon className="w-6 h-6" />,
    label: 'Theme Switches',
    value: '1',
    description: 'Light/dark mode toggles during your session.'
  }
];

const AnalyticsPage = () => (
  <div className="px-4 py-8 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-emerald-700 text-center">Tour Analytics</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        Get insights into your interactive product tour creation. See how you use the builder and how your demo flows are structured.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {analytics.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center"
          >
            <div className="bg-emerald-500 text-white rounded-full p-3 mb-4">
              {item.icon}
            </div>
            <h2 className="text-lg font-semibold text-emerald-700">{item.label}</h2>
            <p className="text-3xl font-bold text-emerald-900">{item.value}</p>
            <p className="text-gray-600 text-center text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <p className="text-lg text-emerald-700 font-semibold mb-6">
          Ready to improve your product story? Try editing your tour or previewing new steps!
        </p>
        <button
          className="inline-flex items-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-600"
          onClick={() => window.location.hash = '#/builder'}
        >
          Go to Builder
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default AnalyticsPage;