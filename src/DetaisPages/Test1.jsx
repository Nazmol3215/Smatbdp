import React from "react";
import { FaCalendarAlt, FaBuilding, FaBed, FaBath, FaKey, FaRegCalendarAlt, FaRulerCombined } from "react-icons/fa";

const Details = () => {

  
  const details = {
    date: "15/09/2024",
    floorNo: 4,
    bedrooms: 4,
    bathrooms: 4,
    unitNo: 4,
    occupancyStatus: "Occupied",
    builtInYear: 2013,
    floorArea: 2500,
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1..9rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>DETAILS</h2>
      <div style={gridStyle}>
        
        <div style={itemStyle}>
          <FaCalendarAlt style={iconStyle} />
          <span>Date</span>
        </div>
        <div>{details.date}</div>

        <div style={itemStyle}>
          <FaBuilding style={iconStyle} />
          <span>Floor No</span>
        </div>
        <div>{details.floorNo}</div>

        <div style={itemStyle}>
          <FaBed style={iconStyle} />
          <span>Bedrooms</span>
        </div>
        <div>{details.bedrooms}</div>

        <div style={itemStyle}>
          <FaKey style={iconStyle} />
          <span>Occupancy Status</span>
        </div>
        <div>{details.occupancyStatus}</div>

        <div style={itemStyle}>
          <FaBath style={iconStyle} />
          <span>Bathrooms</span>
        </div>
        <div>{details.bathrooms}</div>

        <div style={itemStyle}>
          <FaRegCalendarAlt style={iconStyle} />
          <span>Built-in Year</span>
        </div>
        <div>{details.builtInYear}</div>

        <div style={itemStyle}>
          <FaRulerCombined style={iconStyle} />
          <span>Floor Area (sqft)</span>
        </div>
        <div>{details.floorArea}</div>

      </div>
    </div>
  );
};

export default Details;
