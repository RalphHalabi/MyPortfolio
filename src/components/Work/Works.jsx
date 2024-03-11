import React from "react";
import { ProjectsData, ProjectsNav } from "./Data";

const Works = () => {
  return (
    <div className="work__filters">
      {ProjectsNav.map((item, index) => {
        return <span className="work__item">{item}</span>;
      })}
    </div>
  );
};

export default Works;
