import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start bg-gray-100 p-4 lg:p-8">
        <div className="lg:w-1/2 lg:pr-8">
          <center><h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Contact Us</h1></center>
          <div className="text-left">
            <h3 className="text-lg font-semibold mt-4">Address</h3>
            <p>91, Dhuleshwar Gdn, near S R Kalla Hospital, Panch Batti,<br/>C Scheme, Hathroi, Jaipur, Rajasthan 302001</p>
            <h3 className="text-lg font-semibold mt-4">General Enquiries</h3>
            <p>gifingmemories@gmail.com</p>
            <h3 className="text-lg font-semibold mt-4">Call Us</h3>
            <p>+91-9309295750<br/>+91-9351064707 | 0141-4107807</p>
            <h3 className="text-lg font-semibold mt-4">Our Timings</h3>
            <p>Mon - Sat : 10:00 AM - 07:00 PM </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6612480736803!2d75.79348537543954!3d26.914243976646176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4061a9bde11%3A0xeac94301dad334c7!2sGifting%20Memories!5e0!3m2!1sen!2sin!4v1694852441378!5m2!1sen!2sin"
              className="w-full h-96 lg:h-120 rounded-lg"  // Adjusted height for large screens
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
