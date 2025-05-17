import React from 'react';
import jhkufvdsx from '../Images/i.png';

const ProfileImage = () => {
  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  };

  return <img src={jhkufvdsx} alt="Profile" style={imageStyle} />;
};

const ProfileDetails = ({ name, mobile, email, location }) => {
  const headingStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '1em',
    color: '#666',
    marginBottom: '8px',
  };

  return (
    <>
      <div style={headingStyle}>{name}</div>
      <div style={textStyle}>Mobile: {mobile}</div>
      <div style={textStyle}>Location: {location}</div>
      <div style={textStyle}>Email: {email}</div>
    </>
  );
};

const ProfileCard = ({ name, mobile, email, location }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    margin: '10px',
  };

  return (
    <div style={cardStyle}>
      <ProfileImage />
      <ProfileDetails name={name} mobile={mobile} location={location} email={email}  />
    </div>
  );
}; 

const Fire_service = () => {
  const profiles = [
    { name: 'এম্বুলেন্স', mobile: '01758-845430', email: 'john.doe3@example.com', location: 'লাশবাহী ফ্রিজিং গাড়ি' },
    // আপনি এখানে নাম এবং মোবাইল নাম্বারগুলো যোগ করতে পারবেন।
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          mobile={profile.mobile}
          location={profile.location}
          email={profile.email}
        />
      ))}
    </div>
  );
};

export default Fire_service;
