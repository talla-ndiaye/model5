import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
  showPasswordToggle = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password') 
    : type;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            block w-full px-3 py-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-50 disabled:text-gray-500
            ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
            ${showPasswordToggle ? 'pr-10' : ''}
          `}
        />
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-400" />
            ) : (
              <Eye className="h-4 w-4 text-gray-400" />
            )}
          </button>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default InputField;