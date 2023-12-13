// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import yourLogo from '../path-to-your-logo.png'; // Import your logo

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          {/* <img src={yourLogo} alt="Your Logo" className="h-8 w-8 mr-2" /> */}
          Your Site Name
        </Link>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-white">
          <li>
            <Link to="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
