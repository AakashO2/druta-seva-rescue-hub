
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Phone, MapPin, Clock, Navigation } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Booking {
  id: string;
  plateNumber: string;
  driverName: string;
  driverContact: string;
  pickupLocation: string;
  destination: string;
  status: 'on-way' | 'arrived' | 'in-progress' | 'completed';
  estimatedTime: string;
  bookingTime: string;
  ambulanceType: string;
  price: number;
}

const MyRescue = () => {
  const [activeBooking, setActiveBooking] = useState<Booking | null>(null);
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    document.title = 'My Rescue - DrutaSeva';
    
    // Simulate fetching booking data
    setTimeout(() => {
      // Mock data for active booking
      setActiveBooking({
        id: 'BK-12345',
        plateNumber: 'CA-789012',
        driverName: 'Rajesh Kumar',
        driverContact: '+91 98765 43211',
        pickupLocation: '123 Main St, Health City, CA 90210',
        destination: '456 Hospital Ave, Health City, CA 90210',
        status: 'on-way',
        estimatedTime: '5 minutes',
        bookingTime: '2025-04-20 06:15 PM',
        ambulanceType: 'Advanced Life Support',
        price: 2500
      });
      
      // Mock data for past bookings
      setPastBookings([
        {
          id: 'BK-12344',
          plateNumber: 'CA-345678',
          driverName: 'Amit Singh',
          driverContact: '+91 98765 43212',
          pickupLocation: '789 Park Lane, Health City, CA 90210',
          destination: '456 Hospital Ave, Health City, CA 90210',
          status: 'completed',
          estimatedTime: '0 minutes',
          bookingTime: '2025-04-15 09:30 AM',
          ambulanceType: 'Basic Life Support',
          price: 1500
        }
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  // Function to get status text and color
  const getStatusInfo = (status: Booking['status']) => {
    switch (status) {
      case 'on-way':
        return { text: 'On the way', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
      case 'arrived':
        return { text: 'Arrived', color: 'text-blue-600', bgColor: 'bg-blue-100' };
      case 'in-progress':
        return { text: 'In progress', color: 'text-blue-600', bgColor: 'bg-blue-100' };
      case 'completed':
        return { text: 'Completed', color: 'text-green-600', bgColor: 'bg-green-100' };
      default:
        return { text: 'Unknown', color: 'text-gray-600', bgColor: 'bg-gray-100' };
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">My Rescue</h1>
          
          {isLoading ? (
            <div className="text-center py-10">
              <div className="spinner-border text-druta" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-4 text-gray-600">Loading your bookings...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Active Booking */}
              {activeBooking ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-druta text-white p-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">Active Booking</h2>
                      <div className={`${getStatusInfo(activeBooking.status).bgColor} ${getStatusInfo(activeBooking.status).color} px-3 py-1 rounded-full text-sm font-medium`}>
                        {getStatusInfo(activeBooking.status).text}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left column */}
                      <div>
                        <div className="flex items-center mb-4">
                          <Ambulance className="w-5 h-5 text-druta mr-2" />
                          <h3 className="font-medium">Ambulance Details</h3>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Ambulance Type</p>
                            <p className="font-medium">{activeBooking.ambulanceType}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Plate Number</p>
                            <p className="font-medium">{activeBooking.plateNumber}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Driver Name</p>
                            <p className="font-medium">{activeBooking.driverName}</p>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-druta mr-1" />
                            <a href={`tel:${activeBooking.driverContact}`} className="font-medium text-druta">
                              {activeBooking.driverContact}
                            </a>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex items-center mb-4">
                            <Clock className="w-5 h-5 text-druta mr-2" />
                            <h3 className="font-medium">Estimated Time</h3>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-md space-y-3">
                            <div>
                              <p className="text-sm text-gray-500">ETA</p>
                              <p className="font-medium text-xl">{activeBooking.estimatedTime}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Booking Time</p>
                              <p className="font-medium">{activeBooking.bookingTime}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right column */}
                      <div>
                        <div className="flex items-center mb-4">
                          <MapPin className="w-5 h-5 text-druta mr-2" />
                          <h3 className="font-medium">Location Details</h3>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md space-y-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500">Pickup Location</p>
                            <p className="font-medium">{activeBooking.pickupLocation}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Destination</p>
                            <p className="font-medium">{activeBooking.destination}</p>
                          </div>
                        </div>
                        
                        {/* Map Placeholder */}
                        <div className="bg-gray-200 h-48 rounded-md mb-4 flex items-center justify-center">
                          <div className="text-center p-4">
                            <p className="text-gray-500 mb-2">Live tracking map would be displayed here</p>
                            <p className="text-sm text-gray-500">Using Mapbox or OpenStreetMap API</p>
                          </div>
                        </div>
                        
                        <a 
                          href="#" 
                          className="flex items-center justify-center bg-druta text-white px-4 py-2 rounded-md font-medium w-full"
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          Track Live on Map
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Total Amount</p>
                          <p className="text-xl font-bold text-druta">₹{activeBooking.price}</p>
                        </div>
                        <div>
                          <a 
                            href="tel:123-456-7890" 
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-medium inline-block mr-3"
                          >
                            Contact Support
                          </a>
                          <button 
                            className="bg-druta text-white px-4 py-2 rounded-md font-medium"
                          >
                            Cancel Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ambulance className="w-8 h-8 text-gray-500" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">No Active Bookings</h2>
                  <p className="text-gray-600 mb-6">
                    You don't have any active ambulance bookings at the moment.
                  </p>
                  <Link 
                    to="/book-ambulance" 
                    className="bg-druta text-white px-6 py-2 rounded-md font-medium inline-block"
                  >
                    Book an Ambulance
                  </Link>
                </div>
              )}
              
              {/* Past Bookings */}
              {pastBookings.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Past Bookings</h2>
                  
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Booking ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date & Time
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Ambulance
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {pastBookings.map((booking) => (
                          <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {booking.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.bookingTime}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.ambulanceType}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-druta">
                              ₹{booking.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusInfo(booking.status).bgColor} ${getStatusInfo(booking.status).color}`}>
                                {getStatusInfo(booking.status).text}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-druta hover:text-druta-700">
                                View Details
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MyRescue;
