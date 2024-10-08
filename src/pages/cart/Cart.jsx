// src/pages/cart/Cart.jsx
import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, updateCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';
import Navbar from '../../components/navbar/Navbar';


function Cart() {
  const context = useContext(myContext);
  const { mode,  coupon } = context;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const deleteCart = (item) => {
    if (item) {
      // If an item is provided, delete the specific item
      dispatch(deleteFromCart(item));
      toast.success('Item deleted from cart');
    } else {
      // If no item is provided, delete the entire cart
      dispatch(updateCart([]));
      toast.success('Delete cart');
    }
  };
  

  const increaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCart = [...cartItems];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: (updatedCart[index].quantity || 1) + 1,
    };
    dispatch(updateCart(updatedCart));
  };

  const decreaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCart = [...cartItems];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: Math.max((updatedCart[index].quantity || 1) - 1, 1),
    };
    dispatch(updateCart(updatedCart));
  };
 

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price) * (cartItem.quantity || 1);
    });
    setTotalAmount(temp);
    console.log(temp);
  }, [cartItems]);

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmount;
  
  /**========================================================================
   *!                           coupon code
   *========================================================================**/
   const [enteredCoupon, setEnteredCoupon] = useState('');
   const [appliedDiscount, setAppliedDiscount] = useState(0);
 
   const applyCoupon = async () => {
     try {
       const couponDoc = coupon.find((c) => c.title === enteredCoupon);
       if (couponDoc) {
         const discountPercentage = couponDoc.percentage || 0;
         setAppliedDiscount(discountPercentage);
         toast.success(`Coupon "${enteredCoupon}" applied successfully`);
       } else {
         toast.error(`Coupon "${enteredCoupon}" not found`);
       }
     } catch (error) {
       console.error('Error applying coupon:', error);
     }
   };
 
   const grandTotalWithDiscount = grandTotal - (grandTotal * appliedDiscount) / 100;

     




  /**========================================================================
   *!                           Payment Integration
   *========================================================================**/

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const buyNow = async () => {
    if (name === '' || address === '' || pincode === '' || phoneNumber === '') {
      return toast.error('All fields are required', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
    };

    var options = {
      key: 'rzp_test_AoHQOjq1O7UDhz',
      key_secret: 'p548KZ9pYrRAEsRSUymNEcP0',
      amount: parseInt(grandTotalWithDiscount * 100),
      currency: 'INR',
      order_receipt: 'order_rcptid_' + name,
      name: 'Bharat-gifting',
      description: 'for testing purpose',
      handler: function (response) {
        console.log(response);
        toast.success('Payment Successful');

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          }),
          email: JSON.parse(localStorage.getItem('user')).user.email,
          userid: JSON.parse(localStorage.getItem('user')).user.uid,
          paymentId,
        };

        try {
          const orderRef = collection(fireDB, 'order');
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: '#3399cc',
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <>
    <Navbar/>

      <div
        className="h-screen bg-gray-100 pt-5 mb-[60%] "
        style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}
      >
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {cartItems.map((item, index) => {
              const { title, price, imageUrl, quantity } = item;
              return (
                <div
                  className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start"
                  style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}
                  key={index}
                >
                  <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        ₹{price}
                      </p>
                    </div>
                    <div
                      className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <button onClick={() => deleteCart(item)} className="border rounded-md py-2 px-4 text-black-500">
                      <svg
  onClick={() => deleteCart(item)}
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
  </svg>
</button>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button onClick={() => decreaseQuantity(item)} className="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span className="text-center w-8">{quantity || 1}</span>
                        <button onClick={() => increaseQuantity(item)} className="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
            style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}
          >
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Subtotal
              </p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                ₹{grandTotalWithDiscount}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Shipping
              </p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                ₹{shipping}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={enteredCoupon}
          onChange={(e) => setEnteredCoupon(e.target.value)}
          className="border rounded-md py-2 px-4 mr-2"
        />
        
      </div>
      <button onClick={applyCoupon} className="border rounded-md py-2 px-4 p-10 ml-3">
          Apply Coupon
        </button>
      <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
        Applied Discount
      </p>
      <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
        - ₹{(grandTotal * appliedDiscount) / 100}
      </p>

      <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
        Updated Total
      </p>
      <div className>
        <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
          ₹{grandTotalWithDiscount}
        </p>
      </div>


            <div className="flex justify-between mb-3">
            <button onClick={() => deleteCart()} className="border rounded-md py-2 px-4 text-black-500">
  Delete Cart
</button>

            </div>

            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </div>
        </div>
      </div>
      </>
  );
}

export default Cart;
