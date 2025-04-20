
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-dark-900">
      {/* Background overlay for the image */}
      <div 
        className="absolute inset-0 bg-dark-900" 
        style={{
          backgroundImage: 'url("/lovable-uploads/b28368cc-adaa-4f0d-8136-74925352ae9c.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
          Lifesaving care, anytime, anywhere.
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-lg">
          We are committed to providing swift, professional, and compassionate emergency medical services when you need them most.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4">
          <a 
            href="tel:123-456-7890" 
            className="flex items-center bg-druta text-white px-6 py-3 rounded-md font-medium"
          >
            <PhoneCall className="w-5 h-5 mr-2" />
            Call Now
          </a>
          <Link 
            to="/book-ambulance" 
            className="flex items-center bg-white text-dark-800 px-6 py-3 rounded-md font-medium"
          >
            Book Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
