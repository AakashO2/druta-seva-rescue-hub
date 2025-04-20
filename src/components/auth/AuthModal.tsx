
import { useState } from 'react';
import { X } from 'lucide-react';
import Login from './Login';
import Register from './Register';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  action: 'login' | 'register';
  onAuthSuccess: () => void;
}

const AuthModal = ({ isOpen, onClose, action, onAuthSuccess }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(action);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex space-x-4">
            <button
              className={`font-medium pb-2 ${
                activeTab === 'login'
                  ? 'text-druta border-b-2 border-druta'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`font-medium pb-2 ${
                activeTab === 'register'
                  ? 'text-druta border-b-2 border-druta'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'login' ? (
            <Login onSuccess={onAuthSuccess} />
          ) : (
            <Register onSuccess={() => {
              onAuthSuccess();
              setActiveTab('login');
            }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
