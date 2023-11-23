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
          Welcome to Bharat Gifting, your trusted partner in the world of corporate expressions. At Bharat Gifting, we understand the profound impact that a thoughtful gift can have on business relationships. Our journey began with a vision is to redefine corporate gifting in the Indian business landscape, creating moments that leave a lasting impression.


At the heart of Bharat Gifting is a mission to bridge connections and foster stronger relationships through the art of gifting. We believe that each gift is an opportunity to convey appreciation, celebrate milestones, and express gratitude. Our mission is to provide businesses with a seamless, curated, and meaningful gifting experience that transcends the ordinary.
Let's Create Lasting Impressions
Bharat Gifting is more than a gifting company; we are your partner in creating lasting impressions. Join us in the journey of making your corporate relationships more memorable and meaningful. Discover the power of thoughtful gifting with Bharat Gifting.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
