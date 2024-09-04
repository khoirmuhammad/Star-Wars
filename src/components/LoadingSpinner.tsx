
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
      </div>
    </div>
  );
};

export default LoadingSpinner;