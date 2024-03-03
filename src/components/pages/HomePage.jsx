import React from 'react';
import Navbar from "../HomePage-Components/Navbar"
import HomePageFooter from '../HomePage-Components/HomePageFooter';
import { motion } from 'framer-motion';

// Import images
import editSolidIcon from "../../images/edit-solid.svg";
import templateIcon from '../../images/template.svg';
import finalShareIcon from '../../images/finalshare.svg';
import createIcon from '../../images/create.svg';
import hieringIcon from '../../images/hiering.svg';
import personalInfoIcon from '../../images/undraw_personal_information_re_vw8a.svg';
import socialIcon from '../../images/social.svg';
import feedbackIcon from '../../images/feedback.svg';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Main Create Portfolio Section */}
<motion.div
  className="border border-gray-300 rounded-lg overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-8 px-4">
    <div className="md:mr-12 mb-8 md:mb-0">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Create Your Online Portfolio Now</h2>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
        Create Now!
      </button>
      <div className="mt-4 flex space-x-4 items-center text-gray-700">
        <div className="flex items-center">
          <img src={editSolidIcon} alt="Edit Icon" className="h-6 w-6 mr-2" />
          <span className="text-lg">Easy to create and customize</span>
        </div>
        <div className="flex items-center">
          <img src={templateIcon} alt="Template Icon" className="h-6 w-6 mr-2" />
          <span className="text-lg">Beautifully designed templates</span>
        </div>
        <div className="flex items-center">
          <img src={finalShareIcon} alt="Final Share Icon" className="h-6 w-6 mr-2" />
          <span className="text-lg">Easy download and share</span>
        </div>
      </div>
    </div>
    <div>
      <img src={createIcon} alt="Create Icon" className="h-32 md:h-40" /> {/* Adjust image size */}
    </div>
  </div>
</motion.div>


        {/* Social Media Section */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-8 px-4">
            <div className="text-center md:text-right md:pr-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Create your Profile with Ease</h2>
              <p className="text-lg text-gray-800">
                This is some content about the website. You can add any text or other elements here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quas excepturi repudiandae ipsam, modi voluptates enim tempora amet aperiam labore et quaerat reiciendis quae quidem blanditiis quam nihil itaque tempore.
              </p>
            </div>
            <div>
              <img src={hieringIcon} className="w-40 md:w-auto" alt="Hiring" />
            </div>
          </div>
        </motion.div>

        {/* Access Section */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-8 px-4">
            <div>
              <img src={personalInfoIcon} className="w-40 md:w-auto" alt="Personal Information" />
            </div>
            <div className="text-center md:text-left md:pl-12">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Easy Accessibility and Security of Your Portfolio</h2>
              <p className="text-lg text-gray-800">
                This is some content about the website. You can add any text or other elements here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione dolor saepe neque dignissimos non libero? Perspiciatis, rer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Another Social Media Section */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-8 px-4">
            <div className="text-center md:text-right md:pr-12">
              <h2 className="text-3xl font-bold mb-4 text-green-600">Integration with Social Media</h2>
              <p className="text-lg text-gray-800">
                This is some content about the website. You can add any text or other elements here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quas excepturi repudiandae ipsam, modi voluptates enim tempora amet aperiam labore et quaerat reiciendis quae quidem blanditiis quam nihil itaque tempore.
              </p>
            </div>
            <div>
              <img src={socialIcon} className="w-40 md:w-auto" alt="Social Media" />
            </div>
          </div>
        </motion.div>

        {/* Feedback and Interaction Section */}
        <motion.div
          className="border border-gray-300 rounded-lg overflow-hidden mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-8 px-4">
            <div>
              <img src={feedbackIcon} className="w-40 md:w-auto" alt="Feedback" />
            </div>
            <div className="text-center md:text-left md:pl-12">
              <h2 className="text-3xl font-bold mb-4 text-purple-600">Feedback and Interaction</h2>
              <p className="text-lg text-gray-800">
                This is some content about the website. You can add any text or other elements here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione dolor saepe neque dignissimos non libero? Perspiciatis, rerum labore voluptas maxime obcaecati expedita quia dolorum aliquam accusamus quod id quibusdam!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <HomePageFooter />
    </div>
  );
}

export default HomePage;
