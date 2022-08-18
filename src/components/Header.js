import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">HAVE A NICE DAY</div>
      <nav className="nav">
        <div>
          <Link className="link" to="/haveaniceday/">
            Home
          </Link>
        </div>
        <div>
          <Link className="link" to="/haveaniceday/faq">
            FAQ
          </Link>
        </div>

        <div>
          <Link className="link" to="/haveaniceday/tour">
            Tour
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
