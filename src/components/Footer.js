import React from "react";
import "../styles/Footer.css";

const Footer = props => {
  return (
    <div className="footer-margin">
      <footer className=".card-footer">
        <div className="container footer-container justify-content-center">
          <div>
            <div className="wrapper">
              <ul>
                <li className="facebook">
                  <a href="https://www.facebook.com/celestino.salim">
                    <i className="fa fa-facebook fa-2x" aria-hidden="true" />
                  </a>
                </li>

                <li className="twitter">
                  <a href="https://twitter.com/celestinosalim">
                    <i className="fa fa-twitter fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/alexsalim1/">
                    <i className="fa fa-instagram fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li className="google">
                  <i className="fa fa-google fa-2x" aria-hidden="true" />
                </li>
                <li className="whatsapp">
                  <i className="fa fa-whatsapp fa-2x" aria-hidden="true" />
                </li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop: "135px" }}>
            <h4>Created by Celestino Salim using VsualResume ©2019</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
