import React from 'react';

class HeroSection extends React.Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ backgroundColor: 'white' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701100002/uwhdawx5m2zzigariu6o.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701100033/pmzxghsg4lhb19d04tsb.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701100070/wirpo7dqoa2djdr5ecda.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701100106/ebv2u7nxurnxlv0qa0fw.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default HeroSection;
