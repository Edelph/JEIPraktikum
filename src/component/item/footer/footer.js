import React from "react";
import "./footer.css";
import {
  AiOutlineTwitter as TwitterIcon,
  AiOutlineFacebook as FacebookIcon,
  AiOutlineGoogle as GoogleIcon,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer_container">
        <div className="footer_content">
          <h4>About us</h4>
          <ul>
            <li>service</li>
            <li>guide</li>
            <li>offre</li>
          </ul>
        </div>

        <div className="col footer_content">
          <h4>Nous soutenir</h4>
          <ul>
            <li>faire un don</li>
            <li>conseil</li>
            <li>...</li>
          </ul>
        </div>

        <div className="col footer_content">
          <h4>contact</h4>
          <ul className="contact_list">
            <li>
              <TwitterIcon size={25} />
            </li>
            <li>
              <FacebookIcon size={25} />
            </li>
            <li>
              <GoogleIcon size={25} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
