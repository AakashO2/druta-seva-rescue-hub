
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EmergencyBooking from '@/components/EmergencyBooking';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AuthModal from '@/components/auth/AuthModal';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authAction, setAuthAction] = useState<'login' | 'register'>('login');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'DrutaSeva - Emergency Ambulance Services';
  }, []);

  const handleBookNowClick = () => {
    if (isAuthenticated) {
      navigate('/book-ambulance');
    } else {
      setAuthAction('login');
      setShowAuthModal(true);
      toast({
        title: "Authentication Required",
        description: "Please login or register to book an ambulance."
      });
    }
  };

  const handleRegisterClick = () => {
    setAuthAction('register');
    setShowAuthModal(true);
  };

  const handleLoginClick = () => {
    setAuthAction('login');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // Redirect to booking page after successful authentication
    navigate('/book-ambulance');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      <Hero onBookNowClick={handleBookNowClick} />
      <Stats />
      <Services />
      <HowItWorks />
      <EmergencyBooking onAuthRequired={() => {
        setAuthAction('login');
        setShowAuthModal(true);
      }} />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        action={authAction}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
