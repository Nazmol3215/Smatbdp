import React, { useRef } from 'react';
import pidofg from "../Images/poperty1.png";
import Phot from './PhotosGrid';
import AboutUs from './AboutUs';

const Profile = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const reviewsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const profileContainerStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
  };

  const profileHeaderStyle = {
    position: 'relative',
    textAlign: 'center',
  };

  const profileCoverStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const profileInfoStyle = {
    position: 'relative',
    marginTop: '-50px',
  };

  const profileAvatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '3px solid white',
  };

  const profileNavStyle = {
    listStyletype : 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    border: '1px solid green',
    color: 'black',
    opacity: '0.8',
    padding: '10px',
  };

  const profileNavItemStyle = {
    display: 'inline-block',
  };

  const profileNavLinkStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={profileContainerStyle}>
      {/* Profile Header */}
      <div style={profileHeaderStyle}>
        <img
          style={profileCoverStyle}
          src={pidofg}
          alt="Cover Photo"
        />
        <div style={profileInfoStyle}>
          <img
            style={profileAvatarStyle}
            src={pidofg}
            alt="Profile Avatar"
          />
          <h2>Afrin's Cake & Pizza Shop</h2>
          <p>4.9K followers • 915 following</p>
          <p>This page for Home Made cake, Have Fresh cake, Trusted page�</p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul style={profileNavStyle}>
          <li style={profileNavItemStyle}>
            <span
              onClick={() => scrollToSection(aboutRef)}
              style={profileNavLinkStyle}
            >
              আমাদের সম্পর্কে
            </span>
          </li>
          <li style={profileNavItemStyle}>
            <span
              onClick={() => scrollToSection(productsRef)}
              style={profileNavLinkStyle}
            >
              প্রডাক্টসমূহ
            </span>
          </li>
          <li style={profileNavItemStyle}>
            <span
              onClick={() => scrollToSection(reviewsRef)}
              style={profileNavLinkStyle}
            >
              রিভিউসমূহ
            </span>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div ref={aboutRef} style={{ margin: '50px 0' }}>
        <h2>আমাদের সম্পর্কে</h2>
<AboutUs/>
      </div>

      <div ref={productsRef} style={{ margin: '50px 0' }}>
        <h2>প্রডাক্টসমূহ</h2>
          <Phot/>
      </div>

      
      <div ref={reviewsRef} style={{ margin: '50px 0' }}>
        <h2>রিভিউসমূহ</h2>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
        <p>এখানে আমাদের রিভিউগুলো থাকবে।</p>
      </div>
    </div>
  );
};

export default Profile;
