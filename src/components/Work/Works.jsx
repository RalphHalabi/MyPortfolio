import React from "react";
import { ProjectsData, ProjectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  return (
    <div>
      <div className="work__filters">
      {ProjectsNav.map((item, index) => {
        return (
        <span className="work__item" key={index}>{item.name}</span>
        )
      })}
    </div>

    <div className="work__container container grid">
      {ProjectsData.map((item) => {
        return <WorkItems />
      })}
    </div>
    </div>
  );
};

export default Works;
