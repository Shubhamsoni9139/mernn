import  { useContext, useEffect } from 'react'
import Filter from '../../components/filter/Filter'
//import ProductCard from '../../components/productCard/ProductCard'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import {toast} from 'react-toastify'

function Allproducts() {
  const context = useContext(myContext)
  const { mode, product ,searchkey
    //  setSearchkey
     ,filterType,
    //  ,setFilterType,
      filterPrice,
    //   setFilterPrice
    } = context

  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart);
  console.log(cartItems)

  const addCart = (product)=> {
      dispatch(addToCart(product));
      toast.success('add to cart');

  }

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Filter/>
      <section className="text-gray-600 body-font">
      <div className="px-5 py-8 md:py-16 mx-auto">
        <center>
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Latest Collection</h1>
          </div>
        </center>

        <div className="flex flex-wrap -m-4">
        <div className="flex flex-wrap -m-4">
  {product
    .filter((obj) => obj.title.toLowerCase().includes(searchkey))
    .filter((obj) => obj.category.toLowerCase().includes(filterType))
    .filter((obj) => obj.price.includes(filterPrice))
    .slice(0, 3000)
    .map((item) => (
      <div className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" key={item.id}>
        <div onClick={() => (window.location.href = `/productinfo/${item.id}`)} className="overflow-hidden aspect-w-1 aspect-h-1">
          <img
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
            src={item.imageUrl}
            alt="product image"
          />
        </div>
        <div className="flex flex-col mt-4 space-y-2">
          <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base truncate">
            <a onClick={() => (window.location.href = `/productinfo/${item.id}`)} title="">
              {item.title}
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </h3>
          <div className="flex items-center space-x-px">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            ))}
          </div>
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
            ₹{item.price}+gst
          </p>
        </div>
      </div>
    ))}
</div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Allproducts