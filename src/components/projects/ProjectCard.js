import React from "react";
import PropTypes from "prop-types";
import "../../styles/ProjectCard.css";

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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: cleanString,
  description: arrayOfLength.bind(0, 3)
};

const defaultProps = {
  image:
    "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
  name: "Vsual Resume",
  url: "http://www.vsualresume.com",
  description: ["Ruby on Rails", "React JS & Redux", "JWT"]
};

const ProjectCard = props => {
  let { image, name, description, url } = props;

  let languageToRender = description.map((language, key = 0) => (
    <li key={key++}>{language}</li>
  ));

  return (
    <div className="skill-card">
      <header className="skill-card__header">
        <img className="skill-card__icon" src={image} alt="Logo" />
      </header>
      <section className="skill-card__body">
        <h2 className="skill-card__title">{name}</h2>
        <span className="skill-card__duration">
          <a href={url}>Learn More</a>
        </span>
        <ul className="skill-card__knowledge">
          {description.length <= 3 && languageToRender}
        </ul>
      </section>
    </div>
  );
};

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;

export default ProjectCard;
