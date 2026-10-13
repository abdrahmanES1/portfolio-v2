export interface Education {
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "Master’s in Data Science and Analytics",
    school: "Polydisciplinary Faculty of Safi - Cadi Ayyad University",
    period: "Oct 2024 - July 2026",
    description: "Specialized in predictive modeling, computer vision, Generative AI, and multilingual agentic retrieval architectures."
  },
  {
    degree: "Bachelor's Degree in Computer Software Engineering",
    school: "Higher School of Technology of Essaouira - Cadi Ayyad University",
    period: "Oct 2023 – July 2024",
  },
  {
    degree: "Meta Full-Stack Engineer Certificate",
    school: "Coursera",
    period: "2024",
    description: "Includes Meta Front-End Developer and Meta Back-End Developer Specializations."
  }
];
