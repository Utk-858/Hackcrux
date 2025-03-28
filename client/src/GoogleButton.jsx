import React from 'react';

const GoogleButton = ({ text }) => {
  const handleGoogleLogin = () => {
    alert('Google Login Clicked! (No authentication)');
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex w-full items-center justify-center gap-3 rounded-lg border bg-white px-4 py-3 text-gray-700 shadow-md hover:bg-gray-100"
    >
      <img
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
        alt="Google Logo"
        className="h-6 w-6"
      />
      {text}
    </button>
  );
};

export default GoogleButton;
