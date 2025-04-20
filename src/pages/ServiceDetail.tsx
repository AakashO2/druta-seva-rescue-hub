
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const serviceData = {
  'general-medicine': {
    title: 'General & Medicine',
    description: 'Emergency medical care for all general illnesses and injuries',
    fullDescription: 'Our General & Medicine emergency service provides immediate care for a wide range of illnesses and injuries. Our experienced medical team is equipped to handle everything from minor injuries to severe medical emergencies, ensuring you receive prompt and effective treatment when you need it most.',
    features: [
      'Immediate response to medical emergencies',
      'Treatment for common illnesses and injuries',
      'Basic life support and first aid',
      'Vital signs monitoring and stabilization',
      'Referrals to specialized care when needed'
    ],
    image: '/lovable-uploads/8107c355-6dfc-456a-a72b-9bf7062b2e58.png'
  },
  'specialized-care': {
    title: 'Specialized Care',
    description: 'Critical care transport with specialized equipment and staff',
    fullDescription: 'Our Specialized Care service is designed for patients requiring advanced medical attention during transport. We provide fully-equipped ambulances with specialized medical equipment and highly trained staff to ensure critical patients receive continuous care while being transported.',
    features: [
      'Advanced life support during transport',
      'Specialized medical equipment on board',
      'Highly trained medical professionals',
      'Continuous monitoring of critical patients',
      'Safe and efficient transport to specialized facilities'
    ],
    image: '/lovable-uploads/8107c355-6dfc-456a-a72b-9bf7062b2e58.png'
  },
  'scheduled-transport': {
    title: 'Scheduled Transport',
    description: 'Pre-arranged medical transport for appointments or transfers',
    fullDescription: 'Our Scheduled Transport service offers reliable, pre-arranged medical transport for non-emergency situations. Whether you need transportation to a medical appointment, transfer between facilities, or a planned hospital discharge, we ensure a comfortable and safe journey with appropriate medical support.',
    features: [
      'Pre-arranged transportation to medical facilities',
      'Inter-facility transfers',
      'Hospital discharge assistance',
      'Comfortable and accessible vehicles',
      'Trained attendants for patient assistance'
    ],
    image: '/lovable-uploads/8107c355-6dfc-456a-a72b-9bf7062b2e58.png'
  },
  'professional-care': {
    title: 'Professional Care',
    description: 'Advanced life support with trained medical staff',
    fullDescription: 'Our Professional Care service delivers advanced life support with highly trained medical professionals. We provide comprehensive emergency medical care for critical situations, including cardiac events, severe trauma, and other life-threatening conditions, ensuring the highest level of pre-hospital care.',
    features: [
      'Advanced cardiac life support',
      'Trauma care and stabilization',
      'Emergency medication administration',
      'Advanced airway management',
      'Continuous ECG and vital signs monitoring'
    ],
    image: '/lovable-uploads/8107c355-6dfc-456a-a72b-9bf7062b2e58.png'
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;

  useEffect(() => {
    document.title = service ? `DrutaSeva - ${service.title}` : 'DrutaSeva - Service';
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">The requested service information is not available.</p>
            <Link to="/services" className="text-druta hover:underline">
              View All Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/services" className="inline-flex items-center text-druta hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{service.fullDescription}</p>
              
              <h2 className="text-xl font-semibold mb-3">Key Features</h2>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-druta mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-druta hover:bg-druta-700">
                Book This Service
              </Button>
            </div>
            
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                {service.image && (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Quick Emergency?</h3>
                <p className="text-gray-600 mb-4">
                  Call our emergency number for immediate assistance.
                </p>
                <a 
                  href="tel:123-456-7890" 
                  className="inline-flex items-center bg-druta text-white px-4 py-2 rounded-md"
                >
                  Call Now: 123-456-7890
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
