import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "../../styles/ProjectContainer.css";

const arrayOfLength = function(expectedLength, props, propName, componentName) {
  const arrayPropLength = props[propName].length;
  let err;

  if (arrayPropLength > expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
};

const cleanString = (props, propName, componentName) => {
  componentName = componentName || "ANONYMOUS";
  if (props) {
    let value = props[propName];
    if (typeof value === "string") {
      return value.includes("http")
        ? null
        : new Error(
            propName +
              " in " +
              componentName +
              " Must be prepended with http:// or https://  "
          );
    }
  }
  return null;
};

const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        imageURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        link: cleanString,
        languages: arrayOfLength.bind(0, 3)
      })
    )
  )
};

const defaultProps = {
  projects: [
    {
      imageURL:
        "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
      title: "Vsual Resume",
      link: "http://www.vsualresume.com",
      languages: ["Ruby on Rails", "React JS & Redux", "JWT"]
    },
    {
      imageURL:
        "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
      title: "Vsual Resume",
      link: "http://www.vsualresume.com",
      languages: ["Ruby on Rails", "React JS & Redux", "JWT"]
    },
    {
      imageURL:
        "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
      title: "Vsual Resume",
      link: "http://www.vsualresume.com",
      languages: ["Ruby on Rails", "React JS & Redux", "JWT"]
    }
  ]
};

class ProjectContainer extends Component {
  state = {};

  projectsToRender() {
    return this.props.projects.map((project, key = 0) => (
      <ProjectCard
        imageURL={project.imageURL}
        title={project.title}
        link={project.link}
        languages={project.languages}
        key={key++}
      />
    ));
  }

  render() {
    return (
      <div className="container projects-container">
        <div className="row project-title justify-content-center">
          <span>Projects</span>
        </div>
        <br />
        <div className="row justify-content-center">
          {this.projectsToRender()}
        </div>
      </div>
    );
  }
}

ProjectContainer.propTypes = propTypes;
ProjectContainer.defaultProps = defaultProps;

export default ProjectContainer;
