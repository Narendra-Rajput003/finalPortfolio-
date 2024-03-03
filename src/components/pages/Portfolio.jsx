import React,{useState,useEffect} from 'react';
import Navbar from '../Portfolio-Components/Navbar';
import SmallUserImage from "../../images/UserImage.png";
import Projects from '../Portfolio-Components/Projects';
 // Replace with the path to your smaller image

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= 3) {
          return 1;
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000);
  });

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#f7fafc' }} className="flex flex-col lg:flex-row justify-center items-center py-20">
        <div className="lg:w-1/2 lg:mr-10 flex justify-center lg:justify-end">
          <div className="w-3/4 lg:w-full max-w-md lg:max-w-lg">
            <div className="user-image">
            <img src={SmallUserImage} alt="User" className="w-90 h-90 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:ml-10 flex justify-center lg:justify-start">
          <div className="lg:w-3/4">
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl mb-4 lg:mb-6">Hi, I'm Narendra</div>
              <div className="text-2xl lg:text-3xl mb-4 lg:mb-6 font-bold">
                I'm a software developer
              </div>
              <div className="text-base lg:text-lg mb-6 lg:mb-8">
                I'm passionate about crafting software solutions and continuously learning in the process. Check out my portfolio to learn more about my journey.
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 text-lg lg:text-xl rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Portfolio;
