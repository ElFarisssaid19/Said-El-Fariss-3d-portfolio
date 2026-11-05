import {
  backend,
  creator,
  deploy,
  web,
  work,
  education,
  bootstrap,
  css,
  docker,
  git,
  html,
  javascript,
  linux,
  mysql,
  nextjs,
  php,
  reactjs,
  tailwind,
  threejs,
} from "../assets";
import { publicPath } from "../utils/publicPath";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const overviewServices = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend & Three.js",
    icon: creator,
  },
  {
    title: "Backend PHP & MySQL",
    icon: backend,
  },
  {
    title: "Docker & Deployment",
    icon: deploy,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer — Intern",
    company_name: "NajmiNet Innovations",
    icon: work,
    iconBg: "#383E56",
    date: "Jul 2026 — Aug 2026",
    points: [
      "Built from scratch a SaaS accounting platform for Moroccan SMEs.",
      "Developed a complete authentication system, including Google OAuth login.",
      "Integrated PayPal checkout and a subscription workflow with a 14-day free trial.",
      "Delivered 12 business tools for day-to-day company management.",
      "Supervised by Imad Najmi.",
    ],
  },
  {
    title: "BTS in Full-Stack Web Development",
    company_name: "Centre de BTS de Chichaoua",
    icon: education,
    iconBg: "#383E56",
    date: "2025 — Present",
    points: [
      "Two-year higher technician diploma in full-stack web development.",
    ],
  },
  {
    // TODO: confirm school and year (kept from the previous version of the site)
    title: "Baccalaureate — Electrical Engineering Sciences (STE)",
    company_name: "Chichaoua Technical High School",
    icon: education,
    iconBg: "#383E56",
    date: "2023 — 2024",
    points: [
      "Baccalaureate in Electrical Engineering Sciences and Technologies (STE).",
    ],
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Full-stack websites and web applications (React, Next.js, PHP, MySQL).",
    icon: web,
  },
  {
    title: "Frontend & 3D",
    description:
      "Responsive interfaces and interactive 3D scenes (Tailwind CSS, Bootstrap, Three.js).",
    icon: creator,
  },
  {
    title: "Backend & Databases",
    description:
      "Server-side logic, MySQL databases and secure authentication (PHP, Google OAuth).",
    icon: backend,
  },
];

const projects = [
  {
    name: "NajmiNet",
    description:
      "SaaS accounting platform for Moroccan SMEs. 12 business tools (quotes, products, suppliers and more), Google OAuth login, PayPal checkout, a 14-day free trial and a Professional plan, wrapped in a dark-navy glassmorphism design.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: publicPath("najminet.webp"),
    source_code_link: "https://github.com/ElFarisssaid19/Najminet",
    live_demo_link: "", // TODO: current live URL
  },
  {
    name: "Commit Garden",
    description:
      "Turns any GitHub contribution graph into a 3D low-poly garden.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
    ],
    image: publicPath("commit-garden.webp"),
    source_code_link: "https://github.com/ElFarisssaid19/commit-garden",
    live_demo_link: "https://elfarisssaid19.github.io/commit-garden/",
  },
];

export { overviewServices, technologies, experiences, services, projects };
