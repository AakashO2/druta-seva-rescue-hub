
import { useState } from 'react';
import { MapPin, PhoneCall, Mail, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real implementation, this would send the data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're here to help with any questions or concerns about our ambulance services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <MapPin className="w-5 h-5 text-druta" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-gray-600 text-sm">
                      123 Medical Center Drive<br />
                      Health City, CA 90210
                    </p>
                  </div>
                </div>
                
                {/* Phone Numbers */}
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <PhoneCall className="w-5 h-5 text-druta" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone Numbers</h4>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-medium">Emergency:</span> 123-456-7890
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">General & Support:</span> 123-456-0001
                    </p>
                  </div>
                </div>
                
                {/* Email Address */}
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <Mail className="w-5 h-5 text-druta" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-gray-600 text-sm">
                      info@drutaseva.com
                    </p>
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <Clock className="w-5 h-5 text-druta" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-medium">Emergency:</span> 24/7
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Office Hours:</span> 8am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-4">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              ) : null}
              
              {error ? (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-4">
                  {error}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Your Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-druta text-white px-6 py-3 rounded-md font-medium w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
