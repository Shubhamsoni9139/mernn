import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true);
        if (firstName === "" || lastName === "" || mobileNo === "" || email === ""|| referralCode === "" || password === "") {
            return toast.error("All fields are required");
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                firstName: firstName,
                lastName: lastName,
                mobileNo: mobileNo,
                email: email,
                referralCode: referralCode,
                uid: users.user.uid,
                time: Timestamp.now(),
            };

            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("Signup Successfully");
            setFirstName("");
            setLastName("");
            setMobileNo("");
            setEmail("");
            setReferralCode("");
            setPassword("");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            <div className=' bg-white p-6 shadow-xl lg:p-10 border border-gray-100 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-black-500 text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name='firstName'
                        className=' bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-600 placeholder:text-gray-600 outline-none'
                        placeholder='First Name'
                    />
                                         <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name='lastName'
                        className=' bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-600 placeholder:text-gray-600 outline-none'
                        placeholder='Last Name'
                    />
            
                </div>
                <div>
                <input
                        type="text"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        name='mobileNo'
                        className=' bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-600 placeholder:text-gray-600 outline-none'
                        placeholder='Mobile No'
                    />
                      <input
                        type="text"
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                        name='referralCode'
                        className=' bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-600 placeholder:text-gray-600 outline-none'
                        placeholder='Referral Code'
                    />
                </div>
               
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-600 placeholder:text-gray-600 outline-none'
                        placeholder='Email'
                    />
                      
                </div>

               

                <div>
              
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-600 placeholder:text-gray-600 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className=' bg-blue-600 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-gray-600'>Dealer signup <Link className=' text-blue-600 font-bold' to={'/dealerSignup'}>Signup as a Dealer</Link></h2>
                </div>
                <div>
                    <h2 className='text-gray-600'>Have an account <Link className=' text-blue-600 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup;
