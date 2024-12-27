import React from "react";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";

const Resume = () => {
  return (
    <div className="bg-slate-700 p-6 font-serif">
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="flex bg-slate-800 p-4 rounded-t-lg">
          <ul className="flex-1 text-xl text-white">
            <li className="font-bold">SIMRAN SHARMA</li>
            <li className="flex items-center">
              <MdAlternateEmail className="mt-1 mr-2" />
              sharmasimran0675@gmail.com
            </li>
            <li className="flex items-center">
              <IoMdPhonePortrait className="mt-1 mr-2" />
              6284415949
            </li>
            <li className="flex items-center">
              <MdOutlineLocationOn className="mt-1 mr-2" />
              #1244 Sec-42 Chandigarh
            </li>
          </ul>
          <img
            className="h-40 w-48 rounded-full object-cover ml-4"
            src="https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383487.jpg"
            alt="Simran"
          />
        </div>
        <div className="font-sans mt-4">
          <h2 className="text-2xl font-bold">Objective</h2>
          <hr className="border-t-2 border-black my-2" />
          <p className="text-lg ml-5">
            To work with a leading company to learn more and improve my skills
            while contributing to the company's growth to the best of my
            ability.
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Education</h1>
          <hr className="border-t-2 border-black my-2" />
          <div className="flex flex-col">
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center ml-5">
                <span className="mr-3">2024-2025</span>
                <span className="font-semibold">Sansation Solution</span>
                <span className="ml-60">Training in MERN Stack</span>
              </div>
              <span className="ml-10"></span>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center ml-5">
                <span className="mr-3">2023-2024</span>
                <span className="font-semibold">
                  Post Graduate Government College For Girls, Sector-42
                  Chandigarh
                </span>
                <span className="ml-5">
                  Post Graduate Diploma in Computer Application
                </span>
              </div>
              <span className="ml-10">79.9%%</span>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center ml-5">
                <span className="mr-3">2020-2023</span>
                <span className="font-semibold">
                  Post Graduate Government College For Girls, Sector-42
                  Chandigarh
                </span>
                <span className="ml-5">Bachelor in Arts</span>
              </div>
              <span className="ml-10">74%</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-2xl font-bold">Technical Skills</h1>
          <hr className="border-t-2 border-black my-2" />
          <ul className="ml-5">
            <li>MS Word, PowerPoint</li>
            <li>Programming with C, Java</li>
            <li>Web Design using HTML, CSS, JavaScript, PHP</li>
            <li>Database Management Systems</li>
          </ul>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Soft Skills</h1>
          <hr className="border-t-2 border-black my-2" />
          <ul className="ml-5">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Creativity</li>
          </ul>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Certificates</h1>
          <hr className="border-t-2 border-black my-2" />
          <ul className="ml-5">
            <li>NSS (National Service Scheme), 2022</li>
            <li>Science Exhibition (Interschool Competition), 2017</li>
          </ul>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Interests</h1>
          <hr className="border-t-2 border-black my-2" />
          <ul className="ml-5">
            <li>Drawing</li>
            <li>Reading Novels</li>
            <li>Cooking</li>
          </ul>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Languages</h1>
          <hr className="border-t-2 border-black my-2" />
          <ul className="ml-5">
            <li>English</li>
            <li>Hindi</li>
            <li>Punjabi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
