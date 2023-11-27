import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import Cat from '../../components/cat/Cat'
import Trending from '../../components/Trending/trending'
import Featured from '../../components/productCard/Featured'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Layout>
      <Cat />
      <HeroSection />
      <Featured/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>

      </div>
      <Trending/>
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home