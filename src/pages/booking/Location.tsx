
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Map, MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import AuthModal from '@/components/auth/AuthModal';

const BookingLocation = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authAction, setAuthAction] = useState<'login' | 'register'>('login');
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Select Location - DrutaSeva';
  }, []);

  useEffect(() => {
    // Check authentication status
    if (!isAuthenticated) {
      setShowAuthModal(true);
      setAuthAction('login');
    }
  }, [isAuthenticated]);

  const handlePickupClick = () => {
    // In a real implementation, this would open a map interface
    setPickupLocation('123 Main St, Health City, CA 90210');
  };

  const handleDestinationClick = () => {
    // In a real implementation, this would open a map interface
    setDestination('456 Hospital Ave, Health City, CA 90210');
  };

  const handleContinue = () => {
    if (!pickupLocation || !destination) {
      toast({
        title: "Location required",
        description: "Please select both pickup and destination locations",
        variant: "destructive"
      });
      return;
    }
    
    // Store locations in session storage for use in next steps
    sessionStorage.setItem('drutaseva_pickup', pickupLocation);
    sessionStorage.setItem('drutaseva_destination', destination);
    
    navigate('/book-ambulance/service');
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    toast({
      title: "Authentication successful",
      description: "You can now continue with your booking"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link to="/" className="flex items-center">
                <svg className="w-8 h-8 text-druta" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 10L19 20H5L5 4L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 4L19 4L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 4L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            {/* Emergency Contact */}
            <div className="flex justify-end mb-8">
              <a
                href="tel:123-456-7890"
                className="flex items-center bg-druta text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Emergency: 123-456-7890
              </a>
            </div>
            
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-druta text-white flex items-center justify-center font-medium">1</div>
                <span className="ml-2 font-medium">Location</span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">2</div>
                <span className="ml-2 text-gray-600">Service</span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">3</div>
                <span className="ml-2 text-gray-600">Payment</span>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-6 text-center">Select Locations</h1>
            
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Pickup Location */}
              <div 
                className="border border-gray-300 rounded-md overflow-hidden"
                onClick={handlePickupClick}
              >
                <div className="flex items-start p-4 cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-druta" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Pickup Location</h3>
                    <p className="text-sm text-druta">Click to select on map</p>
                    {pickupLocation && (
                      <p className="text-sm text-gray-600 mt-1">{pickupLocation}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Destination */}
              <div 
                className="border border-gray-300 rounded-md overflow-hidden"
                onClick={handleDestinationClick}
              >
                <div className="flex items-start p-4 cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Map className="w-5 h-5 text-druta" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Destination</h3>
                    <p className="text-sm text-druta">Click to select on map</p>
                    {destination && (
                      <p className="text-sm text-gray-600 mt-1">{destination}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-80 rounded-md mb-6 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-gray-500 mb-2">Map would be displayed here</p>
                <p className="text-sm text-gray-500">Using Mapbox API</p>
              </div>
            </div>
            
            {/* Continue Button */}
            <button 
              onClick={handleContinue}
              className={`w-full py-3 rounded-md font-medium text-center flex items-center justify-center ${
                pickupLocation && destination
                  ? 'bg-druta text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!pickupLocation || !destination}
            >
              Continue to Select Service <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => navigate('/')} 
        action={authAction}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default BookingLocation;
