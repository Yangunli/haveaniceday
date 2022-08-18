import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">HAVE A NICE DAY</div>
      <nav className="nav">
        <div>
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="link" to="/faq">
            FAQ
          </Link>
        </div>

        <div>
          <Link className="link" to="/tour">
            Tour
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
