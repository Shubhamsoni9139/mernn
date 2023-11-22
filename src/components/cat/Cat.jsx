import React, { useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles.css";

const categoryData = [
    { name: "Promotional", imageUrl: "https://bharatgifting.com/badge.png" },
    { name: "Office Essentials", imageUrl: "https://bharatgifting.com/office.png" },
    { name: "Keychains", imageUrl: "https://bharatgifting.com/keychain.png" },
    { name: "Pens", imageUrl: "https://bharatgifting.com/pens.png" },
    { name: "Personalized", imageUrl: "https://bharatgifting.com/pillows.png" },
    { name: "Wall Clocks", imageUrl: "https://bharatgifting.com/clock.png" },
    { name: "Festive Gifting", imageUrl: "https://bharatgifting.com/diya.png" },
    { name: "Health & Wellness", imageUrl: "https://bharatgifting.com/health.png" },
    { name: "Gift Sets", imageUrl: "https://bharatgifting.com/set.png" }, 
    { name: "Fragrance", imageUrl: "https://bharatgifting.com/perfume.png" },
    { name: "Technology", imageUrl: "https://bharatgifting.com/tech.png" },
    { name: "Green Gifting", imageUrl: "https://bharatgifting.com/green.png" },
    { name: "Recognition", imageUrl: "https://bharatgifting.com/trophy.png" },
    { name: "Apparels", imageUrl: "https://bharatgifting.com/apparels.png" },
    { name: "Handicrafts", imageUrl: "https://bharatgifting.com/handicrafts.png" },
    { name: "Household", imageUrl: "https://bharatgifting.com/household.png" },
    { name: "Bags", imageUrl: "https://bharatgifting.com/bag.png" },
    { name: "Sippers", imageUrl: "https://bharatgifting.com/drink.png" },
    { name: "Art", imageUrl: "https://bharatgifting.com/art.png"},
    { name: "Branded", imageUrl: "https://bharatgifting.com/brand.png"},
    { name: "DIY", imageUrl: "https://bharatgifting.com/diy.png"},
    { name: "Sustainable Gifting", imageUrl: "https://bharatgifting.com/sustainable.png"},
    { name: "Beauty Care", imageUrl: "https://bharatgifting.com/beauty.png"},
    { name: "Gourmet Gifts", imageUrl: "https://bharatgifting.com/choco.png"},
    // Add more categories as needed
];

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
          {categoryData.map((category, index) => (
            <div className="category" key={index}>
              <img src={category.imageUrl} alt={`Category ${index + 1}`} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <button className="slide right">&gt;</button>
      </div>
    </nav>
  );
}
