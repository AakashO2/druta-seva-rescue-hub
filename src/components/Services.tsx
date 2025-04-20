
import { Link } from 'react-router-dom';
import { Calendar, Heart, BarChart3, Activity } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We deliver a full range of Emergency Medical Services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">General & Medicine</h3>
            <p className="text-gray-600 text-sm mb-4">
              Emergency medical care for all general illnesses and injuries
            </p>
            <Link to="/services/general-medicine" className="text-druta text-sm font-medium">
              Learn more →
            </Link>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Specialized Care</h3>
            <p className="text-gray-600 text-sm mb-4">
              Critical care transport with specialized equipment and staff
            </p>
            <Link to="/services/specialized-care" className="text-druta text-sm font-medium">
              Learn more →
            </Link>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Scheduled Transport</h3>
            <p className="text-gray-600 text-sm mb-4">
              Pre-arranged medical transport for appointments or transfers
            </p>
            <Link to="/services/scheduled-transport" className="text-druta text-sm font-medium">
              Learn more →
            </Link>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Professional Care</h3>
            <p className="text-gray-600 text-sm mb-4">
              Advanced life support with trained medical staff
            </p>
            <Link to="/services/professional-care" className="text-druta text-sm font-medium">
              Learn more →
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="bg-druta text-white px-6 py-2 rounded-md font-medium inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
