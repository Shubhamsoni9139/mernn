import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles.css";

const categoryData = [
  { name: "Promotional", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1701075574/mwc1qf3cmg9vnlaoiet9.png" },
  { name: "Office Essentials", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553348/gifitng%20memories/t96k6xtosny21yrvsmum.png" },
  { name: "Keychains", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1701075988/nxi30dn6i3xi338bwyia.png" },
  { name: "Pens", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553348/gifitng%20memories/do1rf7wihlsm68bcayuz.png" },
  { name: "Personalized", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553349/gifitng%20memories/bewsq24magtgtclsqock.png" },
  { name: "Wall Clocks", imageUrl: "http://res.cloudinary.com/dt8emxboh/image/upload/v1701076100/fwt5rb4rcqjcvboet3gy.png" },
  { name: "Festive Gifting", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553306/gifitng%20memories/w4eemo0txpuuiwysz4ei.png" },
  { name: "Health & Wellness", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553308/gifitng%20memories/n4uv7dzxb2krjzfaef6g.png" },
  { name: "Gift Sets", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553365/gifitng%20memories/e2t5dxr5h7p1xi5taenx.png" }, 
  { name: "Fragrance", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553348/gifitng%20memories/x8za6l2w2ftkorsqqgri.png" },
  { name: "Technology", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553388/gifitng%20memories/esbjf9qjr1nh76nwp3eg.png" },
  { name: "Green Gifting", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553307/gifitng%20memories/ptoqd74trrnssnh84hcq.png" },
  { name: "Recognition", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553412/gifitng%20memories/fs30zb7lgqmunqi6zfy3.png" },
  { name: "Apparels", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553240/gifitng%20memories/svgppe9higuv0tcdkmm0.png" },
  { name: "Handicrafts", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553308/gifitng%20memories/l4ohj7hgzdda8xojnjtm.png" },
  { name: "Household", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553308/gifitng%20memories/nzupudwxffx0elu6tz4a.png" },
  { name: "Bags", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553304/gifitng%20memories/nhlk5war4h3ks8kkyhnt.png" },
  { name: "Sippers", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553307/gifitng%20memories/grxypxrldrqcydyxggf7.png" },
  { name: "Art", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553240/gifitng%20memories/jwiysklitbux6xmjackg.png"},
  { name: "Branded", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553305/gifitng%20memories/hl3olthofegnbmp1c9el.png"},
  { name: "DIY", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553306/gifitng%20memories/vpfx4daclaigvmbmxxdr.png"},
  { name: "Sustainable Gifting", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553387/gifitng%20memories/ahol3iafbe1au5mq2lqa.png"},
  { name: "Beauty Care", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553304/gifitng%20memories/uykvincviaqbm4ly8ikq.png"},
  { name: "Gourmet Gifts", imageUrl: "https://res.cloudinary.com/dt8emxboh/image/upload/v1699553306/gifitng%20memories/bclkwymuulrkbbmrjnne.png"},
  // Add more categories as needed
];

export default function Cat() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const categories = document.querySelector(".categories");
    const categorySlider = document.querySelector(".category-slider");
    const slideLeft = document.querySelector(".slide.left");
    const slideRight = document.querySelector(".slide.right");

    let scrollAmount = 0;
    const scrollStep = 200;

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

    slideLeft.addEventListener("click", moveSliderLeft);
    slideRight.addEventListener("click", moveSliderRight);

    return () => {
      slideLeft.removeEventListener("click", moveSliderLeft);
      slideRight.removeEventListener("click", moveSliderRight);
    };
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <nav>
      <div className="category-slider">
        <button className="slide left">&lt;</button>
        <div className="categories">
          {categoryData.map((category, index) => (
            <div
              className={`category ${
                selectedCategory === category.name ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleCategoryClick(category.name)}
            >
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
