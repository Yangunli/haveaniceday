import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ref">
        <div className="footer-logo">HAVE A NICE DAY</div>
        <div className="footer-link">
          <div className="footer-a">
            <Link
              className="link"
              to="/haveaniceday/taipei"
              onClick={() => window.scroll(0, 0)}
            >
              Taipei
            </Link>
          </div>
          <div className="footer-a">
            <Link
              className="link"
              to="/haveaniceday/keelung"
              onClick={() => window.scroll(0, 0)}
            >
              Keelung
            </Link>
          </div>
          <div className="footer-a">
            <Link
              className="link"
              to="/haveaniceday/kaohsiung"
              onClick={() => window.scroll(0, 0)}
            >
              Kaohsiung
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
