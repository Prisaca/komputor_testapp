import React from "react";
import ProjectHeader from "./Header";
import ProjectOverview from "./Overview";

const ProjectMenu = () => {
  return (
    <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
      <ProjectHeader />
      <ProjectOverview />
    </aside>
  );
};

export default ProjectMenu;
