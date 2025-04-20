import { useState } from 'react';
import { Mail, Lock, Phone, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import OtpVerification from './OtpVerification';

interface LoginProps {
  onSuccess: () => void;
}

const Login = ({ onSuccess }: LoginProps) => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: 'user-123',
        name: 'Test User',
        email: email,
        phone: '+91 9876543210'
      };
      
      login(mockUser);
      toast({
        title: "Login successful",
        description: "Welcome back!"
      });
      onSuccess();
    } catch (err) {
      setError('An error occurred during login');
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "OTP sent",
        description: `A verification code has been sent to ${phone}`
      });
      setIsOtpSent(true);
    } catch (err) {
      setError('Failed to send OTP');
      toast({
        title: "Failed to send OTP",
        description: "Please check your phone number and try again",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneLogin = async () => {
    const mockUser = {
      id: 'user-456',
      name: 'Phone User',
      email: '',
      phone: phone
    };
    
    login(mockUser);
    toast({
      title: "Login successful",
      description: "Welcome back!"
    });
    onSuccess();
  };

  return (
    <div>
      {loginMethod === 'phone' && isOtpSent ? (
        <OtpVerification 
          phone={phone}
          onSuccess={handlePhoneLogin}
          onResend={() => {
            toast({
              title: "OTP resent",
              description: `A new verification code has been sent to ${phone}`
            });
          }}
          onCancel={() => setIsOtpSent(false)}
        />
      ) : (
        <>
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`pb-2 px-4 ${
                loginMethod === 'email'
                  ? 'border-b-2 border-druta text-druta'
                  : 'text-gray-500'
              }`}
              onClick={() => setLoginMethod('email')}
            >
              Email
            </button>
            <button
              className={`pb-2 px-4 ${
                loginMethod === 'phone'
                  ? 'border-b-2 border-druta text-druta'
                  : 'text-gray-500'
              }`}
              onClick={() => setLoginMethod('phone')}
            >
              Phone Number
            </button>
          </div>

          {loginMethod === 'email' ? (
            <form onSubmit={handleEmailLogin}>
              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
                  {error}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    placeholder="yourname@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2 text-sm">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-druta focus:ring-druta border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-druta hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-druta hover:bg-druta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-druta"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-druta"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSendOtp}>
              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
                  {error}
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-druta focus:border-transparent"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-druta hover:bg-druta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-druta"
              >
                {isLoading ? (
                  "Processing..."
                ) : (
                  <>Send OTP <ArrowRight className="ml-1 h-4 w-4" /></>
                )}
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
