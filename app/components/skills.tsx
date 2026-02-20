import React from "react";
import { SkillCategory } from "@/app/data/skills";

interface SkillsProps {
    skills: SkillCategory[];
}

export default function SkillsList({ skills }: SkillsProps) {
    return (
        <section
            id="skills"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Skills"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                    Skills
                </h2>
            </div>
            <div>
                <div className="flex flex-col gap-6">
                    {skills.map((category, index) => (
                        <div key={index}>
                            <h3 className="mb-2 text-sm font-semibold text-slate-200">
                                {category.title}
                            </h3>
                            <ul className="flex flex-wrap" aria-label={`Skills in ${category.title}`}>
                                {category.skills.map((skill) => (
                                    <li key={skill} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 transition-colors hover:bg-teal-400/20">
                                            {skill}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
