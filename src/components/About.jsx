export const About = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-6 min-h-screen text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-8">
          About Us
        </h1>
  
        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-6">
          Vite is a modern web development build tool that provides an extremely
          fast development experience. It's built on top of Rollup and optimized
          for development speed.
        </p>
  
        <p className="text-md md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
          Created by Evan You, the creator of Vue.js, Vite is designed to be a fast
          and lightweight alternative to traditional build tools like Webpack.
        </p>
  
        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="https://github.com/vitejs/vite"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/vite_js"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            Twitter
          </a>
        </div>
      </div>
    );
  };
  