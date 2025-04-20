
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import EmergencyBooking from '@/components/EmergencyBooking';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'DrutaSeva - Emergency Ambulance Services';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <EmergencyBooking />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
