
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-druta" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 10L19 20H5L5 4L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 4L19 4L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 4L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold ml-2">DrutaSeva</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Providing fast and reliable ambulance services when you need them most. Available 24/7 for all your emergency transport needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-druta transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-druta transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-druta transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-druta transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-druta transition-colors text-sm">Services</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-druta transition-colors text-sm">How It Works</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-druta transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/book-ambulance" className="text-gray-400 hover:text-druta transition-colors text-sm">Book Ambulance</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-druta transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/emergency" className="text-gray-400 hover:text-druta transition-colors text-sm">Emergency Response</Link></li>
              <li><Link to="/services/non-emergency" className="text-gray-400 hover:text-druta transition-colors text-sm">Non-Emergency Transport</Link></li>
              <li><Link to="/services/scheduled" className="text-gray-400 hover:text-druta transition-colors text-sm">Scheduled Medical Transport</Link></li>
              <li><Link to="/services/specialized" className="text-gray-400 hover:text-druta transition-colors text-sm">Specialized Care</Link></li>
              <li><Link to="/services/training" className="text-gray-400 hover:text-druta transition-colors text-sm">First Aid Training</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact Info</h3>
            <p className="text-gray-400 text-sm mb-2">123 Medical Center Drive</p>
            <p className="text-gray-400 text-sm mb-4">Health City, CA 90210</p>
            <p className="text-gray-400 text-sm mb-1"><span className="font-medium text-white">Emergency:</span> 123-456-7890</p>
            <p className="text-gray-400 text-sm"><span className="font-medium text-white">Email:</span> info@drutaseva.com</p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 DrutaSeva Ambulance Services. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <span className="text-druta mx-1">❤</span> for those in need
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
