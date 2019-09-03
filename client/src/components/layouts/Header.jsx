import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">HOME</Link>
      <div>|</div>
      <Link to="/login">LOGIN</Link>
    </div>
  );
};

export default Header;