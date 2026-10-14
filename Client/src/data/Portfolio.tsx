import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
  FaLanguage,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiJest,
  SiPostgresql,
  SiAngular,
  SiJsonwebtokens,
  SiPostman,
  SiSass,
  SiPwa,
  SiReactivex,
  SiGithubactions,
  SiScrumalliance,
  SiAuth0,
  SiPrisma,
} from "react-icons/si";
import { PortfolioData } from "../types/portfolioTypes";
import rajkumar from "../assets/rajkumar.jpg";
import resume from "../assets/Rajakumaran_Resume.pdf";
import fullStackCertificate from "../assets/fullstackwebdev-certificate.pdf";

export const portfolioData: PortfolioData = {
  // =========================================================
  // HERO
  // =========================================================
  hero: {
    name: "Raja Kumaran",
    role: "Frontend Engineer | React.js · Next.js · TypeScript",
    description:
      "Frontend Engineer with 3+ years of experience building production web applications using React.js, TypeScript and Next.js. Strong in component architecture, responsive UI development, REST API integration, authentication flows, state management and frontend performance optimization. Built Auditrail, a full-stack Next.js and PostgreSQL audit-log explorer tested on 510K+ events, with virtualized infinite scroll, keyset pagination, automated testing and CI/CD.",
    location: "Chennai, India",
    email: "rajakuma6an93@gmail.com",
    phone: "+91 96004 49228",
    resumeLink: resume,
    linkedIn: "https://www.linkedin.com/in/rajakuma6an/",
    github: "https://github.com/rajakuma6an2022",
    image: rajkumar,
  },

  // =========================================================
  // PROFESSIONAL / COMPANY PROJECTS
  // =========================================================
  companyProjects: [
    {
      title: "DIGIGRAIN – Agri-Tech Procurement Platform",
      description:
        "Role-based procurement platform with dashboards and business workflow interfaces for agri-tech operations.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
        { name: "RBAC", icon: <SiAuth0 />, color: "#EB5424" },
      ],
      highlights: [
        "Developed frontend for a role-based procurement platform with dashboards and procurement workflows.",
        "Implemented reusable React components and role-based UI experiences using Redux Toolkit.",
        "Integrated REST APIs for authentication, procurement workflows and business operations.",
        "Built responsive interfaces using Tailwind CSS and reusable layout patterns.",
        "Improved frontend performance using lazy loading and Webpack optimizations.",
      ],
    },
    {
      title: "MERADOC – Telemedicine Platform",
      description:
        "Telemedicine platform providing patient and doctor interfaces for appointment booking and healthcare workflows.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "React Router", icon: <FaReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
        { name: "React Hook Form", icon: <FaReact />, color: "#61DAFB" },
        { name: "Jest", icon: <SiJest />, color: "#C21325" },
      ],
      highlights: [
        "Built responsive appointment-booking UI and role-based dashboards for a telemedicine platform.",
        "Developed interfaces using React.js, React Router v6, REST APIs and React Hook Form.",
        "Implemented protected frontend routes and authentication-related UI workflows.",
        "Wrote unit tests using Jest and React Testing Library.",
      ],
    },
    {
      title: "SANCHU ANIMAL HOSPITAL – Veterinary Care Platform",
      description:
        "Veterinary care and e-commerce platform for pet management, appointment scheduling and pet-health tracking.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Responsive Design", icon: <FaReact />, color: "#61DAFB" },
      ],
      highlights: [
        "Developed a pet-care and e-commerce portal with appointment scheduling and pet-health tracking.",
        "Integrated REST APIs and handled loading, success, empty and error states.",
        "Used Next.js dynamic imports and lazy loading to improve load performance.",
        "Built reusable UI components for consistent cross-device experiences.",
      ],
    },
    {
      title: "FINDOC – Fintech Financial Dashboard",
      description:
        "Interactive fintech dashboard for financial data visualization, portfolio workflows and transaction tracking.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
      ],
      highlights: [
        "Developed interactive financial dashboards with portfolio and transaction-tracking workflows.",
        "Integrated REST APIs and managed application state using Redux Toolkit.",
        "Built reusable responsive components for financial data and business workflows.",
        "Improved UI rendering performance through memoization and component optimization.",
      ],
    },
    {
      title: "Miles Education – EdTech Learning Platform",
      description:
        "EdTech learning platform featuring learning modules, student dashboards and progress-tracking workflows.",
      technologies: [
        { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "RxJS", icon: <SiReactivex />, color: "#B7178C" },
        { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
      ],
      highlights: [
        "Developed learning modules and student dashboards using Angular and TypeScript.",
        "Implemented RxJS-driven workflows for application state and asynchronous operations.",
        "Integrated JWT-protected REST APIs for learning and student workflows.",
        "Built reusable Angular components for scalable frontend development.",
        "Improved performance using lazy loading and route-level optimization.",
      ],
    },
  ],

  // =========================================================
  // PERSONAL PROJECTS
  // =========================================================
  personalProjects: [
    {
      title: "Auditrail – Multi-Tenant Audit Log Explorer",
      description:
        "Full-stack audit-log explorer built for 510,501 events, with keyset pagination, virtualized infinite scroll, tenant isolation, magic-link authentication, automated testing and CI/CD.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
        { name: "TanStack Query", icon: <FaReact />, color: "#FF4154" },
        { name: "Vitest", icon: <SiJest />, color: "#6DA940" },
        { name: "Playwright", icon: <FaGithub />, color: "#2EAD33" },
        { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
      ],
      highlights: [
        "Built a multi-tenant audit-log explorer for 510,501 events using Next.js, Express, PostgreSQL and Prisma.",
        "Implemented keyset pagination, approximately 391x faster than OFFSET pagination at a 50,000-row depth in the measured environment.",
        "Built a virtualized infinite-scroll table using TanStack Query and TanStack Virtual.",
        "Implemented passwordless magic-link authentication and server-enforced tenant isolation.",
        "Wrote 161 Vitest tests and 44 Playwright E2E tests, including axe WCAG AA accessibility checks.",
        "Set up GitHub Actions CI/CD and deployed using Vercel, Render and Neon.",
      ],
      link: "/projects/auditrail",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive developer portfolio built to showcase professional experience, technical skills, projects, education and contact information.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Framer Motion", icon: <FaReact />, color: "#0055FF" },
        { name: "Vite", icon: <FaReact />, color: "#646CFF" },
      ],
      highlights: [
        "Built a responsive portfolio website using React.js, TypeScript and Tailwind CSS.",
        "Implemented light and dark mode with reusable React components.",
        "Added interactive animations and typing effects using Framer Motion.",
        "Deployed on Vercel with SPA routing configured for direct URL access.",
      ],
      link: "https://rajakumaran-dev.vercel.app/", // ← un real Vercel URL potunga
    },
  ],

  // =========================================================
  // SKILLS
  // =========================================================
  skills: [
    {
      category: "Frontend Technologies",
      items: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript ES6+", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "SCSS", icon: <SiSass />, color: "#CC6699" },
        { name: "React Hooks", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "TanStack Query", icon: <FaReact />, color: "#FF4154" },
        { name: "Context API", icon: <FaReact />, color: "#61DAFB" },
        { name: "React Router", icon: <FaReact />, color: "#61DAFB" },
        { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
        { name: "RxJS", icon: <SiReactivex />, color: "#B7178C" },
        { name: "Responsive Design", icon: <FaReact />, color: "#61DAFB" },
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
        { name: "SQL Indexing", icon: <SiPostgresql />, color: "#336791" },
        { name: "Keyset Pagination", icon: <SiPostgresql />, color: "#336791" },
        { name: "JWT Authentication", icon: <SiJsonwebtokens />, color: "#000000" },
        { name: "Magic-Link Authentication", icon: <SiAuth0 />, color: "#EB5424" },
        { name: "RBAC", icon: <SiAuth0 />, color: "#EB5424" },
        { name: "Zod Validation", icon: <SiExpress />, color: "#000000" },
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        { name: "Jest", icon: <SiJest />, color: "#C21325" },
        { name: "React Testing Library", icon: <FaReact />, color: "#61DAFB" },
        { name: "Vitest", icon: <SiJest />, color: "#6DA940" },
        { name: "Supertest", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Playwright", icon: <FaGithub />, color: "#2EAD33" },
        { name: "Accessibility Testing", icon: <FaReact />, color: "#61DAFB" },
        { name: "WCAG AA", icon: <FaReact />, color: "#61DAFB" },
      ],
    },
    {
      category: "Tools & Deployment",
      items: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
        { name: "CI/CD", icon: <SiGithubactions />, color: "#2088FF" },
        { name: "Vercel", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Render", icon: <FaNodeJs />, color: "#46E3B7" },
        { name: "Neon", icon: <SiPostgresql />, color: "#336791" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Figma", icon: <FaReact />, color: "#F24E1E" },
      ],
    },
    {
      category: "Frontend Performance & Engineering",
      items: [
        { name: "Virtualization", icon: <FaReact />, color: "#61DAFB" },
        { name: "Lazy Loading", icon: <FaReact />, color: "#61DAFB" },
        { name: "Code Splitting", icon: <FaReact />, color: "#61DAFB" },
        { name: "Dynamic Imports", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Memoization", icon: <FaReact />, color: "#61DAFB" },
        { name: "Progressive Web Apps", icon: <SiPwa />, color: "#5A0FC8" },
        { name: "Accessibility", icon: <FaReact />, color: "#61DAFB" },
        { name: "Clean Code", icon: <FaReact />, color: "#61DAFB" },
      ],
    },
    {
      category: "Methodologies",
      items: [
        { name: "Agile", icon: <SiScrumalliance />, color: "#009FDA" },
        { name: "Scrum", icon: <SiScrumalliance />, color: "#009FDA" },
        { name: "Code Reviews", icon: <FaGithub />, color: "#181717" },
        { name: "Secure Coding Practices", icon: <SiAuth0 />, color: "#EB5424" },
      ],
    },
    {
      category: "Languages Known",
      items: [
        { name: "English (Fluent)", icon: <FaLanguage />, color: "#4B8BBE" },
        { name: "Tamil (Native)", icon: <FaLanguage />, color: "#4B8BBE" },
      ],
    },
  ],

  // =========================================================
  // JOB PORTALS
  // =========================================================
  jobPortals: [
    {
      category: "Job Portals",
      items: [
        {
          portal: "GitHub",
          icon: <FaGithub />,
          link: "https://github.com/rajakuma6an2022",
        },
        {
          portal: "LinkedIn",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/in/rajakuma6an/",
        },
      ],
    },
  ],

  // =========================================================
  // EDUCATION
  // =========================================================
  educations: [
    {
      course: "Bachelor of Computer Applications",
      college: "University of Madras",
      year: "2022 to 2024",
      type: "Distance Education",
    },
    {
      course: "Diploma in Electrical and Electronics Engineering",
      college: "Sankar Polytechnic College",
      year: "2008 to 2011",
      percentage: "82%",
    },
  ],

  // =========================================================
  // CERTIFICATIONS
  // =========================================================
  certifications: [
    {
      courseName: "The Complete Full Stack Web Development Bootcamp",
      author: "Dr. Angela Yu",
      platform: "Udemy",
      certificate: fullStackCertificate,
      year: "Aug 27 2025",
    },
  ],
};