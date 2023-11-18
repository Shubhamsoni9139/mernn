
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
            <img src="https://bharatgifting.com/art.png" alt="Category 1" />
            <p>Promotional</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="https://bharatgifting.com/art.png" alt="Category 2" />
            <p>Office Essentials</p>
          </div>
          <div className="category">
            <img src="" alt="Category 2" />
            <p>hello
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
