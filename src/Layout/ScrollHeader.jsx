import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HorizontalScrollMenu = () => {
  const liStyle = {
    border: "2px solid #007bff", // সুন্দর নীল রঙের বর্ডার
    borderRadius: "8px", // কোণগুলোকে গোল করা
    padding: "10px 20px", // আরও আরামদায়ক প্যাডিং
    marginRight: "15px", // প্রতিটি আইটেমের মাঝে পর্যাপ্ত স্পেস
    backgroundColor: "#f8f9fa", // হালকা গ্রে ব্যাকগ্রাউন্ড
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // সুন্দর বক্স শ্যাডো
    transition: "transform 0.3s ease", // হোভার করলে সুন্দর ট্রান্সফর্ম
  };

  const liHoverStyle = {
    transform: "scale(1.05)", // হোভার করলে একটু বড় দেখাবে
  };


  return (
    <div className="container-fluid">
      <div className="d-flex overflow-auto">
        <ul className="list-unstyled d-flex mb-0">
          

          <li style={liStyle} className="hover-effect">
            <Link to="/block-f">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-d">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-g">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-c">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-i">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-a">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-b">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-j">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-h">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-e">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-e">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-e">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-e">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-e">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-e">Block </Link>
          </li>
          <li style={liStyle} className="hover-effect">
            <Link to="/block-e">Block </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default HorizontalScrollMenu;
