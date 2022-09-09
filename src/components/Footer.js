import twitter from "../assets/Twitter.svg";
import linkedin from "../assets/LinkedIn.svg";
import github from "../assets/Octocat.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ref">
        <div className="footer-c">2022 © Yangunli</div>
        <div className="footer-icons">
          <a href="https://twitter.com/yanyangirl_tw">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/wei-yi-li-898baa234/">
            <img src={linkedin} alt="" />
          </a>

          <a href="https://github.com/Yangunli">
            <img src={github} alt="" />
          </a>
        </div>
        <div className="footer-link">
          <div className="footer-a">
            <small>
              Illustrations by
              <a href="https://storyset.com/people"> Storyset </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
