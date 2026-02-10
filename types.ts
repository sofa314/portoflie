
export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  image: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}
