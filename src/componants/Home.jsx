import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700">
      <div>
        <img
          src="https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383487.jpg"
          alt="Simran"
          className="rounded-full w-80 h-80 object-cover mb-8 transition-transform transform hover:scale-105 hover:shadow-white hover:shadow-2xl cursor-pointer"
        />
      </div>
  
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-white font-serif">Simran Sharma</h1>
        <p className="mb-8 text-white font-serif">
          I am doing training in Mern Stack Development From Sensation Software Solution.
        </p>
      </div>
    </div>
  );
  
};

export default Home;
