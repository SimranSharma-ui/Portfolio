import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-slate-900 text-white items-center p-4 sticky top-0 z-10 flex text-xl space-x-4 text-center justify-center">
      <ul className="flex space-x-4 font-serif">
        <li>
          <NavLink
            to="/"
            exact
            className="font-bold hover:text-slate-500"
            activeClassName="text-slate-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="font-bold hover:text-slate-500"
            activeClassName="text-slate-300"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="font-bold hover:text-slate-500"
            activeClassName="text-slate-300"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="font-bold hover:text-slate-500"
            activeClassName="text-slate-300"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className="font-bold hover:text-slate-500"
            activeClassName="text-slate-300"
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="font-bold hover:text-slate-500"
            activeClassName="text-slate-300"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
