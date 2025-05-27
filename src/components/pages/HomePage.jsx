import React from 'react';
import { ArrowRight, MousePointerClick, Image, Edit3 } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => (
  <div>
    {/* Hero Section */}
    <section className="bg-emerald-600 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Build Interactive Product Tours <br className="hidden sm:block" /> in Minutes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            Reimagine how you showcase your product. Create beautiful, interactive demos that tell your story—just like Arcade.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              className="flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-emerald-600 shadow-md transition-all duration-300 hover:bg-opacity-90"
              onClick={() => setCurrentPage('builder')}
            >
              Start Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              className="flex items-center justify-center rounded-full bg-transparent border-2 border-white px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-white hover:text-emerald-600"
              onClick={() => setCurrentPage('features')}
            >
              Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-emerald-600 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            Create, preview, and share interactive product tours in just a few steps.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-lg bg-emerald-50 p-8 shadow-md flex flex-col items-center">
            <MousePointerClick className="h-12 w-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Simulate Steps</h3>
            <p className="text-gray-600 text-center">
              Record or mock each step of your user journey. Each step includes a screen and a description.
            </p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-8 shadow-md flex flex-col items-center">
            <Image className="h-12 w-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Visual Storytelling</h3>
            <p className="text-gray-600 text-center">
              Display your steps as a scrollable, animated timeline or carousel—just like Arcade.
            </p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-8 shadow-md flex flex-col items-center">
            <Edit3 className="h-12 w-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Edit & Preview</h3>
            <p className="text-gray-600 text-center">
              Add, edit, or remove steps and see a live preview of your interactive tour instantly.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-emerald-700 sm:text-4xl">
            Ready to Create Your First Product Tour?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-emerald-700">
            Try the interactive builder and see how easy it is to showcase your product.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              className="rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-600"
              onClick={() => setCurrentPage('builder')}
            >
              Start Building
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;