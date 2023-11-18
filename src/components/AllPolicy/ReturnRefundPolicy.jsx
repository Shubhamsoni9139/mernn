import React from 'react';

const ReturnRefundPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Return & Refund Policies</h1>
      <p>
        At Gifting Memories, we strive to ensure that every purchase brings joy and satisfaction.
        If, for any reason, you are not entirely pleased with your purchase, our return and refund
        policies are designed to provide a seamless and customer-friendly experience. We don’t accept returns.
      </p>

      <p>
        If the provided item is in its original condition, unused, and in its original packaging. To
        initiate a return, simply contact our customer support team, and they will guide you through
        the process.
      </p>

      <p>
        Once we receive the returned item and verify its condition, we will process a refund to your
        original payment method. Please note that personalized or customized items may have limited
        eligibility for returns. For any inquiries or assistance regarding returns and refunds, feel
        free to reach out to our dedicated customer support team, committed to ensuring your satisfaction
        with Gifting Memories.
      </p>

      <p>
        Any problems with respect to the return & refund policy should be mailed to{' '}
        <a href="mailto:giftingmemories@gmail.com" className="text-blue-500 hover:underline">
          giftingmemories@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ReturnRefundPolicy;
