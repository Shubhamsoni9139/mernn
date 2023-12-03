// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace 'YOUR_PHONE_NUMBER' with the actual phone number including the country code
    window.open('https://wa.me/917240401109', '_blank');
  };

  return (
    <div
      className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-4 cursor-pointer shadow-md transition duration-300 hover:bg-green-700"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp className="text-3xl" />
    </div>
  );
};

export default WhatsAppButton;