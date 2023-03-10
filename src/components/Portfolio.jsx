import React from "react";

import { useProject } from "../contexts/ProjectContext";
import ProjectCard from "./ProjectCard";
import SectionLayout from "./SectionLayout";

function Portfolio() {
  const { projects } = useProject();

  return (
    <section id="projects" className="py-20">
      <SectionLayout title="Projects">
        <p className="max-w-5xl text-md">
          Explore my frontend projects - responsive and user friendly websites
          built with modern frontend technologies like React and Tailwind CSS.
          Each project includes a brief description and a link to the live
          version or source code on GitHub.
        </p>

        <div className="projects mt-12 grid gap-8 md:grid-cols-2">
          {projects?.map((project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}

export default Portfolio;
