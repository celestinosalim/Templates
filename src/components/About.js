import React, { Component } from "react";
import "../styles/About.css";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const defaultProps = {
  name: "Anonymous Name",
  imageURL:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDKzB0PCK5FMOwzf0rwE97xlRUhgOQsg4l0nwLkyK4NYXzQJ_",
  description: `It is a long established fact that a reader will be distracted
  by the readable content of a page when looking at its layout.
  The point of using Lorem Ipsum is that it has a more-or-less
  normal distribution of letters, as opposed to using 'Content
  here, content here', making it look like readable English. Many
  desktop publishing packages and web page editors now use Lorem
  Ipsum as their default model text, and a search for 'lorem
  ipsum' will uncover many web sites still in their infancy.
  Various versions have evolved over the years, sometimes by
  accident, sometimes on purpose (injected humour and the like).`
};

class About extends Component {
  render() {
    return (
      <div className="container about-container">
        <div className="row first-row">
          <div className="col">
            <div className="title">
              <span>About</span>
            </div>
          </div>
        </div>
        <div className="row second-row">
          <div className="col-md-6 col-sm-12 image-col justify-content-end">
            <img
              alt="About Image"
              className="my-card"
              src={this.props.imageURL}
            />
            <div className="glow-wrap">
              <i className="glow" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-col">
            <span>{this.props.name}</span>
            <p>____</p>

            <div className="text-col-content">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
