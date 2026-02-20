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
        <div className="text-left text-slate-400">
          <p className="mb-4">
            I am Abderrahman Essebyity, a <span className="font-medium text-slate-200">Full-Stack Software Developer</span> and <span className="font-medium text-slate-200">Data Science Master’s student</span>.
          </p>
          <p className="mb-4">
            I specialize in solving complex problems across various domains, including predictive modeling, computer vision, and <span className="font-medium text-slate-200">Generative AI</span>.
          </p>
          <p className="mb-4">
            My unique strength lies in bridging the gap between data science and web application deployment. I combine my solid background in full-stack engineering (<span className="font-medium text-slate-200">React, Next.js, Django, Node.js</span>) with emerging AI/ML skills (<span className="font-medium text-slate-200">PyTorch, TensorFlow, LLMs</span>) to build robust, data-driven solutions.
          </p>
          <p className="mb-8">
            Currently pursuing my Master’s in Data Science & Analytics at Cadi Ayyad University, I am seeking opportunities to apply my engineering discipline and AI expertise to create meaningful impact.
          </p>
          <div className="group gap-2">
            <span>Let’s connect — you can reach out to me anytime at </span>
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="mailto:abderrahman.essebyity@gmail.com"
            >
              abderrahman.essebyity@gmail.com
            </a>
          </div>
        </div>
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
