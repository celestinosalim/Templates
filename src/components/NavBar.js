import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav class="navbar bg-transparent navbar-fixed-top">
          <ul data-toggle="collapse">
            <h1
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              MENU
            </h1>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                <ul class="nav-item active">
                  {this.props.navLinks.map(nav => {
                    return (
                      <a class="nav-link" href={nav.pathRef}>
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

NavBar.defaultProps = {
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
  ]
};

export default NavBar;
