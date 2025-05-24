import React, { useEffect, useState } from 'react';

const CattleList = () => {
  const [cattles, setCattles] = useState([]);

  useEffect(() => {
    fetch('https://bdback-5ofz.onrender.com/api/cattle')
      .then(res => res.json())
      .then(data => setCattles(data));
  }, []);

  return (
    <div>
      <h2>গরুর তালিকা</h2>
      {cattles.map((cow) => (
        <div key={cow._id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <img src={cow.imageLink} alt={cow.imageName} width="200" />
          <h4>{cow.imageName}</h4>
          <p>{cow.message}</p>
          <a href={`tel:${cow.phone}`}>📞 {cow.phone}</a>
        </div>
      ))}
    </div>
  );
};

export default CattleList;
