import React from "react";
import "../styles/Footer.css";

const propTypes = {
  media: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

const defaultProps = {
  name: "Celestino Salim",
  media: [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/celestinosalim/"
    },

    {
      name: "github",
      link: "https://github.com/celestinosalim"
    },
    {
      name: "email",
      link: "mailto:celestino.salim@gmail.com"
    },

    {
      name: "google",
      link: "mailto:celestino.salim@gmail.com"
    }
  ]
};

const socialMedia = media => {
  return media.map((social, key) => {
    return (
      <li className={social.name} key={key++}>
        <a href={social.link}>
          {social.name === "email" ? (
            <i className={`fa fa-envelope fa-2x`} aria-hidden="true" />
          ) : (
            <i className={`fa fa-${social.name} fa-2x`} aria-hidden="true" />
          )}
        </a>
      </li>
    );
  });
};

const Footer = props => {
  let { media, name } = props;
  return (
    <div className="footer-margin">
      <div className="footer-container justify-content-center">
        <div className="row justify-content-center" id="footer-icon">
          <div className="wrapper">
            <ul>{socialMedia(media)}</ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <span id="footer-text">
          Created by {name} using{" "}
          <span gitstyle={{ color: "#056cf2" }}>VsualResume ©2019</span>
        </span>
      </div>
    </div>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
