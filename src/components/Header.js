import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link
        className="logo link "
        to="/haveaniceday/"
        onClick={() => window.scroll(0, 0)}
      >
        HAVE A NICE DAY
      </Link>
      <nav className="nav">
        <div className="header-link">
          <Link
            className="link"
            to="/haveaniceday/kaohsiung"
            onClick={() => window.scroll(0, 0)}
          >
            Kaohsiung
          </Link>
        </div>
        <div className="header-link">
          <Link
            className="link "
            to="/haveaniceday/taipei"
            onClick={() => window.scroll(0, 0)}
          >
            Taipei
          </Link>
        </div>
        <div className="header-link">
          <Link
            className="link "
            to="/haveaniceday/keelung"
            onClick={() => window.scroll(0, 0)}
          >
            Keelung
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
