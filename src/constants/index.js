import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  logo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact-info",
    title: "Contact Info",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const overviewServices = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer — Intern",
    company_name: "NajmiNet Innovations",
    icon: logo,
    iconBg: "#383E56",
    date: "One-month internship",
    points: [
      "Developed a multilingual (AR/FR/EN/ES) SaaS accounting platform for Moroccan SMEs, using PHP 8.2, MySQL, Docker and Bootstrap 5.",
      "Designed a dark-navy glassmorphism design system, an animated landing page, and 5 business tool calculator pages.",
      "Built a complete authentication system (login, register, forgot password, reset) and a subscription plan with a 14-day free trial, covering 13 tools accessible from the sidebar.",
      "Integrated PayPal payments via cURL and Google OAuth login.",
      "Supervised by Imad Najmi. Deliverables: internship report (FR and AR), 21-slide defense presentation, internship certificate.",
    ],
  },
  {
    title: "Baccalaureate — Electrical Engineering Sciences (STE)",
    company_name: "Lycée Technique de Chichaoua",
    icon: logo,
    iconBg: "#383E56",
    date: "2023 — 2024",
    points: [
      "Graduated with a Baccalaureate in Electrical Engineering Sciences and Technologies (STE).",
      "Developed a strong foundation in mathematics, physics, and technical sciences.",
    ],
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Full-stack websites and applications (React, Node.js, PHP, MySQL).",
    icon: web,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications (React Native / Expo).",
    icon: mobile,
  },
  {
    title: "Backend & API",
    description:
      "REST APIs, databases, and secure authentication systems (Node.js, Express, MySQL, JWT).",
    icon: nodejs,
  },
  {
    title: "UI/UX Design",
    description:
      "Modern, responsive interfaces (Tailwind CSS, design systems).",
    icon: figma,
  },
];

const projects = [
  {
    name: "NajmiNet",
    description:
      "Multilingual (AR/FR/EN/ES) SaaS accounting platform for Moroccan SMEs, built during an internship at NajmiNet Innovations. Dark-navy glassmorphism design system, animated landing page, 5 business tool calculators, full authentication, and a subscription with a 14-day free trial. PayPal payments via cURL and Google OAuth login. Deployed on InfinityFree.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: "/najminet.webp",
    source_code_link: "https://github.com/ElFarisssaid19/Internship-Project-NajmiNet",
  },
  {
    name: "SALAMA",
    description:
      "IoT health bracelet for elderly Moroccan users (ESP32-C3, MAX30102 and MPU-6050 sensors), with a React Native/Expo mobile app and a Node/Express/MySQL backend. Presented at the CNIORI'26 competition.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: "/salama.svg",
    source_code_link: "https://github.com/SoufainNajmi/SALAMA-CNIORI-2",
  },
];

export { overviewServices, technologies, experiences, services, projects };
