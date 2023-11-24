import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">2,157 people have said how good Gifting-Memories</p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
            </div>
  
            <div className="mt-8 text-center md:mt-16 md:order-3">
              <a href="https://www.google.com/maps/place/Gifting+Memories/@26.914244,75.7960603,15z/data=!4m16!1m9!3m8!1s0x396db4061a9bde11:0xeac94301dad334c7!2sGifting+Memories!8m2!3d26.914244!4d75.7960603!9m1!1b1!16s%2Fg%2F1tqnk04d!3m5!1s0x396db4061a9bde11:0xeac94301dad334c7!8m2!3d26.914244!4d75.7960603!16s%2Fg%2F1tqnk04d?entry=ttu"> Check all 2,157 reviews </a>
            </div>
  
            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
              </div>
  
              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                {/* Testimonial 1 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
  
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“I recently bought customized t-shirts, bottles, and bags from Gifting Memories (Mr Aatish ji) for our Foundation Day celebration, and they were a massive hit with our employees.

The quality was outstanding, customization spot-on, and delivery was on time. Our team loved the personal touch, and it added an extra layer of excitement to our event.

I highly recommend Gifting Memories for top-notch, customized gifts. They made our Foundation Day memorable!

Best Regards.


”</p>
                      </blockquote>
                    </div>
  
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://lh3.googleusercontent.com/a/ACg8ocIoJloHyObijx9Dw-7ri0ipHgnbKv7MKXtSVS_4UYsL=w90-h90-p-rp-mo-br100" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Mayank Jain,</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">CEO, NLET Initiatives LLP.</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Testimonial 2 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
  
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“super excellent quality product we receivefrom you timely delivery , very well behaved staff , quick response keep it up high thanks Atish Sir to give such amazing quality products to Ekam Yoga Thanks again.”</p>
                      </blockquote>
                    </div>
  
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Sarit Singh</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Ekam Yoga</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Testimonial 3 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
  
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“A wonderful experience with quick service and gift item are reasonable and the best quality. Recommended to take any gifting item from Gifting Memories.”</p>
                      </blockquote>
                    </div>
  
                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://lh3.googleusercontent.com/a-/ALV-UjVlDEtipcKMINk48QwkR4bgKUDQkgAeaQdFL-JbYIuAHEUa=w90-h90-p-rp-mo-br100" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">neha Luharuwalla</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Testimonial