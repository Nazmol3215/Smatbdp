import "./TrendingAndRecommended.css";
import React from "react";
import { useNavigate } from "react-router";
import picture1 from "../Images/poperty1.png";
import picture2 from "../Images/poperty.png";
import picture3 from "../Images/poperty.png";
import picture4 from "../Images/poperty.png";
import picture5 from "../Images/poperty.png";
import picture6 from "../Images/poperty.png";
import picture7 from "../Images/poperty.png";
import picture8 from "../Images/poperty.png";
import picture9 from "../Images/poperty.png";
import picture10 from "../Images/poperty.png";
import picture11 from "../Images/poperty.png";
import picture12 from "../Images/poperty.png";







const One = () => {
  const navigate = useNavigate();



  return (
    <div className="product-sections">
      {/* Trending Products */}
      <div className="section">
        <h2>Trending Products</h2>
        <div className="product-slider">
          <div className="product-card"  >
            <img
              src={picture1}
              alt="Wireless Earbuds"
              className="product-image"
            />
            <div className="hover-buttons">
            <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>

            </div>
            <div className="product-info">
              <h4>Wireless Earbuds</h4>

              <p>$50</p>
            </div>
          </div>
          <div className="product-card" >
            <img
              src={picture2}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture3}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>

            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture8}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture4}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture4}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture5}
              alt="Smartwatch"
              className="product-image"
            />
           <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture6}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture7}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture8}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button>Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture9}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture10}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture11}
              alt="Smartwatch"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={picture12}
              alt="Gaming Headset"
              className="product-image"
            />
            <div className="hover-buttons">
              <button onClick={() => navigate("/Profile")}>View Details</button>
          <button >Buy Now</button>
            </div>
            <div className="product-info">
              <h4>Gaming Headset</h4>
              <p>$80</p>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default One;