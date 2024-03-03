import { Link } from 'react-router-dom';

const HomePageFooter = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Services Section */}
          <div className="w-1/4">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/customization" className="text-gray-400 hover:text-white">Customization</Link></li>
              <li><Link to="/easy-share" className="text-gray-400 hover:text-white">Easy share</Link></li>
            </ul>
          </div>
          {/* About Section */}
          <div className="w-1/4">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul>
              <li><Link to="/company" className="text-gray-400 hover:text-white">Company</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Team</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          {/* Edaxu Section */}
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-4">Edaxu</h3>
            <p className="text-gray-400">Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
          </div>
        </div>
        {/* Footer Text */}
        <div className="text-center mt-8">
          <p>Made with <span role="img" aria-label="heart">❤️</span> by Edaxu!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageFooter;
