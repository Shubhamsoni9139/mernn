
import React, { useEffect } from "react";


import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Cat() {
    useEffect(() => {
        const categories = document.querySelector(".categories");
        const categorySlider = document.querySelector(".category-slider");
        const slideLeft = document.querySelector(".slide.left");
        const slideRight = document.querySelector(".slide.right");
    
        let scrollAmount = 0;
        const scrollStep = 200; // Adjust this value to control how much the slider moves
    
        // Move the slider to the left
        const moveSliderLeft = () => {
          scrollAmount -= scrollStep;
          if (scrollAmount < 0) {
            scrollAmount = 0;
          }
          categories.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth",
          });
        };
    
        // Move the slider to the right
        const moveSliderRight = () => {
          scrollAmount += scrollStep;
          if (scrollAmount > categories.scrollWidth - categorySlider.offsetWidth) {
            scrollAmount = categories.scrollWidth - categorySlider.offsetWidth;
          }
          categories.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth",
          });
        };
    
        // Add event listeners to the buttons
        slideLeft.addEventListener("click", moveSliderLeft);
        slideRight.addEventListener("click", moveSliderRight);
    
        // Slider logic
        const promoSlider = document.querySelector(".promotional-slider");
        const promoSlides = document.querySelectorAll(".promo-slide");
    
        let currentSlide = 0;
        const slideInterval = 3000; // 3 seconds
    
        const nextSlide = () => {
          promoSlides[currentSlide].style.marginLeft = "-100%";
          currentSlide = (currentSlide + 1) % promoSlides.length;
          promoSlides[currentSlide].style.marginLeft = "0";
        };
    
        // Start the slider
        const startSlider = () => {
          setInterval(nextSlide, slideInterval);
        };
    
        // Start the slider when the component mounts
        startSlider();
    
        // Cleanup: Remove event listeners when the component unmounts
        return () => {
          slideLeft.removeEventListener("click", moveSliderLeft);
          slideRight.removeEventListener("click", moveSliderRight);
        };
      }, []);
  return (
    <nav>
      <div className="category-slider">
        <button className="slide left">&lt;</button>
        <div className="categories">
          <div className="category">
            <img src="https://bharatgifting.com/badge.png" alt="Category 1" />
            <p>Promotional</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/office.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/keychain.png" alt="Category 2" />
            <p>Keychains</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/pens.png " alt="Category 2" />
            <p>Pens</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/pillows.png" alt="Category 2" />
            <p>Personalized</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/clock.png " alt="Category 2" />
            <p>Wall Clocks</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/diya.png " alt="Category 2" />
            <p>Festive Gifting</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/health.png " alt="Category 2" />
            <p>Health & Wellness</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/set.png " alt="Category 2" />
            <p>Gift Sets</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/perfume.png" alt="Category 2" />
            <p>Fragrance</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/tech.png" alt="Category 2" />
            <p>Technology</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/green.png" alt="Category 2" />
            <p>Green Giftings</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/trophy.png " alt="Category 2" />
            <p>Recognition</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/apparels.png " alt="Category 2" />
            <p>Apparels</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/handicrafts.png " alt="Category 2" />
            <p>Handicrafts</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/household.png" alt="Category 2" />
            <p>Household</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/bag.png " alt="Category 2" />
            <p>Bags
            </p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/drink.png  " alt="Category 2" />
            <p>Sippers
            </p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png  " alt="Category 2" />
            <p>Art
            </p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/brand.png" alt="Category 2" />
            <p>Branded
            </p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/diy.png " alt="Category 2" />
            <p>DIY
            </p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/sustainable.png " alt="Category 2" />
            <p>Sustainable Gifting
            </p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/beauty.png " alt="Category 2" />
            <p>Beauty Care
            </p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/choco.png " alt="Category 2" />
            <p>Gourmet Gifts
            </p>
          </div>

          
        </div>
        <div className="category-buttons">
          <button className="slide right">&gt;</button>
        </div>
      </div>
    </nav>
  );
}
