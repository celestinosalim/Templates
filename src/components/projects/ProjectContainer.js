import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "../../styles/ProjectContainer.css";
import Title from "../Title";

const propTypes = {
  projects: PropTypes.array.isRequired
};

const defaultProps = {
  projects: [
    {
      image:
        "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
      name: "Vsual Resume",
      url: "http://www.vsualresume.com",
      description: ["Ruby on Rails", "React JS & Redux", "JWT"]
    },
    {
      image:
        "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
      name: "Vsual Resume",
      url: "http://www.vsualresume.com",
      description: ["Ruby on Rails", "React JS & Redux", "JWT"]
    },
    {
      image:
        "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
      name: "Vsual Resume",
      url: "http://www.vsualresume.com",
      description: ["Ruby on Rails", "React JS & Redux", "JWT"]
    }
  ]
};

class ProjectContainer extends Component {
  state = {};

  projectsToRender() {
    return this.props.projects.map(
      (project, key = 0) => (
        (
          <ProjectCard
            image={project.image}
            name={project.name}
            url={
              project.url.includes("http")
                ? project.url
                : console.error(
                    new Error(
                      " url property Must be prepended with http:// or https://  "
                    )
                  )
            }
            description={project.description}
            key={key++}
          />
        ),
        console.log(project)
      )
    );
  }

  render() {
    return (
      <div className="container">
        <Title title="Projects" />
        <div className="projects-container">
          <div className="row justify-content-center">
            {this.projectsToRender()}
          </div>
        </div>
      </div>
    );
  }
}

ProjectContainer.propTypes = propTypes;
ProjectContainer.defaultProps = defaultProps;

export default ProjectContainer;
