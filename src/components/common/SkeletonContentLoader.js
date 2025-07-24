import React from "react";
import "../../assets/css/LoadingComponents.css";

const SkeletonContentLoader = ({
  type = "text",
  width = "100%",
  height = "20px",
  count = 1,
}) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`skeleton skeleton-${type}`}
      style={{ width, height }}
    ></div>
  ));

  return <div className="skeleton-container">{skeletons}</div>;
};

// Predefined skeleton components for common use cases
export const SkeletonCard = () => (
  <div className="skeleton-card">
    <SkeletonContentLoader type="rect" width="100%" height="120px" />
    <div className="skeleton-card-content">
      <SkeletonContentLoader type="text" width="80%" height="16px" />
      <SkeletonContentLoader type="text" width="60%" height="14px" />
      <SkeletonContentLoader type="text" width="40%" height="12px" />
    </div>
  </div>
);

export const SkeletonStats = () => (
  <div className="skeleton-stats">
    <SkeletonContentLoader type="rect" width="100%" height="80px" count={3} />
  </div>
);

export const SkeletonList = ({ items = 3 }) => (
  <div className="skeleton-list">
    {Array.from({ length: items }, (_, index) => (
      <div key={index} className="skeleton-list-item">
        <SkeletonContentLoader type="circle" width="40px" height="40px" />
        <div className="skeleton-list-content">
          <SkeletonContentLoader type="text" width="70%" height="16px" />
          <SkeletonContentLoader type="text" width="50%" height="14px" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonContentLoader;
