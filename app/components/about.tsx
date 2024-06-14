import React from "react";

function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200   ">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
          I am Abderrahman Essebyity, a Full-Stack Software Developer with a
          passion for creating elegant, user-friendly products. With a solid
          background in developing and deploying full-stack applications, I
          excel in API integration and cloud computing. I have extensive
          experience with technologies such as React, Next.js, Node.js,
          Express.js, and Django, enabling me to build robust and scalable web
          applications. Seeking a challenging role in a fast-paced environment
          where I can leverage my skills and experience to make a real
          difference. Let`s connect—you can reach out to me anytime at
          <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="mailto:abderrahman.essebyity@gmail.com"
        >
          {" "}abderrahman.essebyity@gmail.com
        </a>
        </p>
        {/* <ul className="list-disc">
          <li>XHTML/HTML/HTML5, Templating Engine (Jade/Pug, etc.)</li>
          <li>
            CSS/CSS3 (incl. Grid, Flexbox), Bootstrap 3+, Tailwind CSS,
            SASS/SCSS
          </li>
          <li>Responsive Design</li>
          <li>JavaScript Core (incl. AJAX, JSON, OOP, ES6/7), TypeScript</li>
          <li>React (incl. Router, Hooks, Redux/Thunk), Firebase</li>
          <li>Git, GulpJs</li>
          <li>Next.js</li>
          <li>NodeJs, Express.js, Nest.js</li>
          <li>MongoDB/mongoose</li>
          <li>Django, Django Rest Framework</li>
          <li>
            Knowledge About API Integration with various CMS/Backend environment
            context such as NodeJs/Strapi (Headless CMS)
          </li>
        </ul>
        Email:{" "}
         */}
      </div>
    </section>
  );
}

export default About;
