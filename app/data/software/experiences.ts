import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: "April 2024 – September 2024",
    position: "Frontend Developer",
    place: "Integral Progress Technology",
    description: [
      "Built dynamic pages for the Quality Management module of an ERP system using React, TypeScript, TailwindCSS, and Mantine.",
      "Spearheaded the development of responsive web applications, enhancing performance and user experience.",
      "Collaborated with cross-functional teams to translate complex requirements into maintainable code, reducing development time.",
      "Integrated REST APIs to fetch and render dynamic data, and managed global state with Redux Toolkit.",
      "Implemented reusable components and state management practices, improving code efficiency for future updates."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TailwindCSS",
      "Mantine",
      "Yup",
      "Formik",
      "Git",
    ],
    category: "Software",
  },
  {
    period: "January 2023 – September 2023",
    position: "Software Developer",
    place: "Freelance",
    description: [
      "Created desktop and web applications, delivering tailored solutions to clients.",
      "Integrated the OpenAI API to automatically generate articles from keywords, enhancing content creation processes.",
      "Deployed applications on cloud servers, configured production environments, and implemented online databases for scalability and performance.",
      "Developed web scraping and automation scripts to streamline data extraction and repetitive tasks for clients."
    ],
    technologies: [
      "Python",
      "OpenAI API",
      "Web Scraping",
      "React",
      "Node.js",
      "Cloud Deployment"
    ],
    category: "Software",
  },
  {
    period: "Nov 2022 – Dec 2022",
    position: "Full-Stack Developer Intern",
    place: "FSJES MARRAKECH",
    description: [
      "Built a full-stack web application that lets students track the status of their diploma requests in real time, using Django REST Framework for the backend and React on the front end.",
      "Designed REST endpoints to expose diploma status and student records, with a unique-reference system so each diploma could be located by number.",
      "Delivered a responsive React interface so students could check their diploma progress without contacting the administration."
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "JWT",
      "Bootstrap",
      "Git",
    ],
    category: "Software",
  },
  {
    period: "Mar 2022 – Apr 2022",
    position: "Web Developer Intern",
    place: "PIXELLEADS",
    description: [
      "Designed and developed a comprehensive blog management system for streamlined content creation and categorization.",
      "Production, integration and deployment of the product to users.",
      "Testing of achievements and correction of any anomalies.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Jwt", "Git"],
    category: "Software",
  },
];
