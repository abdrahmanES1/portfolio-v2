// "use client";
import { lazy, useEffect } from "react";
import Header from "./components/header";
import About from "./components/about";
const Experiences = lazy(() => import("./components/experiences"));
const Projects = lazy(() => import("./components/projects"));
const Footer = lazy(() => import("./components/footer"));
import { experiences } from "@/app/data/experiences";
import { projects } from "@/app/data/projects";
export default function Home() {
  // useEffect(() => {
  //   const navLinks = document.querySelectorAll("nav ul li a");

  //   // Function to highlight the active link
  //   function highlightNavLink() {
  //     // Get current scroll position
  //     const scrollPosition = window.scrollY;

  //     // Loop through each section
  //     document.querySelectorAll("section").forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.clientHeight;

  //       // Check if the current scroll position is within this section
  //       if (
  //         scrollPosition >= sectionTop &&
  //         scrollPosition < sectionTop + sectionHeight
  //       ) {
  //         // Remove 'active' class from all links
  //         navLinks.forEach((link) => {
  //           link.classList.remove("active");
  //         });

  //         // Add 'active' class to the corresponding link
  //         const correspondingLink = document.querySelector(
  //           `nav ul li a[href="#${section.id}"]`
  //         );
  //         if (correspondingLink) {
  //           correspondingLink.classList.add("active");
  //         }
  //       }
  //     });
  //   }

  //   // Attach scroll event listener
  //   window.addEventListener("scroll", highlightNavLink);
  //   return () => {
  //     window.removeEventListener("scroll", highlightNavLink);
  //   };
  // }, []);
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
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
          <Experiences experiences={experiences} />
          <Projects projects={projects} />
          <Footer />
        </main>
        <div>
          {/* <button
            className="hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R4l6:"
            data-state="closed"
          >
            <span className="sr-only">Click to time travel</span>
            <Image
              src="/next.svg"
              alt="Spotify Profile app homepage"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{ color: "transparent" }}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}
