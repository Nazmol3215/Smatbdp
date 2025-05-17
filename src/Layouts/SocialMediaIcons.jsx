import React from "react";

const SocialMediaIcons = () => {
  const iconStyle = {
    position: "fixed",
    top: "77%",
    right: "19px",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    zindex: "1000"
  };

  const handleMessengerClick = () => {
    window.open("https://m.me/yourFacebookPage", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/yourPhoneNumber", "_blank");
  };

  return (
    <div style={iconStyle}>
      <div onClick={handleMessengerClick} style={{ cursor: "pointer" }}>
        <img
          src="https://img.icons8.com/color/48/000000/facebook-messenger--v1.png"
          alt="Messenger"
        />
      </div>
      <div onClick={handleWhatsAppClick} style={{ cursor: "pointer" }}>
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;