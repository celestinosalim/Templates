import React from "react";
import PropTypes from "prop-types";
import "../styles/Skills.css";
import Title from "./Title";

const arrayOfLength = function(expectedLength, props, propName, componentName) {
  const arrayPropLength = props[propName].length;
  let err;

  if (arrayPropLength > expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
};

const propTypes = {
  skills: arrayOfLength.bind(0, 14)
};

const defaultProps = {
  skills: [
    "Ruby",
    "Python",
    "Javascript",
    "Ruby on Rails",
    "React",
    "Redux",
    "Django"
  ]
};

const skillsToRender = skills => {
  return skills.map((skill, key) => (
    <div className="box" key={key++}>
      <div className="boxContent">
        <ul className="title">{skill}</ul>
      </div>
    </div>
  ));
};

const Skills = props => {
  let { skills } = props;

  return (
    <div className="container justify-content-center">
      <Title title="Skills" />
      <ul className="skillsContainer">{skillsToRender(skills)}</ul>;
    </div>
  );
};

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;

export default Skills;
