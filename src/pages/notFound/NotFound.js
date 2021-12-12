import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound-inner">
      <div className="container all-cont">
        <div className="row">
          <span style={{ textAlign: 'center' }}>
            404 Not Found! <Link to="/">Go Home</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
