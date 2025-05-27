import React from 'react';
import { Mail, MessageCircle, Users } from 'lucide-react';

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg mb-8">
      We would love to hear from you. Please reach out to us using the form
      below or through our social media channels.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="flex items-center mb-4">
          <Mail className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-gray-700">info@example.com</span>
        </div>
        <div className="flex items-center mb-4">
          <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-gray-700">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <Users className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-gray-700">Follow us on social media</span>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
