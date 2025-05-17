import React from 'react';
import { MdOutlineElectricBolt, MdOutlineGasMeter, MdOutlineStorage } from 'react-icons/md';
import { FaBed, FaBuilding, FaFireExtinguisher, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { GiElectric, GiSatelliteCommunication } from 'react-icons/gi';
import { IoMdGlobe, IoMdWifi } from 'react-icons/io';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiParkingBoxLine } from 'react-icons/ri';
import { HiOutlineCamera } from 'react-icons/hi';
import { FiUnlock } from 'react-icons/fi';

const Amenities = () => {
  return (


    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Amenities</h2>
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
  );
};

export default Amenities;
