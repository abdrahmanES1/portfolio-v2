import React from "react";
import Experience from "./experience";

interface ExperiencesProps {
  experiences: Experience[];
}

function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-5 w-screen    px-6 py-5 backdrop-blur md:-mx-12 md:px-12    lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200   ">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full
              <span className="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
