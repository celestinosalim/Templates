import React from "react";
import "../styles/Title.css";

const Title = props => {
  let { title } = props;
  return (
    <div className="container flex justify-content-center">
      <div className="section-title justify-content-center">
        <h1>{title}</h1>
      </div>
      <div className="bar" />
    </div>
  );
};

export default Title;
