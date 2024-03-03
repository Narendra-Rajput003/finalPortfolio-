import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShareAlt, faQuestionCircle, faArrowRight , faAngleDown } from '@fortawesome/free-solid-svg-icons';

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div onClick={toggle} className="flex items-center cursor-pointer">
        <div className="profile-img">
          <FontAwesomeIcon icon={faUser} className="text-gray-600" />
        </div>
        <span className="ml-2">Narendra <FontAwesomeIcon icon={faAngleDown} className="text-gray-600" /></span>
      </div>
      
      {isOpen && (
        <ul className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link to="/update-profile" className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Update Profile
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link to="/share" className="flex items-center">
              <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
              Share
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link to="/help-support" className="flex items-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
              Help & Support
            </Link>
          </li>
          <hr className="my-1" />
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link to="/logout" className="flex items-center">
              <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
              Log out
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileDropdown;
