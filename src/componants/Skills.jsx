import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiSolidNotepad } from "react-icons/bi";
import { SiVisualstudio } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", percentage: 83 },
    { name: "CSS3", percentage: 75 },
    { name: "JAVASCRIPT", percentage: 73 },
  ];

  return (
    <div className="bg-slate-700 p-6 font-serif text-white">
      {/* Markup Language and CSS Frameworks Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8 animate-slideLeftToRight">
          Markup Language and CSS Frameworks
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex flex-wrap justify-center space-x-8 animate-fadeInFromBottom">
          <div className="w-1/2 sm:w-1/4 mb-8">
            <FaHtml5 className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">HTML 5</h2>
            <p>Hypertext markup Language used to build the structure of web pages</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8">
            <IoLogoCss3 className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">CSS</h2>
            <p>Defining and creating the presentation of a structured document written in a markup language.</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8">
            <RiTailwindCssFill className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">Tailwind</h2>
            <p>Tailwind CSS speeds up development by writing less code.</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8">
            <FaBootstrap className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">Bootstrap</h2>
            <p>Bootstrap is a CSS framework for responsive, mobile-first front-end web development.</p>
          </div>
        </div>
      </div>

      {/* JavaScript Library and Runtime Environment Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8 animate-slideLeftToRight">
          JavaScript Library and Runtime Environment
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex flex-wrap justify-center space-x-8 animate-fadeInFromBottom">
          <div className="w-1/2 sm:w-1/4 mb-8">
            <FaReact className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">React</h2>
            <p>React is used for building user interfaces with components in JavaScript.</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8">
            <DiNodejs className="text-8xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">Node.js</h2>
            <p>Node.js is a cross-platform JavaScript runtime environment.</p>
          </div>
        </div>
      </div>

      {/* Web Application Framework and Database Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8 animate-slideLeftToRight">
          Web Application Framework and Database
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex flex-wrap justify-center space-x-8 animate-fadeInFromBottom">
          <div className="w-1/2 sm:w-1/4 mb-8">
            <SiExpress className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">Express.js</h2>
            <p>Express is a minimal and flexible Node.js web application framework.</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8">
            <BiLogoMongodb className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">MongoDB</h2>
            <p>MongoDB is a cross-platform, document-oriented database program.</p>
          </div>
        </div>
      </div>

      {/* Text Editors Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8 animate-slideLeftToRight">
          Text Editors
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex flex-wrap justify-center space-x-8 animate-fadeInFromBottom">
          <div className="w-1/2 sm:w-1/4 mb-8">
            <BiSolidNotepad className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">Notepad</h2>
            <p>Notepad++ is a free source code editor and Notepad replacement supporting several languages.</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8">
            <SiVisualstudio className="text-6xl mx-auto" />
            <h2 className="text-xl font-bold mb-2">Visual Studio Code</h2>
            <p>VS Code supports major programming languages and extensions.</p>
          </div>
        </div>
      </div>

      {/* Coding Skills Section */}
      <div className="max-w-md mx-auto p-6">
        <div className="font-bold text-center text-2xl mb-6 animate-slideRightToLeft">
          CODING SKILLS
        </div>
        {skills.map((skill) => (
          <div className="mb-4 animate-fadeInFromBottom" key={skill.name}>
            <div className="font-bold text-xl mb-1">{skill.name}</div>
            <div className="relative h-4 bg-gray-300 rounded mb-2">
              <div
                className={`h-full bg-cyan-600 rounded transition-all duration-300`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
              <div className="absolute top-[-20px] left-[50%] transform -translate-x-1/2 text-black font-bold">
                {skill.percentage}%
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-transparent border-r-transparent border-b-cyan-600 border-b-4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
