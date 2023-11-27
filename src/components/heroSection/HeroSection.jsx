import React from 'react';

class HeroSection extends React.Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ backgroundColor: 'white' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701103365/vx96a62434dkd1r6dqpv.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701103415/um0rfjwacard5xldqony.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701103429/ijxvy2g4yvtxq5xctaeg.png" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://res.cloudinary.com/dt8emxboh/image/upload/v1701103447/ykq5lsfrn0rwqxkm7d2u.png" alt="Third slide" />
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
