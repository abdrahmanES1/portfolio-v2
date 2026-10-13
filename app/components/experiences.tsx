"use client";
import React, { useState, useMemo } from "react";
import ExperienceCard from "./experienceCard";
import { ProjectFilterCategory } from "@/constants";
import type { Experience } from "@/types";
import CategorySelector from "./category-selector";

interface ExperiencesProps {
  experiences: Experience[];
}

function Experiences({ experiences }: ExperiencesProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilterCategory>("All");

  const counts = useMemo(() => {
    return {
      All: experiences.length,
      Data_Science: experiences.filter((e) => e.category === "Data_Science").length,
      Software: experiences.filter((e) => e.category === "Software").length,
    };
  }, [experiences]);

  const hasMultipleCategories =
    counts.Data_Science > 0 && counts.Software > 0;

  const filteredExperiences = useMemo(() => {
    if (selectedCategory === "All") return experiences;
    return experiences.filter((exp) => exp.category === selectedCategory);
  }, [experiences, selectedCategory]);

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-5 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
        {hasMultipleCategories && (
          <CategorySelector
            getCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            counts={counts}
          />
        )}
      </div>
      <div>
        <ol className="group/list">
          {filteredExperiences.length === 0 ? (
            <p className="py-6 text-sm text-slate-400">
              No experiences to display.
            </p>
          ) : (
            filteredExperiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))
          )}
        </ol>
        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
          <a
            className="group/link inline-flex items-baseline text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="/resume-SWE.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Software Engineering Résumé (opens in a new tab)"
          >
            <span>Software Engineering Résumé</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <a
            className="group/link inline-flex items-baseline text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="/resume-Data_Science.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Data Science & AI Résumé (opens in a new tab)"
          >
            <span>Data Science &amp; AI Résumé</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
