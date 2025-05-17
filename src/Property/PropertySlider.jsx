import React, { useState, useEffect } from 'react';
import picture from "../Images/poperty.png";
import picture2 from "../Images/poperty1.png";



const propertyData = [
  {
    img: picture, // Replace with the actual image link
  },
  {
    img: picture2, // Replace with the actual image link
  },
  {
    img: picture, // Replace with the actual image link
  },
];

const PropertySlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === propertyData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? propertyData.length - 1 : current - 1);
  };

  // Auto slide effect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlide); // Cleanup the interval on unmount
  }, [current]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
      }}
    >
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          background: 'none',
          border: 'none',
          fontSize: '.9rem',
          cursor: 'pointer',
          transform: 'translateY(-50%)',
        }}
      >
        ❮
      </button>
      {propertyData.map((property, index) => (
        <div
          key={index}
          style={{
            display: index === current ? 'block' : 'none',
            textAlign: 'center',
          }}
        >
          <img
            src={property.img}
            alt={`Slide ${index + 1}`}
            style={{
              width: '400px',
              height: '200px',
              borderRadius: '10px',
            }}
          />
        </div>
      ))}
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '.9rem',
          cursor: 'pointer',
          transform: 'translateY(-50%)',
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default PropertySlider;
