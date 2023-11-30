import  { useContext } from 'react'
import myContext from '../../../context/data/myContext'

function AddCoupon() {
    const context = useContext(myContext);
    const { coupons, setCoupons, addCoupon } = context;
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Coupon</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={coupons.title}
                            onChange={(e) => setCoupons({ ...coupons, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Coupon-code'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={coupons.price}
                            onChange={(e) => setCoupons({ ...coupons, percentage: e.target.value })}
                            name='percentage'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='discount-percentage'
                        />
                    </div>
                   
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addCoupon}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Coupon
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddCoupon