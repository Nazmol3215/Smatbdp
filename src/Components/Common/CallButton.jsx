import React from 'react';

const CallButton = () => {
  const phoneNumber = '+8801234567890'; // এখানে আপনার ফোন নম্বর দিন

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button onClick={handleCallClick} style={styles.button}>
      Call Now
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 4px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default CallButton;
