// React Component Example
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BloodBankProfile = ({ id }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/bloodBank/getBloodBank/${id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };
    fetchProfile();
  }, [id]);

  return (
    <div>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>Phone: {profile.phone}</p>
          <p>Email: {profile.email}</p>
          <p>Last Donation Date: {new Date(profile.lastDonationDate).toLocaleDateString()}</p>
          <p>
            {new Date(profile.lastDonationDate) > new Date() - 90 * 24 * 60 * 60 * 1000
              ? 'Eligible for donation'
              : 'Not eligible for donation'}
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default BloodBankProfile;
