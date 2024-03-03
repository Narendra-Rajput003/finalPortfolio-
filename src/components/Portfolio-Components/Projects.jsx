import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const projectRefs = useRef([]); // Array to hold references to project elements

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= projectRefs.current.length) {
          return 1;
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000);

    return () => clearInterval(sliderInterval);
  }, [projectRefs]);

  const handleScroll = (event) => {
    const scrollWidth = event.currentTarget.scrollWidth;
    const clientWidth = event.currentTarget.clientWidth;
    const scrollLeft = event.currentTarget.scrollLeft;

    
    if (scrollLeft + clientWidth >= scrollWidth) {
      
      const offset = scrollWidth - clientWidth;
      event.currentTarget.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-8">
      <h2>PROJECTS</h2>
      <div
        className="overflow-x-auto whitespace-nowrap"
        onScroll={handleScroll}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} ref={el => projectRefs.current[index] = el} className="inline-block p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={require(`../../images/Projects/Porject${index + 1}.png`).default}
                alt={`Project ${index + 1}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Button 89
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
