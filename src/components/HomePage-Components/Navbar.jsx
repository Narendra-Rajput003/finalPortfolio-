import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle redirection to home page
  const redirectToHome = () => {
    navigate('/');
  };

  // Function to handle redirection to sign-up page
  const redirectToSignUp = () => {
    navigate('/signup');
  };

  // Function to handle redirection to login page
  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex justify-between items-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={redirectToHome}>
          <span>
            {/* Insert the DevUI logo SVG or image tag here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zM5 9a1 1 0 011-1h2.5L8 5.707 9.354 4.354a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-1.353-1.353L7 14a1 1 0 01-2 0V10a1 1 0 011-1zm5 0a1 1 0 011-1h2.5L13 5.707 14.354 4.354a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-1.353-1.353L12 14a1 1 0 01-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="font-bold cursor-pointer" onClick={redirectToHome}>DevUI</span>
        </div>
        <div className="lg:hidden">
          <button 
            className="p-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-gray-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={`lg:flex space-x-2 ${showMenu ? 'flex flex-col' : 'hidden'}`}>
          <motion.button 
            type="button"
            className="rounded-md bg-gray-800 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={redirectToSignUp}
          >
            Sign Up
          </motion.button>
          <motion.button 
            type="button"
            className="rounded-md bg-gray-200 text-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={redirectToLogin}
          >
            Log In
          </motion.button>
        </div>
      </div>
    </div>
  );
}
