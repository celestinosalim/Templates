import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/SideBar.css";
import { Link } from "react-scroll";

const propTypes = {
  navLinks: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  linkColor: PropTypes.string.isRequired
};

const defaultProps = {
  navLinks: [
    {
      pathName: "Link1",
      pathRef: "/first"
    },
    {
      pathName: "Link2",
      pathRef: "/second"
    },
    {
      pathName: "Link3",
      pathRef: "/third"
    }
  ],
  name: "MENU",
  color: "black",
  linkColor: "black"
};

class SideBar extends Component {
  render() {
    return (
      <div className="sidenav">
        <div
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <p style={{ color: this.props.color }}>{this.props.name}</p>
        </div>
        <div className="collapse" id="collapseExample">
          {this.props.navLinks.map(nav => {
            return (
              <Link
                activeClass="active"
                to={nav.pathRef}
                key={nav.pathRef}
                style={{ color: this.props.linkColor }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {nav.pathName}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
