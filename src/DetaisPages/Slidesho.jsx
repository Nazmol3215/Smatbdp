import React from 'react';
import { Carousel } from 'react-bootstrap';
import picture from  "../Images/poperty.png";
import picture1 from  "../Images/poperty1.png";





const Slideshow = () => {
  const carouselItemStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover', // ছবির আকার সঠিকভাবে ফিট করার জন্য
  };

  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // হালকা অন্ধকার ব্যাকগ্রাউন্ড
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div className="container mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={picture}
            alt="First slide"
            style={carouselItemStyle}
          />
          <Carousel.Caption style={captionStyle}>
            <h3>First Slide</h3>
            <p>This is the first slide of the slideshow.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={picture1}
            alt="Second slide"
            style={carouselItemStyle}
          />
          <Carousel.Caption style={captionStyle}>
            <h3>Second Slide</h3>
            <p>This is the second slide of the slideshow.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={picture}
            alt="Third slide"
            style={carouselItemStyle}
          />
          <Carousel.Caption style={captionStyle}>
            <h3>Third Slide</h3>
            <p>This is the third slide of the slideshow.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slideshow;
