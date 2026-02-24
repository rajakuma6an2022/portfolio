// portfolioData.ts
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinkedin,
  FaDatabase,
  FaLanguage,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiJest,
  SiVercel,
  SiFigma,
  SiStorybook,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiBabel,
  SiPostgresql,
  SiBootstrap,
  SiAngular,
  SiJsonwebtokens,
  SiPostman,
  SiSass,
  SiPassport,
  SiPwa,
  SiReactivex,
  SiSecurityscorecard,
  SiGithubactions,
  SiScrumalliance,
  SiDatabricks,
  SiAuth0,
} from "react-icons/si";
import { PortfolioData } from "../types/portfolioTypes";
import rajkumar from "../assets/rajkumar.jpg";
import naukri from "../assets/naukri.png";
import resume from "../assets/rajakumaran-resume.pdf";
import fullStackCertificate from "../assets/fullstackwebdev-certificate.pdf";

export const portfolioData: PortfolioData = {
  hero: {
    name: "Raja Kumaran",
    role: "Full Stack Developer",
    description:
      "Results-driven Full Stack Developer with 2+ years of experience building scalable, production-ready web applications using React, Angular, Next.js, Node.js, and Express. Specialized in designing secure REST APIs with JWT authentication and RBAC, and optimizing database performance with PostgreSQL and MongoDB. Strong focus on performance tuning, clean architecture, and delivering responsive, user-focused digital experiences.",
    location: "Chennai, India",
    email: "rajakuma6an93@gmail.com",
    phone: "+91 96004 49228",
    resumeLink: resume,
    linkedIn: "https://www.linkedin.com/in/rajakuma6an/",
    github: "https://github.com/rajakuma6an2022",
    image: rajkumar,
  },

  companyProjects: [
    {
      title: "DIGIGRAIN – AgriTech Procurement Platform",
      description:
        "Full-stack AgriTech procurement system enabling farmers and vendors to manage orders, inventory, and transactions with secure role-based access.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      ],
      highlights: [
        "Built scalable REST APIs using Express.js with optimized PostgreSQL relational schema and indexing",
        "Implemented secure JWT authentication with Role-Based Access Control (RBAC)",
        "Developed dynamic role-based dashboards using React.js and Redux Toolkit",
        "Improved workflow efficiency by 35% through UI architecture optimization and API performance tuning",
        "Enhanced frontend performance using lazy loading and code-splitting strategies",
      ],
    },

    {
      title: "MERADOC – Telemedicine Platform",
      description:
        "Full-stack telemedicine platform for appointment booking, doctor-patient interaction, and secure health record management.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PWA", icon: <SiPwa />, color: "#5A0FC8" },
      ],
      highlights: [
        "Developed secure JWT-based authentication and appointment management APIs",
        "Optimized MongoDB queries using indexing, pagination, and aggregation pipelines",
        "Implemented Progressive Web App (PWA) features including service workers, caching, and offline access",
        "Improved application load performance by 30% through caching and API response optimization",
        "Built responsive UI workflows with Redux Toolkit for real-time booking updates",
      ],
    },

    {
      title: "SANCHU ANIMAL HOSPITAL – Veterinary Platform",
      description:
        "Full-stack veterinary care and appointment management platform with server-side rendering and optimized performance.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
      highlights: [
        "Built RESTful backend services for appointment scheduling and pet health records",
        "Designed efficient MongoDB schemas with indexing for optimized data retrieval",
        "Enhanced performance using Next.js SSR, dynamic imports, and image optimization",
        "Improved responsiveness and cross-device compatibility with optimized UI components",
        "Reduced page load times through code splitting and bundle optimization",
      ],
    },

    {
      title: "FINDOC – Fintech Financial Dashboard",
      description:
        "Interactive financial dashboard for portfolio management, stock tracking, and real-time analytics.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PWA", icon: <SiPwa />, color: "#5A0FC8" },
      ],
      highlights: [
        "Developed interactive financial dashboard with portfolio and transaction tracking",
        "Integrated real-time stock market APIs with Redux Toolkit for state synchronization",
        "Built secure backend services with Express.js and optimized MongoDB schema design",
        "Reduced UI rendering time by 20% through memoization and component optimization",
        "Implemented PWA support with offline portfolio access and persistent theming",
      ],
    },

    {
      title: "Miles Education – EdTech Learning Platform",
      description:
        "Modular EdTech platform featuring interactive learning modules, dashboards, and real-time progress tracking.",
      technologies: [
        { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "RxJS", icon: <SiReactivex />, color: "#B7178C" },
        { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
        {
          name: "JWT Authentication",
          icon: <SiJsonwebtokens />,
          color: "#000000",
        },
      ],
      highlights: [
        "Developed modular Angular dashboards using RxJS-driven state management",
        "Integrated secure JWT-based authentication with role-based access control",
        "Connected REST APIs for real-time course tracking and assessment analytics",
        "Improved application performance by 25% using lazy loading and route-level optimization",
        "Built reusable components and scalable architecture for long-term maintainability",
      ],
    },
  ],
  personalProjects: [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website to showcase my skills, projects, and contact form functionality. Built with React.js, Tailwind CSS, and Node.js backend for email functionality.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      ],
      highlights: [
        "Responsive portfolio website with light/dark mode toggle",
        "Interactive typing effect and smooth animations using Framer Motion",
        "Contact form integrated with Nodemailer and Gmail for live email submissions",
        "Frontend deployed on Vercel, backend on Render",
        "Showcases skills, education, and projects dynamically using React components",
      ],
      link: "https://portfolio-frontend-vu2z.onrender.com/",
    },
    {
      title: "HabitLyst – Habit & Expense Tracker Web App",
      description:
        "A full-stack habit and expense tracking platform with offline support and secure Google authentication, built using Next.js and the MERN stack.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Passport.js", icon: <SiPassport />, color: "#34E27A" },
        { name: "PWA", icon: <SiPwa />, color: "#5A0FC8" },
      ],
      highlights: [
        "Built a full-stack habit and expense tracking platform using Next.js and the MERN stack",
        "Implemented secure Google authentication using Passport.js with session-based user management",
        "Added Progressive Web App (PWA) support enabling offline access and home-screen installation",
        "Designed and developed RESTful APIs with optimized MongoDB schemas for efficient data handling",
        "Used hybrid rendering in Next.js: SSG for marketing pages, SSR for dashboards, and CSR for interactive features",
      ],
      link: "", // optional – update if different
    },
  ],

  skills: [
    {
      category: "Frontend Technologies",
      items: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "RxJS", icon: <SiReactivex />, color: "#B7178C" },
        { name: "React Router", icon: <FaReact />, color: "#61DAFB" },
        { name: "Progressive Web Apps", icon: <SiPwa />, color: "#5A0FC8" },
        { name: "Responsive Design", icon: <FaReact />, color: "#61DAFB" },
      ],
    },

    {
      category: "Backend Technologies",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "RESTful APIs", icon: <SiPostman />, color: "#FF6C37" },
        {
          name: "JWT Authentication",
          icon: <SiJsonwebtokens />,
          color: "#000000",
        },
        { name: "RBAC", icon: <SiAuth0 />, color: "#EB5424" },
      ],
    },

    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Mongoose ODM", icon: <SiMongodb />, color: "#880000" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Indexing", icon: <SiDatabricks />, color: "#FF3621" },
        { name: "Aggregation", icon: <SiMongodb />, color: "#47A248" },
        {
          name: "Query Optimization",
          icon: <SiPostgresql />,
          color: "#336791",
        },
      ],
    },

    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
        { name: "Babel", icon: <SiBabel />, color: "#F9DC3E" },
        { name: "Jest", icon: <SiJest />, color: "#C21325" },
        { name: "React Testing Library", icon: <FaReact />, color: "#61DAFB" },
      ],
    },

    {
      category: "Methodologies",
      items: [
        { name: "Agile", icon: <SiScrumalliance />, color: "#009FDA" },
        { name: "Scrum", icon: <SiScrumalliance />, color: "#009FDA" },
        { name: "CI/CD", icon: <SiGithubactions />, color: "#2088FF" },
        { name: "Code Reviews", icon: <FaGithub />, color: "#181717" },
        {
          name: "Secure Coding Practices",
          icon: <SiSecurityscorecard />,
          color: "#2E8B57",
        },
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
        // {
        //   portal: "Naukri",
        //   icon: naukri,
        //   link: "https://www.naukri.com/mnjuser/profile",
        // },
      ],
    },
  ],
  educations: [
    {
      course: "Bachelor of Computer Applications",
      college: "University of Madras",
      year: "2022 to 2024",
      type: "Distance Education",
    },
    {
      course: "Diploma in Electrical and Electronics Engineering",
      college: "Sankar Polytecnic College",
      year: "2008 to 2011",
      percentage: "82%",
    },
  ],
  certifications: [
    {
      courseName: "The Complete Full-Stack Web Development Bootcamp",
      author: "Dr.Angela Yu",
      platform: "Udemy",
      certificate: fullStackCertificate,
      year: "Aug 27 2025",
    },
  ],
};
