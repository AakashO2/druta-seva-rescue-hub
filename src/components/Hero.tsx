
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookNowClick?: () => void;
}

const Hero = ({ onBookNowClick }: HeroProps) => {
  return (
    <div className="pt-16 pb-24 bg-dark-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Emergency Ambulance Services At Your Fingertips
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Our reliable ambulance service ensures quick medical assistance whenever you need it. Just a tap away for emergency situations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onBookNowClick}
                className="bg-druta hover:bg-druta-700 text-white font-medium px-6 py-3 rounded-md inline-flex items-center transition-colors"
              >
                Book an Ambulance <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="tel:123-456-7890"
                className="bg-transparent border-2 border-druta text-white font-medium px-6 py-3 rounded-md inline-flex items-center hover:bg-druta hover:border-druta transition-colors"
              >
                <PhoneCall className="mr-2 h-5 w-5" /> Call Emergency
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/8107c355-6dfc-456a-a72b-9bf7062b2e58.png"
              alt="Emergency ambulance service"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
