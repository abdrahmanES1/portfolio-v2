export interface Education {
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "Master’s Degree in Data Science and Analytics",
    school: "Université Cadi Ayyad",
    period: "Oct 2024 - Jul 2026",
    description: "Predictive modeling, computer vision, and Generative AI. Thesis: agentic multilingual RAG system."
  },
  {
    degree: "Bachelor’s Degree in Computer Software Engineering",
    school: "Higher School of Technology of Essaouira - Cadi Ayyad University",
    period: "Oct 2023 – Jun 2024",
  },
  {
    degree: "Meta Full-Stack Engineer Certificate",
    school: "Meta — Coursera",
    period: "Apr 2023",
    description: "Includes Meta Front-End Developer and Meta Back-End Developer Specializations."
  },
  {
    degree: "Meta Front-End Developer Specialization",
    school: "Meta — Coursera",
    period: "Mar 2023",
  }
];
