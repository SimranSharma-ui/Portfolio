import React from 'react';
import logo from "../assets/logo.png";
import Shopping from "../assets/Shopping1.png";

const FullStackProjects = () => {
    const Project = [
        {
            category: "Cartoon Cravings",
            title: "Blog Website",
            link: "https://blog-app-frontend-git-main-simrans-projects-dee52ad7.vercel.app/", 
            image: logo,
            alt: "Blog App",
            FrontendGitHub:"https://github.com/SimranSharma-ui/BlogAppFrontend",
            BackendGitHub :"https://github.com/SimranSharma-ui/BlogAppBackend",
        },
        {
          category: "UrbanMart",
          title: "E-Commerce Website",
          link: "https://e-commerce-frontend-git-main-simrans-projects-dee52ad7.vercel.app/", 
          image: Shopping,
          alt: "E-Commerce App",
          FrontendGitHub:"https://github.com/SimranSharma-ui/E-Commerce-Frontend",
          BackendGitHub :"https://github.com/SimranSharma-ui/E-Commerce-Api",
      },

    ]
  return (
    <div className="bg-slate-700 min-h-screen"> 
    <div className="container mx-auto py-8">
      <h2 className="text-4xl text-white text-center font-bold my-3 font-serif"> Full Stack Projects</h2>
      <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mx-4 font-serif">
        {Project.map((post, index) => (
          <div key={index} className="bg-gray-800 text-white rounded-xl animate-fadeInFromBottom">
            <img src={post.image} alt={post.alt} className="w-full h-64 object-cover rounded-xl"/>
            <div className="p-4">
              <h2 className="text-blue-400 text-sm font-bold">{post.category}</h2>
              <h3 className="text-2xl font-bold mt-2">
                <a 
                  href={post.link} 
                  target="_blank"
                  className="hover:text-blue-300"
                >
                  {post.title}
                </a>
                </h3>
                <div className='flex flex-row space-x-6'>
                <a href={post.FrontendGitHub} target='_blank'> <h4>Frontend GitHub Link</h4></a>
                <a href={post.BackendGitHub} target='_blank' ><h4>Backend GitHub Link</h4></a>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default FullStackProjects
