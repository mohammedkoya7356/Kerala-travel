
import React from "react";
import { Link } from "react-router-dom";
import "./SuccessMessage.css";

const SuccessMessage = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <h2>Message Sent Successfully!</h2>
        <p>Thank you for reaching out. We'll get back to you shortly.</p>
        <Link to="/home" className="back-home-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
