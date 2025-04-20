
import { PhoneCall, FileText, Ambulance, Building } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our streamlined process ensures speed, transparency, and efficiency when you need help the most
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="w-8 h-8 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Request Service</h3>
            <p className="text-gray-600 text-sm">
              Call our emergency number or use our online booking form to request an ambulance.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Provide Details</h3>
            <p className="text-gray-600 text-sm">
              Give us the necessary information about the patient and the medical situation.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ambulance className="w-8 h-8 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Ambulance Dispatch</h3>
            <p className="text-gray-600 text-sm">
              Our nearest ambulance will be immediately dispatched to your location.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-druta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Medical Facility</h3>
            <p className="text-gray-600 text-sm">
              We'll transport the patient safely to the appropriate medical facility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
