import React from "react";
import PropTypes from "prop-types";
import "../../styles/ProjectCard.css";

const arrayOfLength = function(expectedLength, props, propName, componentName) {
  const arrayPropLength = props[propName].length;
  let err;

  if (arrayPropLength > expectedLength) {
    return (
      (err = new Error(
        `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
      )),
      errorHandler(err)
    );
  }
};

const errorHandler = err => {
  console.error(err);
};

const propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  languages: arrayOfLength.bind(0, 3)
};

const defaultProps = {
  imageURL:
    "https://g.foolcdn.com/editorial/images/494454/resume_gettyimages-587892248.jpg",
  title: "Vsual Resume",
  link: "www.vsualresume.com",
  languages: ["Ruby on Rails", "React JS & Redux", "JWT"]
};

const ProjectCard = props => {
  let { imageURL, title, languages, link } = props;

  let languageToRender = languages.map((language, key = 0) => (
    <li key={key++}>{language}</li>
  ));

  const changeLocation = e => {
    window.location = e.target.name;
  };

  return (
    <div className="skill-card">
      <header className="skill-card__header">
        <img className="skill-card__icon" src={imageURL} alt="Logo" />
      </header>
      <section className="skill-card__body">
        <h2 className="skill-card__title">{title}</h2>
        <span
          name={link}
          className="skill-card__duration"
          onClick={e => changeLocation(e)}
        >
          Learn More
        </span>
        <ul className="skill-card__knowledge">
          {languages.length <= 3 && languageToRender}
        </ul>
      </section>
    </div>
  );
};

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;

export default ProjectCard;
