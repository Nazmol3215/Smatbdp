import React, { useState } from "react";
import picturee2 from "../Images/poperty.png";





const PhotosGrid = ({ photos }) => {
  const [visiblePhotos, setVisiblePhotos] = useState(6);

  const showMorePhotos = () => {
    setVisiblePhotos((prevCount) => prevCount + 6);
  };

  return (
    <div style={styles.photosGrid}>
      <div style={styles.gridContainer}>
        {photos.slice(0, visiblePhotos).map((photo, index) => (
          <div key={index} style={styles.photoItem}>
            <img src={photo} alt={`Photo ${index + 1}`} style={styles.photo} />
          </div>
        ))}
      </div>
      {visiblePhotos < photos.length && (
        <button style={styles.showMoreBtn} onClick={showMorePhotos}>
          See All Photos
        </button>
      )}
    </div>
  );
};

const styles = {
  photosGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "15px",
  },
  photoItem: {},
  photo: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  showMoreBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function Phot() {
  const photos = [
    picturee2,
    picturee2,
    picturee2,
    picturee2,
    picturee2,
    picturee2,
    picturee2,
    picturee2,
    picturee2,
    picturee2,
    picturee2,
  ];

  return (
    <div className="Photos">
      <h1>Photos</h1>
      <PhotosGrid photos={photos} />
    </div>
  );
}

export default Phot;
