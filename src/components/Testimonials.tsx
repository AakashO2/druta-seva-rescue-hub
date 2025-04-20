
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "I was grateful for the DrutaSeva team tonight. In their quick arrival to my home, the paramedics were compassionate and calming. They made a scary situation much easier to handle."
    },
    {
      id: 2,
      name: "Michael Owen",
      rating: 5,
      text: "The medical transport service for my elderly father was excellent. The staff was courteous, respectful, and made the experience stress-free for both patient and family."
    },
    {
      id: 3,
      name: "Emily Parker",
      rating: 4,
      text: "My family had a medical emergency last week. The DrutaSeva ambulance arrived within minutes. Their swift action and professionalism were so reassuring during a frightening time."
    }
  ];

  return (
    <div className="py-16 bg-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            We're dedicated to providing the best possible care during critical times. Here's what our patients have to say about us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
