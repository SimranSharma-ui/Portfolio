
import React from 'react';

const About = () => {
 
  const qualifications = [
    {
      degree: 'Training In Mern Stack Development',
      institution: 'Sensation Software Solution, Phase 8, Industrial Area, Mohali',
      year: 'Currently',
    },
    {
      degree: 'Post Graduate Diploma In Computer Application',
      institution: 'Post Graduate Government College For Girls, Sector-42 Chandigarh ',
      year: '2023-2024',
    },
    {
      degree: 'Bachelor Of Arts',
      institution: 'Post Graduate Government College For Girls, Sector-42 Chandigarh ',
      year: '2020-2023',
    },
  ];

  return (
    <div className="bg-slate-700 min-h-screen">
      
    <div className="p-6 max-h-screen">
    
    
      <h2 className="text-4xl text-white text-center font-bold my-3 font-serif">Education</h2>
      <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
      <div className=" ">
        {qualifications.map((qual, index) => (
          <div className="bg-blue-300 border font-serif  rounded-lg border-solid shadow-2xl p-8 my-5 mx-6 flex-1 max-h-[45%] transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-400 cursor-pointer" key={index}>
            <h3 className="text-3xl font-semibold mb-2">{qual.degree}</h3>
            <p className=" text-xl">{qual.institution}</p>
            <p className=" text-lg">{qual.year}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  

  );
};

export default About;
