import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  navLinks: PropTypes.array.isRequired,
  styles: PropTypes.object,
  menu: PropTypes.string.isRequired
};

const defaultProps = {
  navLinks: [
    {
      pathName: "FirstLink",
      pathRef: "/"
    },
    {
      pathName: "SecondLink",
      pathRef: "/second"
    },
    {
      pathName: "ThirdLink",
      pathRef: "/third"
    }
  ],
  styles: {
    back: {
      backgroundColor: "white"
    },
    menuColor: {
      backgroundColor: "",
      color: "black"
    },
    links: {
      color: "black"
    }
  },
  name: "MENU"
};

class NavBar extends Component {
  render() {
    const styles = this.props.styles || {};
    return (
      <div className="container-fluid">
        <nav
          className="navbar bg-transparent navbar-fixed-top"
          style={{
            position: "fixed"
          }}
        >
          <ul data-toggle="collapse">
            <h3
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={styles.menuColor}
            >
              {this.props.name}
            </h3>
            <div className="collapse" id="collapseExample">
              <div>
                <ul className="nav-item active">
                  {this.props.navLinks.map(nav => {
                    return (
                      <a
                        style={styles.links}
                        className="nav-link"
                        href={nav.pathRef}
                      >
                        {nav.pathName}
                      </a>
                    );
                  })}
                </ul>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
