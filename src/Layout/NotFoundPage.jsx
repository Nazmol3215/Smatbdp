import React from 'react';

const NotFoundPage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f9',
      color: '#333',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    message: {
      fontSize: '1.5rem',
      marginBottom: '.9rem',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    }
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - পৃষ্ঠা পাওয়া যায়নি</h1>
      <p style={styles.message}>দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা খুঁজে পাওয়া যায়নি।</p>
      <a
        href="/"
        style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        হোম পেজে ফিরে যান
      </a>
    </div>
  );
};

export default NotFoundPage;
