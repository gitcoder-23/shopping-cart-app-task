import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './carticon.css';

const CartIcon = (props) => {
  const [counted, setCounted] = useState(props.count);
  const getCount = JSON.parse(localStorage.getItem('cartcount'));
  // setCounted

  return (
    <Link to="/cart" className="link">
      {counted}
      <span className="text">
        🛒Cart
        {/* {props.count > 0 ? props.count : 'Cart'} */}
      </span>
    </Link>
  );
};

export default CartIcon;
