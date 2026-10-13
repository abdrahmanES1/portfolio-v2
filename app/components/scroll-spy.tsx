"use client";

import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li a");

    function highlightNavLink() {
      const scrollPosition = window.scrollY;

      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          const correspondingLink = document.querySelector(
            `nav ul li a[href="#${section.id}"]`
          );
          if (correspondingLink) {
            correspondingLink.classList.add("active");
          }
        }
      });
    }

    window.addEventListener("scroll", highlightNavLink, { passive: true });
    highlightNavLink();
    return () => {
      window.removeEventListener("scroll", highlightNavLink);
    };
  }, []);

  return null;
}
