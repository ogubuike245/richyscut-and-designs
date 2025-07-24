import React from "react";
import "../../assets/css/LoadingComponents.css";

const LoadingSpinnerIndicator = ({
  size = "medium",
  color = "primary",
  text = "",
}) => {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <div className={`loading-spinner ${color}`}></div>
      {text && <span className="loading-text">{text}</span>}
    </div>
  );
};

export default LoadingSpinnerIndicator;
