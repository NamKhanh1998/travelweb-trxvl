import "./Footer.scss";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

const Footer = ({ fullwidth }) => {
  return (
    <div className={fullwidth ? "footer-wrapper fullwidth" : "footer-wrapper"}>
      <div className="footer-logo">Trxvl.</div>

      <div className="footer-item-container">
        <div className="footer-item">
          <div className="footer-item-col">
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
          </div>
          <div className="footer-item-col">
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
          </div>
          <div className="footer-item-col">
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
          </div>
          <div className="footer-item-col">
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Seslendirme ve Alt Jazz</p>
          </div>
        </div>

        <div className="footer-item-social">
          <button>Helmet KOD</button>
          <div className="social-icons">
            <AiFillFacebook className="social-icon" />
            <FaInstagramSquare className="social-icon" />
            <AiFillTwitterSquare className="social-icon" />
            <ImYoutube className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
