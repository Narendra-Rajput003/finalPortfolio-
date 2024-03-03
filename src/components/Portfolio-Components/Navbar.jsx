import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import Logo from "../../images/logo.png"
import ProfileDropdown from './ProfileDropdown'; // Import the ProfileDropdown component

const Navbar = () => {
  return (
    <div className="navbar-new">
      <nav className="navbar flex justify-around">
        <img src={Logo} width="50px" height="50px" className="navbar-logo" alt="logo" />
        <ul className="navbar-list flex items-center space-x-4">
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
        </ul>
        {/* Include the ProfileDropdown component */}
        <ProfileDropdown />
      </nav>
    </div>
  );
};

export default Navbar;
