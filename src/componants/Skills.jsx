import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
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
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8">
          Markup Language and Css Frameworks
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex justify-center space-x-8">
          <div className="w-1/4">
            <IoLogoHtml5 className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">HTML 5</h2>
            <p >
              Hypertext markup Language used to build the structure of web pages
            </p>
          </div>
          <div className="w-1/4">
            <IoLogoCss3 className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">CSS </h2>
            <p >
              defining and creating the presentation of a structured document
              written in a markup language.
            </p>
          </div>
          <div className="w-1/4">
            <RiTailwindCssFill className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">Tailwind</h2>
            <p >
              Tailwind CSS is best used to speed up the development process by
              writing less code.
            </p>
          </div>
          <div className="w-1/4">
            <FaBootstrap className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">BootStrap</h2>
            <p >
              Bootstrap is a free and open-source CSS framework directed at
              responsive, mobile-first front-end web development.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8">
          Javascript Library and Runtime Environment
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex justify-center space-x-40">
          <div className="w-1/4">
            <FaReact className="text-6xl ml-40" />
            <h2 className="text-xl font-bold mb-2">React</h2>
            <p >
              React is the library for web and native user interfaces. Build
              user interfaces out of individual pieces called components written
              in JavaScript.
            </p>
          </div>
          <div className="w-1/4">
            <DiNodejs className="text-8xl ml-36" />
            <h2 className="text-xl font-bold mb-2">Node.js </h2>
            <p >
              Node.js is a cross-platform, open-source JavaScript runtime
              environment that can run on Windows, Linux, Unix, macOS, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8">
          WEb Application Framework and Database
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex justify-center space-x-40">
          <div className="w-1/4">
            <SiExpress className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">Express_node.js</h2>
            <p >
              Express is a minimal and flexible Node.js web application
              framework that provides a robust set of features for web and
              mobile applications. APIs.
            </p>
          </div>
          <div className="w-1/4">
            <BiLogoMongodb className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">
              MongoDB: The Deceloper Data Platform{" "}
            </h2>
            <p >
              MongoDB is a source-available, cross-platform, document-oriented
              database program
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-8">
          Text Editors
          <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        </h1>
        <div className="flex justify-center space-x-40">
          <div className="w-1/4">
            <BiSolidNotepad className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">Notepad</h2>
            <p >
              Notepad++ is a free (as in “free speech” and also as in “free
              beer”) source code editor and Notepad replacement that supports
              several languages.
            </p>
          </div>
          <div className="w-1/4">
            <SiVisualstudio className="text-6xl ml-36" />
            <h2 className="text-xl font-bold mb-2">Visual Code Editor</h2>
            <p >
              VS Code supports almost every major programming language. Several
              ship in the box, like JavaScript, TypeScript, CSS, and HTML, but
              extensions for others can be found in the VS Code Marketplace.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6  ">
        <div className="font-bold text-center text-2xl mb-6">CODING SKILLS</div>
        {skills.map((skill) => (
          <div className="mb-4" key={skill.name}>
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
