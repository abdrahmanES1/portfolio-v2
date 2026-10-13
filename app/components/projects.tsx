"use client";
import React, { useState, useMemo } from "react";
import { Project } from "@/types";
import ProjectCard from "./project-card";
import { ProjectFilterCategory } from "@/constants";
import CategorySelector from "./category-selector";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilterCategory>("All");

  const counts = useMemo(() => {
    return {
      All: projects.length,
      Data_Science: projects.filter((p) => p.category === "Data_Science").length,
      Software: projects.filter((p) => p.category === "Software").length,
    };
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((pro) => pro.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
        <CategorySelector
          getCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          counts={counts}
        />
      </div>
      <div>
        <ol className="group/list">
          {filteredProjects.length === 0 ? (
            <p className="py-6 text-sm text-slate-400">
              No projects to display in this category.
            </p>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          )}
        </ol>
      </div>
    </section>
  );
}

export default Projects;
