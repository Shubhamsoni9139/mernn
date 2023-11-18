import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Aboutus = () => {
  return (
    <>
    <Navbar/>
      <div className="flex flex-col lg:flex-row bg-gray-100 p-4 lg:p-8">
        <div className="lg:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/gift-box-with-blue-ribbon-white-marble-background-top-view-gifts-celebration-valentines-theme_78240-73.jpg?w=900"
            alt="About Us Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            We, Gifting Memories, situated at C Scheme, Jaipur, Rajasthan, are recognized as one of the best trophy and corporate gifts manufacturing company. We design elegant, traditional and modern trophies made from a selection of metals that the clients can take their pick from. We help you strengthen your business relationship pioneering a customized model of corporate gifting. We are committed to magnify customers’ satisfaction and that belief has helped us garner a vast clientele, which continues to grow every day.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
