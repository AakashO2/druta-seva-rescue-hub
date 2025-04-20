
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "@/components/ui/input-otp";

interface OtpVerificationProps {
  phone: string;
  onSuccess: () => void;
  onResend: () => void;
  onCancel: () => void;
}

const OtpVerification = ({
  phone,
  onSuccess,
  onResend,
  onCancel
}: OtpVerificationProps) => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer as NodeJS.Timeout);
  }, [countdown]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsVerifying(true);
    try {
      // In a real implementation with Supabase, this would verify the OTP
      // For now, we'll simulate a successful verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is where we would call Supabase auth.verifyOTP()
      if (otp === '123456') { // For demo purposes
        toast({
          title: "Phone verified successfully",
          description: "Your phone number has been verified"
        });
        onSuccess();
      } else {
        toast({
          title: "Invalid OTP",
          description: "The OTP you entered is incorrect",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Verification failed",
        description: "An error occurred during verification",
        variant: "destructive"
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = () => {
    setCountdown(60);
    onResend();
    toast({
      title: "OTP Resent",
      description: "A new OTP has been sent to your phone"
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Verify Your Phone</h2>
      <p className="text-gray-600 mb-6">
        We've sent a 6-digit code to <span className="font-medium">{phone}</span>
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter OTP
        </label>
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <button
        onClick={handleVerify}
        disabled={isVerifying || otp.length !== 6}
        className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-druta hover:bg-druta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-druta disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isVerifying ? (
          "Verifying..."
        ) : (
          <>Verify OTP <ArrowRight className="ml-1 h-4 w-4" /></>
        )}
      </button>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={onCancel}
          className="text-gray-600 text-sm hover:text-gray-800"
        >
          Change phone number
        </button>
        
        {countdown > 0 ? (
          <p className="text-sm text-gray-500">
            Resend OTP in {countdown}s
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-druta text-sm hover:underline"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
