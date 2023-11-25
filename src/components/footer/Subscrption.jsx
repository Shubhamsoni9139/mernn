import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB, Timestamp } from '../../fireabase/FirebaseConfig';
import myContext from '../../context/data/myContext';
import Loader from '../../components/loader/Loader';

function Subscription() {
  const [email, setEmail] = useState("");
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const subscribe = async () => {
    setLoading(true);

    if (email === "") {
      return toast.error("Email field is required");
    }

    try {
      // Assuming you have a "subscriptions" collection in your Firestore database
      const subscriptionRef = collection(fireDB, "subscriptions");

      const subscriptionData = {
        email: email,
        time: Timestamp.now(),
      };

      await addDoc(subscriptionRef, subscriptionData);

      toast.success("Subscription Successful");
      setEmail("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Error occurred during subscription");
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center w-full'>
      {loading && <Loader />}
      <div >
        <div>
          <h1 className='text-sm font-semibold tracking-widest text-gray-400 uppercase'>Subscribe to get updates</h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            className='bg-white-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Enter your email'
          />
        </div>
        <div className='flex justify-center mb-3'>
          <button
            onClick={subscribe}
            className='bg-blue-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
