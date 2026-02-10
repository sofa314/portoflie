
import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare Disease Prediction System',
    problem: 'Medical diagnostics often face delays and accessibility issues, particularly in multi-lingual regions needing rapid preliminary assessments for critical diseases like cancer.',
    solution: 'Developed an AI-powered diagnostic platform specializing in Heart, Breast, and Skin cancer detection. Featuring a multi-lingual English/Arabic interface, it democratizes access to health insights through high-accuracy Flask-based AI models.',
    techStack: ['Python', 'Flask', 'Scikit-Learn', 'TensorFlow', 'Bilingual UI'],
    image: 'https://picsum.photos/seed/healthcare/800/600'
  },
  {
    id: 'parking-sensor',
    title: 'Parking Sensor Simulation',
    problem: 'Physical prototyping of complex ultrasonic proximity systems for vehicles is costly and time-intensive without robust simulation.',
    solution: 'Engineered a high-fidelity parking sensor system using Embedded C. The project involved simulating real-world ultrasonic behavior within Proteus, managing low-level hardware interrupts and sensor calibration for precision proximity detection.',
    techStack: ['Embedded C', 'Proteus', 'Atmel AVR', 'Ultrasonic Sensors'],
    image: 'https://picsum.photos/seed/sensor/800/600'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'MCIT',
    role: 'Software Engineering Intern',
    duration: '2023 - 2024',
    description: 'Collaborated on digital transformation initiatives, focusing on scalable web architectures and modernizing legacy government services.',
    icon: 'fa-building-columns'
  },
  {
    company: 'ITI (Information Technology Institute)',
    role: 'Graduate Trainee / Intern',
    duration: '2022 - 2023',
    description: 'Intensive technical training in .NET technologies, full-stack development, and professional software engineering methodologies.',
    icon: 'fa-laptop-code'
  },
  {
    company: 'SUEZ OIL COMPANY',
    role: 'Engineering Intern',
    duration: '2021',
    description: 'Shadowed senior engineers in industrial automation and system maintenance, gaining insights into hardware-software integration in heavy industry.',
    icon: 'fa-oil-well'
  }
];

export const SKILL_MATRIX: SkillCategory[] = [
  {
    title: 'Back-End',
    skills: ['.NET Core', 'Python', 'Flask', 'Node.js', 'SQL Server'],
    icon: 'fa-server'
  },
  {
    title: 'Front-End',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    icon: 'fa-code'
  },
  {
    title: 'Mobile',
    skills: ['Flutter', 'Dart', 'Firebase'],
    icon: 'fa-mobile-screen-button'
  },
  {
    title: 'Embedded Systems',
    skills: ['Embedded C', 'Arduino', 'Proteus Simulation', 'Microcontrollers'],
    icon: 'fa-microchip'
  }
];

export const PERSONAL_INFO = {
  name: 'Youssef Ali',
  tagline: 'Bridging Hardware Precision with Software Innovation',
  bio: 'A Computer Engineering graduate turned Software Engineer. My background in hardware design and low-level C gives me a unique perspective on system performance, which I now apply to building robust full-stack applications with .NET and Python.',
  github: 'https://github.com/sofa314',
  linkedin: 'https://linkedin.com/in/youssefali',
  email: 'youssef.ali@example.com'
};
