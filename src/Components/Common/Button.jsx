import React from 'react';
import { useNavigate } from 'react-router';



export default function Button() {
    const navigate = useNavigate();
  return (
    <div>
        <button className="btn btn-primary" onClick={() => navigate("/PropertyLocationMap")}>View in map</button>
    </div>
  )
}
