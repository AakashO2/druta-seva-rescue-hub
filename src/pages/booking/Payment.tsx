
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Landmark, Banknote, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PaymentMethod = 'cash' | 'card' | 'upi' | 'netbanking';

const BookingPayment = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Payment - DrutaSeva';
  }, []);

  const handlePayment = () => {
    if (!selectedMethod) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      
      // For cash payment, directly mark as success
      // For other methods, this would redirect to payment gateway
      if (selectedMethod === 'cash') {
        setTimeout(() => {
          // Redirect to success page or booking details
          navigate('/my-rescue');
        }, 2000);
      } else {
        // This would redirect to payment gateway in a real implementation
        window.open('https://example.com/payment-gateway', '_blank');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link to="/" className="flex items-center">
                <svg className="w-8 h-8 text-druta" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 10L19 20H5L5 4L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 4L19 4L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 4L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            {/* Emergency Contact */}
            <div className="flex justify-end mb-8">
              <a
                href="tel:123-456-7890"
                className="flex items-center bg-druta text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Emergency: 123-456-7890
              </a>
            </div>
            
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">✓</div>
                <span className="ml-2 font-medium">Location</span>
              </div>
              <div className="w-16 h-1 bg-green-500"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">✓</div>
                <span className="ml-2 font-medium">Service</span>
              </div>
              <div className="w-16 h-1 bg-green-500"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-druta text-white flex items-center justify-center font-medium">3</div>
                <span className="ml-2 font-medium">Payment</span>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-6 text-center">Select Payment Method</h1>
            
            {paymentComplete ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-green-800 mb-2">Payment Successful!</h2>
                <p className="text-green-700 mb-6">
                  Your ambulance booking has been confirmed. The driver is on the way.
                </p>
                <Link 
                  to="/my-rescue" 
                  className="bg-druta text-white px-6 py-3 rounded-md font-medium inline-block"
                >
                  View Booking Details
                </Link>
              </div>
            ) : (
              <>
                {/* Summary */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="font-bold text-lg mb-4">Booking Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ambulance Type</span>
                      <span className="font-medium">Advanced Life Support</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plate Number</span>
                      <span className="font-medium">CA-789012</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Driver Contact</span>
                      <span className="font-medium">+91 98765 43211</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pickup Location</span>
                      <span className="font-medium truncate max-w-xs">123 Main St, Health City</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Destination</span>
                      <span className="font-medium truncate max-w-xs">456 Hospital Ave</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between font-bold">
                      <span>Total Amount</span>
                      <span className="text-druta">₹2,500</span>
                    </div>
                  </div>
                </div>
                
                {/* Payment Methods */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="font-bold text-lg mb-4">Payment Methods</h2>
                  
                  <div className="space-y-3">
                    {/* Cash */}
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${selectedMethod === 'cash' ? 'border-druta ring-2 ring-druta ring-opacity-50' : 'border-gray-200'}`}
                      onClick={() => setSelectedMethod('cash')}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full ${selectedMethod === 'cash' ? 'bg-druta text-white' : 'bg-gray-100 text-gray-500'} flex items-center justify-center mr-3`}>
                          <Banknote className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">Cash</p>
                          <p className="text-sm text-gray-600">Pay cash to the driver</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-5 h-5 rounded-full border-2 ${selectedMethod === 'cash' ? 'border-druta bg-druta' : 'border-gray-300'} flex items-center justify-center`}>
                            {selectedMethod === 'cash' && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Credit/Debit Card */}
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${selectedMethod === 'card' ? 'border-druta ring-2 ring-druta ring-opacity-50' : 'border-gray-200'}`}
                      onClick={() => setSelectedMethod('card')}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full ${selectedMethod === 'card' ? 'bg-druta text-white' : 'bg-gray-100 text-gray-500'} flex items-center justify-center mr-3`}>
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">Credit / Debit Card</p>
                          <p className="text-sm text-gray-600">Pay with Visa, Mastercard, etc.</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-5 h-5 rounded-full border-2 ${selectedMethod === 'card' ? 'border-druta bg-druta' : 'border-gray-300'} flex items-center justify-center`}>
                            {selectedMethod === 'card' && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* UPI */}
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${selectedMethod === 'upi' ? 'border-druta ring-2 ring-druta ring-opacity-50' : 'border-gray-200'}`}
                      onClick={() => setSelectedMethod('upi')}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full ${selectedMethod === 'upi' ? 'bg-druta text-white' : 'bg-gray-100 text-gray-500'} flex items-center justify-center mr-3`}>
                          <div className="font-bold text-lg">UPI</div>
                        </div>
                        <div>
                          <p className="font-medium">UPI Payment</p>
                          <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm, etc.</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-5 h-5 rounded-full border-2 ${selectedMethod === 'upi' ? 'border-druta bg-druta' : 'border-gray-300'} flex items-center justify-center`}>
                            {selectedMethod === 'upi' && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Net Banking */}
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${selectedMethod === 'netbanking' ? 'border-druta ring-2 ring-druta ring-opacity-50' : 'border-gray-200'}`}
                      onClick={() => setSelectedMethod('netbanking')}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full ${selectedMethod === 'netbanking' ? 'bg-druta text-white' : 'bg-gray-100 text-gray-500'} flex items-center justify-center mr-3`}>
                          <Landmark className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">Net Banking</p>
                          <p className="text-sm text-gray-600">Pay from your bank account</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-5 h-5 rounded-full border-2 ${selectedMethod === 'netbanking' ? 'border-druta bg-druta' : 'border-gray-300'} flex items-center justify-center`}>
                            {selectedMethod === 'netbanking' && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Confirm Payment Button */}
                <button
                  onClick={handlePayment}
                  disabled={!selectedMethod || isProcessing}
                  className={`w-full py-3 rounded-md font-medium text-center ${
                    selectedMethod && !isProcessing
                      ? 'bg-druta text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Confirm Payment'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingPayment;
