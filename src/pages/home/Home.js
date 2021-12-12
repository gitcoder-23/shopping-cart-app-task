import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
  return (
    <>
      <div className="home-center">
        <div className="container all-cont">
          <h1>Welcome To Our Store</h1>
          <Link to="/category">
            <LazyLoadImage
              className="home-cart"
              src="cart-e.jpeg"
              alt="Welcome To Our Store"
              delayTime={500}
              effect="blur"
            />
            <p>Go To Category</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
