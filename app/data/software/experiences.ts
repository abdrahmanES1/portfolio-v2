import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: "April 2024 – August 2024",
    position: "Front-End Developer",
    place: "Integral Progress Technology",
    description: [
      "Developed and integrated web pages for the Quality Management module in an ERP system using React, TypeScript, TailwindCSS, and Mantine.",
      "Implemented API integrations to fetch and display dynamic data, improving functionality and user interaction.",
      "Managed application state with Redux Toolkit and performed form validation using Yup and Formik."
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
    position: "Full-stack Developer Intern",
    place: "FSJES MARRAKECH",
    description: [
      "Creation of a web application that manages diploma requests and storage.",
      "Admin panel manages degree status and student information, it helps to manage degree storage by providing unique number referencing degree location to users.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST framework",
      "Jwt",
      "Bootstrap",
      "Git",
    ],

    category: "Software",
  },
  {
    period: "Mar 2022",
    position: "Web Developer Intern",
    place: "PIXELLEADS",
    description: [
      "Design, development of a blog manager .",
      "Production, integration and deployment of the product to users.",
      "Testing of achievements and correction of any anomalies.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Jwt", "Git"],
    category: "Software",
  },
];
