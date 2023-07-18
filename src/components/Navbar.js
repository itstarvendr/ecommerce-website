import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.length);

  return (
    <nav>
      <div className="logo">
        <Link to="/">Ecommerce Website</Link>
      </div>
      <ul>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItemsCount})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
