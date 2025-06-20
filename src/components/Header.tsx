
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const Header = ({ onLoginClick, onRegisterClick }: HeaderProps) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-dark-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <svg className="w-8 h-8 text-druta" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 10L19 20H5L5 4L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 4L19 4L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 4L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-bold ml-2">DrutaSeva</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-sm font-medium hover:text-druta transition-colors">Services</Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-druta transition-colors">How It Works</Link>
          <Link to="/testimonials" className="text-sm font-medium hover:text-druta transition-colors">Testimonials</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-druta transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              {onLoginClick && (
                <button 
                  onClick={onLoginClick}
                  className="text-sm font-medium hover:text-druta transition-colors"
                >
                  Login
                </button>
              )}
              {onRegisterClick && (
                <button 
                  onClick={onRegisterClick}
                  className="text-sm font-medium bg-druta text-white px-4 py-1.5 rounded hover:bg-druta-700 transition-colors"
                >
                  Register
                </button>
              )}
            </>
          ) : (
            <>
              <Link 
                to="/my-rescue" 
                className="text-sm font-medium hover:text-druta transition-colors"
              >
                My Bookings
              </Link>
              <button 
                onClick={logout}
                className="text-sm font-medium hover:text-druta transition-colors"
              >
                Logout
              </button>
            </>
          )}
          <a 
            href="tel:123-456-7890" 
            className="flex items-center bg-druta text-white px-4 py-1.5 rounded text-sm font-medium"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            Emergency: 123-456-7890
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
