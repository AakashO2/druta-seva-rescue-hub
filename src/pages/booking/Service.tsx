
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Clock, ShieldCheck, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface AmbulanceType {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  plateNumber: string;
  driverContact: string;
  estimatedTime: string;
}

const BookingService = () => {
  const [selectedAmbulance, setSelectedAmbulance] = useState<string | null>(null);

  const ambulanceTypes: AmbulanceType[] = [
    {
      id: 'basic',
      name: 'Basic Life Support',
      description: 'Standard ambulance with basic medical equipment',
      price: 1500,
      icon: <Ambulance className="w-6 h-6" />,
      plateNumber: 'CA-123456',
      driverContact: '+91 98765 43210',
      estimatedTime: '10 mins'
    },
    {
      id: 'advanced',
      name: 'Advanced Life Support',
      description: 'Fully equipped ambulance with advanced medical equipment',
      price: 2500,
      icon: <ShieldCheck className="w-6 h-6" />,
      plateNumber: 'CA-789012',
      driverContact: '+91 98765 43211',
      estimatedTime: '12 mins'
    },
    {
      id: 'critical',
      name: 'Critical Care',
      description: 'Specialized ambulance for critical patients with life support systems',
      price: 3500,
      icon: <Heart className="w-6 h-6" />,
      plateNumber: 'CA-345678',
      driverContact: '+91 98765 43212',
      estimatedTime: '15 mins'
    }
  ];
  
  useEffect(() => {
    document.title = 'Select Ambulance - DrutaSeva';
  }, []);

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
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">✓</div>
                <span className="ml-2 font-medium">Location</span>
              </div>
              <div className="w-16 h-1 bg-green-500"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-druta text-white flex items-center justify-center font-medium">2</div>
                <span className="ml-2 font-medium">Service</span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">3</div>
                <span className="ml-2 text-gray-600">Payment</span>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-6 text-center">Select Ambulance Service</h1>
            
            {/* Map with nearby ambulances - placeholder */}
            <div className="bg-gray-200 h-60 rounded-md mb-6 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-gray-500 mb-2">Map with nearby ambulances would be displayed here</p>
                <p className="text-sm text-gray-500">Using Mapbox or OpenStreetMap API</p>
              </div>
            </div>
            
            {/* Ambulance types */}
            <div className="space-y-4 mb-6">
              {ambulanceTypes.map((ambulance) => (
                <div 
                  key={ambulance.id}
                  onClick={() => setSelectedAmbulance(ambulance.id)}
                  className={`border ${
                    selectedAmbulance === ambulance.id 
                      ? 'border-druta ring-2 ring-druta ring-opacity-50' 
                      : 'border-gray-300'
                  } rounded-md p-4 cursor-pointer transition-all hover:shadow-md`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${
                        selectedAmbulance === ambulance.id ? 'bg-druta text-white' : 'bg-gray-100 text-gray-500'
                      } flex items-center justify-center`}>
                        {ambulance.icon}
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{ambulance.name}</h3>
                        <p className="font-bold text-druta">₹{ambulance.price}</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{ambulance.description}</p>
                      
                      {selectedAmbulance === ambulance.id && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-gray-500">Ambulance Plate</p>
                              <p className="font-medium">{ambulance.plateNumber}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Driver Contact</p>
                              <p className="font-medium">{ambulance.driverContact}</p>
                            </div>
                            <div className="flex items-center mt-2">
                              <Clock className="w-4 h-4 text-druta mr-1" />
                              <p className="font-medium text-druta">ETA: {ambulance.estimatedTime}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-2 flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        selectedAmbulance === ambulance.id 
                          ? 'border-druta bg-druta' 
                          : 'border-gray-300'
                      } flex items-center justify-center`}>
                        {selectedAmbulance === ambulance.id && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Continue Button */}
            <Link 
              to="/book-ambulance/payment"
              className={`w-full py-3 rounded-md font-medium text-center ${
                selectedAmbulance
                  ? 'bg-druta text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              onClick={(e) => {
                if (!selectedAmbulance) e.preventDefault();
              }}
            >
              Continue to Payment
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingService;
