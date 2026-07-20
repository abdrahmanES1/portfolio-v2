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
            I build machine-learning systems end-to-end, from model design to production deployment, and I ship the full stack around them.
          </p>
          <p className="mb-4">
            My work spans <span className="font-medium text-slate-200">LLM fine-tuning</span>, <span className="font-medium text-slate-200">retrieval-augmented generation</span>, <span className="font-medium text-slate-200">multi-agent systems</span>, and <span className="font-medium text-slate-200">deep learning</span> for computer vision and NLP. I focus on building systems that work in production: low-latency, multilingual, and grounded in real data.
          </p>
          <p className="mb-4">
            On the engineering side, I&apos;ve shipped production web apps, published an npm package, and contributed to <span className="font-medium text-slate-200">Magic UI</span> (21.5k★ open-source library). I combine a strong full-stack background in <span className="font-medium text-slate-200">React, Next.js, Django, and FastAPI</span> with deep AI/ML expertise.
          </p>
          <p className="mb-8">
            I&apos;m open to AI/ML Engineer and Full-Stack roles, remote or based in Morocco. If you&apos;re working on something in applied AI, NLP, or production ML, I&apos;d be glad to talk.
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
      </div>
    </section>
  );
}

export default About;
