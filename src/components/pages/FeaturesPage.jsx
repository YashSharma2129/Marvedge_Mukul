import React from 'react';
import { MousePointerClick, Image, Edit3, Sparkles, Smartphone, Shuffle } from 'lucide-react';

const FeaturesPage = () => (
  <div className="bg-white min-h-screen">
    <div className="max-w-5xl mx-auto pt-10 pb-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-700 sm:text-5xl mb-4">
          Features for Interactive Product Tours
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to create, edit, and share beautiful product demos—fast.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center bg-emerald-50 rounded-xl p-8 shadow hover:shadow-lg transition">
          <MousePointerClick className="h-10 w-10 text-emerald-500 mb-3" />
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Simulate User Steps</h3>
          <p className="text-gray-600 text-center">
            Mock the recording of user journeys with step-by-step screens and descriptions.
          </p>
        </div>
        <div className="flex flex-col items-center bg-emerald-50 rounded-xl p-8 shadow hover:shadow-lg transition">
          <Image className="h-10 w-10 text-emerald-500 mb-3" />
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Visual Storytelling</h3>
          <p className="text-gray-600 text-center">
            Display your steps as a scrollable timeline or animated carousel for engaging demos.
          </p>
        </div>
        <div className="flex flex-col items-center bg-emerald-50 rounded-xl p-8 shadow hover:shadow-lg transition">
          <Edit3 className="h-10 w-10 text-emerald-500 mb-3" />
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Easy Step Editor</h3>
          <p className="text-gray-600 text-center">
            Add, edit, or remove steps with a simple form. Instantly preview your changes.
          </p>
        </div>
        <div className="flex flex-col items-center bg-emerald-50 rounded-xl p-8 shadow hover:shadow-lg transition">
          <Sparkles className="h-10 w-10 text-emerald-500 mb-3" />
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Smooth Animations</h3>
          <p className="text-gray-600 text-center">
            Enjoy modern, smooth transitions between steps and interactions.
          </p>
        </div>
        <div className="flex flex-col items-center bg-emerald-50 rounded-xl p-8 shadow hover:shadow-lg transition">
          <Smartphone className="h-10 w-10 text-emerald-500 mb-3" />
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Mobile Responsive</h3>
          <p className="text-gray-600 text-center">
            The builder and tours look great on any devices.
          </p>
        </div>
        <div className="flex flex-col items-center bg-emerald-50 rounded-xl p-8 shadow hover:shadow-lg transition">
          <Shuffle className="h-10 w-10 text-emerald-500 mb-3" />
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Easy Flow Management</h3>
          <p className="text-gray-600 text-center">
            Effortlessly rearrange, duplicate, or remove steps to create the perfect demo flow.
          </p>
        </div>
      </div>
      <div className="text-center mt-14">
        <p className="text-lg text-emerald-700 font-semibold">
          Try the interactive builder now and see your product story come alive!
        </p>
      </div>
    </div>
  </div>
);

export default FeaturesPage;