import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Education from "./components/education";
import Footer from "./components/footer";
import Writings from "./components/writings";
import ScrollSpy from "./components/scroll-spy";
import { experiences, projects, skills, education } from "@/app/data";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <ScrollSpy />
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Skills skills={skills} />
          <Experiences experiences={experiences} />
          <Education education={education} />
          <Projects projects={projects} />
          <Writings posts={posts} />
          <Footer />
        </main>
        <div>
        </div>
      </div>
    </div>
  );
}
