import React from 'react';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
        Welcome to the Home Page
      </h1>

      <p className="text-lg md:text-2xl text-gray-300 mt-6 max-w-2xl leading-relaxed">
        This is a simple home page created with React. It uses Tailwind CSS for styling and a smooth gradient background.
      </p>

      <p className="text-md md:text-lg text-gray-200 mt-4 max-w-3xl leading-relaxed">
        The home page is the first thing users see. It should provide a clear overview of your website and be visually appealing.
      </p>

      <p className="text-md md:text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
        You can use various layouts and design elements like a hero section, background images, and CTA buttons to enhance engagement.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="px-6 py-3 text-lg font-semibold bg-yellow-500 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-600 hover:scale-110 focus:ring-4 focus:ring-yellow-300">
          Learn More
        </button>
        <button className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-110 focus:ring-4 focus:ring-blue-300">
          Get Started
        </button>
      </div>
    </div>
  );
};
