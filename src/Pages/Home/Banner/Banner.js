import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner-a.jpg'
import banner2 from '../../../images/Banner/banner-b.jpg'
import banner3 from '../../../images/Banner/banner-c.jpg'

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Covid-19 Attention</h3>
      <p>Coronavirus disease (COVID-19) information centre</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Wear Your Mask</h3>
      <p>Masks are a key measure to suppress transmission and save lives.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Be Vaccined</h3>
      <p>The pandemic continues to impact all aspects of our society. Below you will find updates, recommendations, and resources to stay safe and healthy.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;