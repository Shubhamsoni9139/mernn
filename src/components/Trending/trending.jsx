import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles.css";

export default function Trending() {


  return (
    <>
    <center>
    <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Trending Gifts</h2>
    <nav>
        

        <div className="trending-gifts">
          <div className="trending-gift">
            <img src="https://bharatgifting.com/trend1.jpeg" alt="Trending Gift 1" />
            <p>Green Gifting</p>
          </div>
          <div className="trending-gift">
            <img src="https://bharatgifting.com/trend1.jpeg" alt="Trending Gift 2" />
            <p>Sippers</p>
          </div>
          <div className="trending-gift">
            <img src="https://bharatgifting.com/trend1.jpeg" alt="Trending Gift 3" />
            <p>Bags</p>
          </div>
          <div className="trending-gift">
            <img src="https://bharatgifting.com/trend1.jpeg" alt="Trending Gift 3" />
            <p>Chocolates</p>
          </div>
          <div className="trending-gift">
            <img src="https://bharatgifting.com/trend1.jpeg" alt="Trending Gift 3" />
            <p>Marble Handicrafts</p>
          </div>
          <div className="trending-gift">
            <img src="https://bharatgifting.com/trend1.jpeg" alt="Trending Gift 3" />
            <p>Trophies</p>
          </div>
         
        </div>
    </nav>
    </center>
    </>
  );
}
