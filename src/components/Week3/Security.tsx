import React from 'react';
import { Button } from '../../components/ui/Button';

export const PasswordStrength: React.FC<{ password: string }> = ({ password }) => {
  const getStrength = () => {
    if (password.length > 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return { label: 'Strong', color: 'bg-success-500', width: 'w-full' };
    if (password.length > 6) return { label: 'Medium', color: 'bg-warning-500', width: 'w-2/3' };
    return { label: 'Weak', color: 'bg-error-500', width: 'w-1/3' };
  };

  const strength = getStrength();
  
  return (
    <div className="mt-2">
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full transition-all duration-500 ${strength.color} ${strength.width}`}></div>
      </div>
      <p className="text-[10px] mt-1 text-gray-500 uppercase font-bold tracking-wider">{strength.label} Password</p>
    </div>
  );
};

export const TwoFactorInput: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="text-center">
        <h3 className="text-xl font-bold">Secure Verification</h3>
        <p className="text-sm text-gray-500">Enter the 6-digit code sent to your email</p>
      </div>
      <div className="flex gap-2">
        {[1,2,3,4,5,6].map(i => (
          <input key={i} type="text" maxLength={1} className="w-12 h-14 border-2 border-primary-100 rounded-xl text-center text-xl font-bold focus:border-primary-500 outline-none shadow-sm" />
        ))}
      </div>
      <Button className="w-full">Verify & Continue</Button>
    </div>
  );
};