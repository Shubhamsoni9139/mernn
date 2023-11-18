import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shipping Policies:</h1>
      <p className="mb-4">
        Almost all the products displayed on the website are either ready stock
        or can be manufactured in a short time. Usually, we take 10-12 days' time
        to manufacture and dispatch the products. Few items, which are under
        EXPRESS DELIVERY or Stock In Hand collection, can be dispatched within
        as low as 2 working days. Depending on order quantity, Going Memories
        sales team can confirm the stock availability OR lead time if some item
        is not readily available.
      </p>

      <p className="mb-4">
        Your order will be shipped to your registered shipping address with us
        within 3 working days from the date of processing, and the delivery of
        the order will be made within 3-10 days, based on the location. To
        process your order as quickly as possible, we make every effort. The
        deliveries will be carried out by any of the following agencies:
      </p>

      <ol className="list-decimal pl-4 mb-4">
        <li>Name of logistic company: Xpressbee</li>
        <li>Name of logistic company: Delhivery</li>
      </ol>

      <h2 className="text-2xl font-bold mb-2">Package Undelivered</h2>

      <p className="mb-4">
        <strong>Wrong Address:</strong> We suggest that the shipping address be
        validated before validating it on our website. If the delivery address
        provided is incorrect, we do not take responsibility. We would treat the
        order status as closed if a shipment is returned to us because the
        address is inaccurate or outdated. Please check carefully to make sure
        that the current and correct address has been entered.
      </p>

      <p className="mb-4">
        <strong>Address Format:</strong> We recommend filling the shipping
        address in the given format with zip code and not in the P.O. Box address
        format. If not, we will try to prevent this problem before shipping by
        connecting with the customer for better understanding.
      </p>

      <p className="mb-4">
        <strong>Change in Address:</strong> Any change in shipping address needs
        to be informed within 4 hours of ordering the products. Changes in
        address would not be allowed after the order has been shipped.
      </p>

      <h2 className="text-2xl font-bold mb-2">Shipping Charges:</h2>

      <p className="mb-4">
        Shipping charges may vary from city to city and the order quantity. We
        recommend the customers to check with the shipping rates on the checkout
        page.
      </p>

      <h2 className="text-2xl font-bold mb-2">Hidden Charges:</h2>

      <p className="mb-4">
        There are NO hidden charges at Going Memories. The standard phase is the
        final price of the order. Once the order is shipped and delivered,
        there will be no additional fee to be paid.
      </p>

      <p>
        Any problems with respect to shipping policy should be mailed to{' '}
        <a
          href="mailto:giftingmemories@gmail.com"
          className="text-blue-500 hover:underline"
        >
          giftingmemories@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default ShippingPolicy;
