import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Web Elite</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          {/* <li>
                        <a href="#testmonials" className="footer__link"></a>
                    </li> */}
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/ralph_halabi?igsh=MTJ0djMxOWUxeHUyMg%3D%3D&utm_source=qr"
            className="footer__social-link"
            target={"ig"}
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ralph-halabi-063998261"
            className="footer__social-link"
            target={"linkedin"}
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/RalphHalabi"
            className="footer__social-link"
            target={"github"}
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
        &#169; WebElite. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
