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
    description: "Focusing on predictive modeling, computer vision, and Generative AI."
  },
  {
    degree: "Professional Bachelor's Degree in Computer Systems and Software Engineering",
    school: "Essaouira Higher School of Technology - Cadi Ayyad University",
    period: "Oct 2023 – July 2024",
  },
  {
    degree: "Meta Full-Stack Engineer Certificate",
    school: "Coursera",
    period: "2024",
    description: "Includes Meta Front-End Developer and Meta Back-End Developer Specializations."
  }
];
