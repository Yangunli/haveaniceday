import { Link } from "react-router-dom";
import logo from "../assets/Journey-bro.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={logo} alt="" className="homeImg" />
      </div>
      <div className="home-link-container">
        <div className="home-link">
          <Link
            className="link"
            to="/haveaniceday/taipei"
            onClick={() => window.scroll(0, 0)}
          >
            Taipei
          </Link>
        </div>
        <div className="home-link">
          <Link
            className="link"
            to="/haveaniceday/keelung"
            onClick={() => window.scroll(0, 0)}
          >
            Keelung
          </Link>
        </div>

        <div className="home-link">
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
  );
};

export default Home;
