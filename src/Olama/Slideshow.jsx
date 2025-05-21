import React, { useState, useEffect } from 'react';
import img3 from "../assets/Images/PM.jpeg";
import img2 from "../assets/Images/jgh.jpeg";
import img4 from "../assets/Images/sf.jpeg";
import img5 from "../assets/Images/sf.jpeg";
import img8 from "../assets/Images/cdgf.jpeg";
import img6 from "../assets/Images/sgbs.jpeg";
import img7 from "../assets/Images/shrt.jpeg";
import img9 from "../assets/Images/iukj,.jpeg";
import img11 from "../assets/Images/cdsv.jpeg";





const images = [
  img3,
 img2,
 img3,
 img4,
 img5,
 img6,
 img7,
 img8,
 img9,
 img11,
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '20px auto',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: 'auto',
          transition: 'opacity 0.8s ease-in-out',
          borderRadius: '12px',
        }}
      />
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          fontSize: '18px',
        }}
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          fontSize: '18px',
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default Slideshow;
