
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface EmergencyBookingProps {
  onAuthRequired: () => void;
}

const EmergencyBooking = ({ onAuthRequired }: EmergencyBookingProps) => {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    location: '',
    serviceType: 'Emergency'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is authenticated
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real implementation with Supabase, we would insert the booking data
      // into the database here using supabase.from('bookings').insert([...])
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Emergency booking data submitted:', formData);
      setSubmitSuccess(true);
      
      toast({
        title: "Emergency request submitted",
        description: "We've received your emergency ambulance request."
      });
    } catch (err) {
      setError('An error occurred. Please try again or call our emergency number.');
      console.error('Form submission error:', err);
      
      toast({
        title: "Submission failed",
        description: "Please try again or call our emergency number directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Text */}
          <div className="bg-druta text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ambulance for emergencies</h2>
            <p className="mb-6">
              We use the latest in mobile and ambulance service for emergencies. If you need help with any issue, please call our emergency number directly.
            </p>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Emergency Hotline</h3>
              <a 
                href="tel:123-456-7890" 
                className="text-xl font-bold hover:underline"
              >
                123-456-7890
              </a>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Request Ambulance</h2>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-4">
                Your ambulance request has been submitted. Our team will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="serviceType" className="block text-gray-700 mb-2">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    required
                  >
                    <option value="Emergency">Emergency</option>
                    <option value="Non-Emergency">Non-Emergency</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center bg-druta text-white px-6 py-3 rounded-md font-medium w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
                
                {error && (
                  <div className="mt-4 bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">
                    {error}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBooking;
