import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        <h1 className="text-2xl font-bold">My Portfolio</h1>

       
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      
        <ul
          className={`md:flex md:space-x-6 font-serif absolute md:static left-0 w-full md:w-auto 
          bg-slate-900 md:bg-transparent transition-all duration-300 ease-in-out 
          ${menuOpen ? 'top-16 opacity-100 visible p-6' : 'top-[-400px] opacity-0 invisible'} md:opacity-100 md:visible`}
        >
          <ul>
          <NavLink to={"/"}>
          <li className='font-bold hover:text-slate-500 transition-all'>Home</li>

          </NavLink>

          </ul>
          {[ "About", "Skills", "FrontendProjects","FullStackProjects", "Contact"].map((item) => (
            <li key={item} className="py-2 md:py-0">
              <NavLink
                to={`/${item.toLowerCase()}`}
                className="font-bold hover:text-slate-500 transition-all"
                activeClassName="text-slate-300"
                onClick={handleLinkClick}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
