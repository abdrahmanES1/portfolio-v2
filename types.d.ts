interface Experience {
  period: string;
  position: string;
  place: string;
  description: string | string[];
  technologies: string[];
  link?: string;
}
interface Project {
  title: string;
  description: string | string[];
  technologies: string[];
  imageUrl: string;
  url: string;
}
