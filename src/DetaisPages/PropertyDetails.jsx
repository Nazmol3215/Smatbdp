import React, { useRef } from 'react';
import { FaBed, FaBath, FaRegBuilding } from 'react-icons/fa';
import {  MdOutlineGasMeter } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineElectricBolt, MdOutlineStorage } from 'react-icons/md';
import { FaBuilding, FaFireExtinguisher, FaPhoneAlt } from 'react-icons/fa';
import { GiElectric, GiSatelliteCommunication } from 'react-icons/gi';
import { IoMdGlobe, IoMdWifi } from 'react-icons/io';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiParkingBoxLine } from 'react-icons/ri';
import { HiOutlineCamera } from 'react-icons/hi';
import { FiUnlock } from 'react-icons/fi';
import  Details  from './Test1';
import Button from "../Components/Common/Button";
import TrendingAndRecommended from '../TrendingAndRecommended/TrendingAndRecommended';





const PropertyDetails = () => {
  const overviewRef = useRef(null);
  const amenitiesRef = useRef(null);
  const listingsRef = useRef(null);
  const locationRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };


  return (
    <div>
      {/* Navigation Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => scrollToSection(overviewRef)}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Overview
        </button>
        <button
          onClick={() => scrollToSection(amenitiesRef)}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Amenities
        </button>
        <button
          onClick={() => scrollToSection(listingsRef)}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Listings
        </button>
        <button
          onClick={() => scrollToSection(locationRef)}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Location
        </button>
      </div>

      {/* Overview Section */}
      <div
        ref={overviewRef}
        style={{
          margin: '50px 0',
          padding: '20px',
          border: '1px solid #ddd',
        }}
      >
        <h2>Overview</h2>
        <p>
          This spacious 2,500 sq ft apartment in Bashundhara R/A offers comfortable living with
           4 bedrooms, 4 bathrooms, and balconies with wide windows for natural light. The 
           well-designed kitchen, ample parking spaces, elevators, and top-notch security 
           with CCTV and fire exits ensure convenience and safety. Electricity backup and 
           dedicated guard and maintenance staff provide peace of mind.
        </p>
      </div>

      {/* Details Section */}
      <div
        style={{
          margin: '50px 0',
          padding: '20px',
          border: '1px solid #ddd',
        }}
      >

        <Details />
        
      </div>


      {/* Amenities Section */}
      <div
        ref={amenitiesRef}
        style={{
          margin: '50px 0',
          padding: '20px',
          border: '1px solid #ddd',
        }}
      >
        <h2>Amenities</h2>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <MdOutlineElectricBolt size={30} />
          <p>Electricity Backup</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <AiOutlineHome size={30} />
          <p>Freehold</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FaBuilding size={30} />
          <p>Apartment Facing</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <MdOutlineGasMeter size={30} />
          <p>Gas</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <GiElectric size={30} />
          <p>Electricity</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <MdOutlineStorage size={30} />
          <p>Storage Areas</p> {/* MdOutlineStorage আইকন ব্যবহার করা হয়েছে */}
        </div>
        <div style={{ textAlign: 'center' }}>
          <IoMdWifi size={30} />
          <p>Broadband Internet</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <GiSatelliteCommunication size={30} />
          <p>Satellite/Cable TV</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FaPhoneAlt size={30} />
          <p>Intercom</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BsFillPeopleFill size={30} />
          <p>Maintenance Staff</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <HiOutlineCamera size={30} />
          <p>CCTV Security</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FiUnlock size={30} />
          <p>Fire Exit</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FaFireExtinguisher size={30} />
          <p>Fire Extinguisher</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <RiParkingBoxLine size={30} />
          <p>Parking Spaces</p>
        </div>
        
      </div>
    </div>








      </div>

      {/* Listings Section */}
      <div
        ref={listingsRef}
        style={{
          margin: '50px 0',
          padding: '20px',
          border: '1px solid #ddd',
        }}
      >
        <h2>Listings</h2>
        <p>Information about other listings can go here.</p>
        <TrendingAndRecommended />
      </div>

      {/* Location Section */}
      <div
        ref={locationRef}
        style={{
          margin: '50px 0',
          padding: '20px',
          border: '1px solid #ddd',
        }}
      >
        <h2>Location</h2>

        <Button />
        <p>

          Bashundhara R/A is a prime location with excellent 
          connectivity to top educational institutions like 
          North South University and International School Dhaka.
           Renowned healthcare facilities, including Evercare 
           Hospital, and popular shopping malls like Jamuna
            Future Park are nearby, making it an ideal place 
            for families.
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
