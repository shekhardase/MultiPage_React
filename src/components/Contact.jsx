export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-6 min-h-screen text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-12">
        Contact Me
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {/* Email Section */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-xl shadow-xl w-72 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-white">Email</h2>
          <p className="text-lg text-white mt-2">
            <a
              href="mailto:example@gmail.com"
              className="text-yellow-300 hover:text-yellow-400 transition"
            >
              example@gmail.com
            </a>
          </p>
        </div>

        {/* Phone Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl shadow-xl w-72 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-white">Phone</h2>
          <p className="text-lg text-white mt-2">123-456-7890</p>
        </div>

        {/* Address Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-6 rounded-xl shadow-xl w-72 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-white">Address</h2>
          <p className="text-lg text-white mt-2">
            123 Main St, Anytown, USA 12345
          </p>
        </div>
      </div>
    </div>
  );
};
