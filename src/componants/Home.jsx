import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 px-4 md:px-8">
      <div className="animate-fadeInFromBottom">
        <img
          src="https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383487.jpg"
          alt="Simran"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover mb-8 transition-transform transform hover:scale-105 hover:shadow-white hover:shadow-2xl cursor-pointer"
        />
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white font-serif animate-fadeIn">
          Simran Sharma
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white font-serif animate-fadeIn">
          I am doing training in MERN Stack Development From Sensation Software Solution.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1Pw2B36EkTIO1zfHhIhiF3D4DbUx6xbHY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 animate-fadeIn">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
