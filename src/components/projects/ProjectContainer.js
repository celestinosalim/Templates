import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "../../styles/ProjectContainer.css";

const propTypes = {
  projects: PropTypes.array.isRequired
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
        link={
          project.link.includes("http")
            ? project.link
            : console.error(
                new Error(
                  " link property Must be prepended with http:// or https://  "
                )
              )
        }
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
