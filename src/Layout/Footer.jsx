import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-dark text-center p-5" style={{ backgroundColor: '#ADEE92', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', marginTop: '50px' }}>
      <div className="container">
        {/* Social Media Buttons */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-2 mb-2">
            <a href="https://web.facebook.com/" className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://wa.me/01641" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://www.youtube.com/" className="btn btn-danger w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
          </div>
        </div>

        {/* Brand Title */}
        <div className="mt-4">
          <h1 className="fw-bold" style={{ fontSize: '2.8rem', color: '#2E7D32', fontFamily: 'cursive' }}>স্মার্ট ভালুকা </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
