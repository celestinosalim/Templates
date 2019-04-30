import React, { Component } from "react";
import Circle from "./Circle";
import PropTypes from "prop-types";
import "../../styles/Intro.css";

const propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

const defaultProps = {
  name: "Your Name",
  profession: "Full Stack Web Developer",
  link: "homeLink"
};

class Intro extends Component {
  state = {
    mouse: { x: null, y: null }
  };

  componentDidMount() {
    this.animation();
  }

  animation = () => {
    const canvas = this.refs.canvas;
    canvas.width = this.refs.container.clientWidth;
    canvas.height = this.refs.container.clientHeight;

    window.addEventListener("resize", () => {
      canvas.width = this.refs.container.clientWidth;
      canvas.height = this.refs.container.clientHeight;
    });

    const c = canvas.getContext("2d");

    let circleArray = [];

    for (let i = 0; i < 800; i++) {
      let radius = Math.random() * 0 + 1;
      let x = Math.random() * (canvas.width - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * 2;
      let y = Math.random() * (canvas.height - radius * 2) + radius;
      let dy = (Math.random() - 0.5) * 2;

      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    const animate = () => {
      let maxRadius = 3;
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      for (let circle of circleArray) {
        circle.update(c, canvas);
        if (
          this.state.mouse.x - circle.x < 50 &&
          this.state.mouse.x - circle.x > -50 &&
          this.state.mouse.y - circle.y < 50 &&
          this.state.mouse.y - circle.y > -50
        ) {
          if (circle.radius < maxRadius) {
            circle.radius += 1;
          }
        } else if (circle.radius > circle.minRadius) {
          circle.radius -= 1;
        }
      }
    };

    animate();
  };

  eventHandler = e => {
    this.setState({
      mouse: {
        x: e.clientX,
        y: e.clientY
      }
    });
  };

  render() {
    return (
      <div className="container-fluid" ref="div">
        <div className="row" ref="container">
          <div className="canvasdiv" onMouseDown={e => this.eventHandler(e)}>
            <canvas ref="canvas" className="canvas" />
            <div className="canvas-text">
              <p style={{ textAlign: "center" }}>
                <span id="name">
                  <a href={this.props.link}>
                    <span>{this.props.name}</span>
                  </a>
                  <br />
                  <span>{this.props.profession}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Intro.propTypes = propTypes;
Intro.defaultProps = defaultProps;

export default Intro;
