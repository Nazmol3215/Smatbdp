import React from "react";
import "./PropertyList.css";
import picture from "../Images/poperty.png";
import picture2 from "../Images/poperty1.png";
import { useNavigate } from "react-router";
import CallButton from "../Components/Common/CallButton";

const PropertyList = () => {
  const navigateTo = useNavigate();

  const properties = [
    {
      id: 1,
      title: "Buy This 1800 Sq Ft...",
      location: "Block J, Bashundhara R-A",
      price: "৳15,400,000",
      bedrooms: 3,
      bathrooms: 4,
      area: "1800 sqft",
      imgSrc: picture2, // Image URL for the flat
    },
    {
      id: 2,
      title: "A 2200 Sq Ft Residentiale...",
      location: "Block J, Bashundhara R-A",
      price: "৳17,500,000",
      bedrooms: 4,
      bathrooms: 4,
      area: "2200 sqft",
      imgSrc: picture, // Image URL for the flat
    },
    {
      id: 3,
      title: "Covering 1360 Sq Ft....",
      location: "Block I, Bashundhara R-A",
      price: "৳10,000,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "1360 sqft",
      imgSrc: picture, // Image URL for the flat
    },
    {
      id: 3,
      title: "Covering 1360 Sq Ft .....",
      location: "Block I, Bashundhara R-A",
      price: "৳10,000,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "1360 sqft",
      imgSrc: picture, // Image URL for the flat
    },
  ];

  return (
    <div className="property-list">
      {properties.map((property) => (
        <div className="property-card" key={property.id}>
          <img
            src={property.imgSrc}
            alt={property.title}
            className="property-img"
          />
          <div className="property-details">
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p className="price">{property.price}</p>
            <div className="property-meta">
              <span>{property.bedrooms} Bedrooms</span>
              <span>{property.bathrooms} Bathrooms</span>
              <span>{property.area}</span>
            </div>
            <div className="actions">
              <button onClick={() => navigateTo("/DetaisPages")}>
                Details
              </button>
              <button onClick={() => navigateTo("/ContactForm")}>Email</button>
              <CallButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
