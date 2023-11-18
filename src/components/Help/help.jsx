import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const EnquiryForm = () => {
  return (
    <>
    <Navbar/>
    <div className="enquiry-form">
      <h2>Get in touch with us</h2>
      <form action="submit_enquiry.php" method="post">
        <div className="contact-details">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="name" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" required />
          </div>
        </div>
        <div className="query-section">
          <div className="form-group">
            <label htmlFor="query">Query:</label>
            <textarea id="query" name="query" rows="4" required></textarea>
          </div>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default EnquiryForm;
