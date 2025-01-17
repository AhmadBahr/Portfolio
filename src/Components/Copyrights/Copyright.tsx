import React from "react";
import "./Copyright.css";

const Copyright = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="copyright-container">
      <span className="ahmad">Ahmad </span>
      <span className="bahr">Bahr</span>
      <span className="year">- {currentYear}</span>
      <span className="rights"> &copy; All rights reserved</span>
    </div>
  );
};

export default Copyright;
