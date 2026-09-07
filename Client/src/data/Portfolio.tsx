// portfolioData.ts

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
  FaLinkedin,
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

    role: "Frontend Developer",

    description:
      "Frontend Developer with 2.6+ years of professional experience building production web applications using React.js, JavaScript, TypeScript, and Angular across healthcare, fintech, edtech, and agri-tech domains. Strong in responsive UI development, reusable components, REST API integration, authentication flows, state management, debugging, and frontend performance optimization. Since September 2025, independently building full-stack applications with Node.js, Express.js, PostgreSQL, MongoDB, JWT/RBAC, testing, and Docker.",

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
  // IMPORTANT:
  // These projects represent professional frontend experience.
  // Backend technologies/claims are intentionally not overstated.
  // =========================================================

  companyProjects: [
    {
      title: "DIGIGRAIN – Agri-Tech Procurement Platform",

      description:
        "Responsive multi-role procurement platform with dashboards and business workflow interfaces for agri-tech operations.",

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux />,
          color: "#764ABC",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "#38B2AC",
        },
        {
          name: "REST APIs",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "JWT",
          icon: <SiJsonwebtokens />,
          color: "#000000",
        },
        {
          name: "RBAC",
          icon: <SiAuth0 />,
          color: "#EB5424",
        },
      ],

      highlights: [
        "Developed responsive dashboards and workflow screens for a multi-role procurement platform.",
        "Implemented reusable React components and role-based UI experiences using Redux Toolkit.",
        "Integrated REST APIs for authentication, procurement workflows, and business operations.",
        "Built responsive interfaces using Tailwind CSS and reusable layout patterns.",
        "Improved frontend performance using lazy loading and code-splitting strategies.",
      ],
    },

    {
      title: "MERADOC – Telemedicine Platform",

      description:
        "Telemedicine platform providing patient and doctor interfaces for appointment booking and healthcare workflows.",

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux />,
          color: "#764ABC",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "#38B2AC",
        },
        {
          name: "React Router",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "REST APIs",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "JWT",
          icon: <SiJsonwebtokens />,
          color: "#000000",
        },
        {
          name: "PWA",
          icon: <SiPwa />,
          color: "#5A0FC8",
        },
        {
          name: "Jest",
          icon: <SiJest />,
          color: "#C21325",
        },
      ],

      highlights: [
        "Developed patient and doctor interfaces for appointment booking and healthcare workflows.",
        "Implemented authentication flows and protected frontend routes using JWT-based authentication.",
        "Used Redux Toolkit for application state management and complex UI workflows.",
        "Implemented PWA features including caching and responsive behavior.",
        "Developed unit tests using Jest and React Testing Library.",
      ],
    },

    {
      title: "SANCHU ANIMAL HOSPITAL – Veterinary Care Platform",

      description:
        "Responsive veterinary care platform for pet management, appointments, and record-viewing workflows.",

      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "#000000",
        },
        {
          name: "React",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux />,
          color: "#764ABC",
        },
        {
          name: "REST APIs",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "Responsive Design",
          icon: <FaReact />,
          color: "#61DAFB",
        },
      ],

      highlights: [
        "Built responsive pet management, appointment, and record-viewing workflows.",
        "Integrated REST APIs and handled loading, success, empty, and error states.",
        "Used Next.js rendering and dynamic imports to improve frontend performance.",
        "Developed reusable UI components for consistent cross-device experiences.",
        "Optimized responsive behavior across desktop, tablet, and mobile layouts.",
      ],
    },

    {
      title: "FINDOC – Fintech Financial Dashboard",

      description:
        "Interactive fintech dashboard for financial data visualization, portfolio workflows, and transaction tracking.",

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux />,
          color: "#764ABC",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "#38B2AC",
        },
        {
          name: "REST APIs",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "PWA",
          icon: <SiPwa />,
          color: "#5A0FC8",
        },
      ],

      highlights: [
        "Developed interactive financial dashboards with portfolio and transaction tracking workflows.",
        "Integrated REST APIs and managed application state using Redux Toolkit.",
        "Built reusable responsive components for financial data and business workflows.",
        "Improved UI rendering performance through memoization and component optimization.",
        "Implemented responsive layouts and PWA capabilities for improved usability.",
      ],
    },

    {
      title: "Miles Education – EdTech Learning Platform",

      description:
        "EdTech learning platform featuring learning modules, student dashboards, and progress-tracking workflows.",

      technologies: [
        {
          name: "Angular",
          icon: <SiAngular />,
          color: "#DD0031",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "#3178C6",
        },
        {
          name: "RxJS",
          icon: <SiReactivex />,
          color: "#B7178C",
        },
        {
          name: "REST APIs",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "JWT",
          icon: <SiJsonwebtokens />,
          color: "#000000",
        },
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
  // SmartClinicQ is the strongest full-stack project.
  // =========================================================

  personalProjects: [
    {
      title: "SmartClinicQ – Multi-Tenant Clinic Queue Management SaaS",

      description:
        "Full-stack clinic queue management SaaS application for patients, appointments, queues, public booking, and real-time queue status.",

      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "#000000",
        },
        {
          name: "React",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "#3178C6",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "#339933",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "#000000",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          color: "#336791",
        },
        {
          name: "JWT",
          icon: <SiJsonwebtokens />,
          color: "#000000",
        },
        {
          name: "RBAC",
          icon: <SiAuth0 />,
          color: "#EB5424",
        },
        {
          name: "Socket.io",
          icon: <FaNodeJs />,
          color: "#010101",
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          color: "#2496ED",
        },
      ],

      highlights: [
        "Built a full-stack clinic queue management SaaS application for patients, appointments, queues, public booking, and real-time queue status.",
        "Implemented multi-tenant data isolation, role-based authorization, access/refresh-token authentication, request validation, centralized error handling, search, filtering, and pagination.",
        "Developed Socket.io room-based real-time queue updates for live queue status changes.",
        "Applied security controls including Helmet, strict CORS, rate limiting, secure cookies, and environment-based configuration.",
        "Designed PostgreSQL database structures and implemented backend API workflows using Node.js and Express.js.",
      ],

      link: "",
    },

    // {
    //   title: "HabitLyst – Habit & Expense Tracker",

    //   description:
    //     "Full-stack habit and expense tracking web application focused on authentication, data management, offline support, and responsive user experience.",

    //   technologies: [
    //     {
    //       name: "Next.js",
    //       icon: <SiNextdotjs />,
    //       color: "#000000",
    //     },
    //     {
    //       name: "React",
    //       icon: <FaReact />,
    //       color: "#61DAFB",
    //     },
    //     {
    //       name: "Node.js",
    //       icon: <FaNodeJs />,
    //       color: "#339933",
    //     },
    //     {
    //       name: "Express.js",
    //       icon: <SiExpress />,
    //       color: "#000000",
    //     },
    //     {
    //       name: "MongoDB",
    //       icon: <SiMongodb />,
    //       color: "#47A248",
    //     },
    //     {
    //       name: "PWA",
    //       icon: <SiPwa />,
    //       color: "#5A0FC8",
    //     },
    //   ],

    //   highlights: [
    //     "Built a full-stack habit and expense tracking application using Next.js and Node.js.",
    //     "Implemented authentication and session-based user management.",
    //     "Designed RESTful APIs and MongoDB data models for habit and expense management.",
    //     "Added Progressive Web App support for offline access and home-screen installation.",
    //     "Implemented responsive interfaces for desktop and mobile users.",
    //   ],

    //   link: "",
    // },

    {
      title: "Personal Portfolio Website",

      description:
        "Modern responsive developer portfolio built to showcase professional experience, technical skills, projects, education, and contact information.",

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "#38B2AC",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "#339933",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "#000000",
        },
      ],

      highlights: [
        "Built a responsive portfolio website using React.js and Tailwind CSS.",
        "Implemented light and dark mode with reusable React components.",
        "Added interactive animations and typing effects using Framer Motion.",
        "Integrated a contact form with email functionality.",
        "Deployed the application using modern frontend and backend hosting platforms.",
      ],

      link: "https://portfolio-frontend-vu2z.onrender.com/",
    },
  ],

  // =========================================================
  // SKILLS
  // =========================================================

  skills: [
    {
      category: "Frontend Technologies",

      items: [
        {
          name: "React.js",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "#000000",
        },
        {
          name: "Angular",
          icon: <SiAngular />,
          color: "#DD0031",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "#3178C6",
        },
        {
          name: "JavaScript ES6+",
          icon: <SiJavascript />,
          color: "#F7DF1E",
        },
        {
          name: "HTML5",
          icon: <FaHtml5 />,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          color: "#1572B6",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "#38B2AC",
        },
        {
          name: "SCSS",
          icon: <SiSass />,
          color: "#CC6699",
        },
        {
          name: "React Hooks",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux />,
          color: "#764ABC",
        },
        {
          name: "Context API",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "React Router",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "RxJS",
          icon: <SiReactivex />,
          color: "#B7178C",
        },
        {
          name: "Responsive Design",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Progressive Web Apps",
          icon: <SiPwa />,
          color: "#5A0FC8",
        },
      ],
    },

    {
      category: "Backend Technologies",

      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "#339933",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "#000000",
        },
        {
          name: "REST APIs",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "JWT Authentication",
          icon: <SiJsonwebtokens />,
          color: "#000000",
        },
        {
          name: "RBAC",
          icon: <SiAuth0 />,
          color: "#EB5424",
        },
        {
          name: "Request Validation",
          icon: <SiExpress />,
          color: "#000000",
        },
        {
          name: "Error Handling",
          icon: <SiExpress />,
          color: "#000000",
        },
      ],
    },

    {
      category: "Databases",

      items: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          color: "#336791",
        },
        {
          name: "SQL",
          icon: <SiPostgresql />,
          color: "#336791",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "#47A248",
        },
        {
          name: "Mongoose",
          icon: <SiMongodb />,
          color: "#880000",
        },
        {
          name: "Indexing",
          icon: <SiPostgresql />,
          color: "#336791",
        },
        {
          name: "Pagination",
          icon: <SiPostgresql />,
          color: "#336791",
        },
        {
          name: "Aggregation",
          icon: <SiMongodb />,
          color: "#47A248",
        },
      ],
    },

    {
      category: "Testing & Tools",

      items: [
        {
          name: "Jest",
          icon: <SiJest />,
          color: "#C21325",
        },
        {
          name: "React Testing Library",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Git",
          icon: <FaGitAlt />,
          color: "#F05032",
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
          color: "#181717",
        },
        {
          name: "Postman",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "Swagger / OpenAPI",
          icon: <SiPostman />,
          color: "#85EA2D",
        },
        {
          name: "Vite",
          icon: <FaReact />,
          color: "#646CFF",
        },
        {
          name: "Webpack",
          icon: <FaReact />,
          color: "#8DD6F9",
        },
        {
          name: "Babel",
          icon: <FaReact />,
          color: "#F9DC3E",
        },
      ],
    },

    {
      category: "DevOps & Deployment",

      items: [
        {
          name: "Docker",
          icon: <FaDocker />,
          color: "#2496ED",
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions />,
          color: "#2088FF",
        },
        {
          name: "CI/CD Fundamentals",
          icon: <SiGithubactions />,
          color: "#2088FF",
        },
        {
          name: "Vercel",
          icon: <SiNextdotjs />,
          color: "#000000",
        },
        {
          name: "Render",
          icon: <FaNodeJs />,
          color: "#46E3B7",
        },
      ],
    },

    {
      category: "Frontend Performance & Engineering",

      items: [
        {
          name: "Lazy Loading",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Code Splitting",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Dynamic Imports",
          icon: <SiNextdotjs />,
          color: "#000000",
        },
        {
          name: "Memoization",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Responsive Design",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Accessibility",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Debugging",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "Clean Code",
          icon: <FaReact />,
          color: "#61DAFB",
        },
      ],
    },

    {
      category: "Methodologies",

      items: [
        {
          name: "Agile",
          icon: <SiScrumalliance />,
          color: "#009FDA",
        },
        {
          name: "Scrum",
          icon: <SiScrumalliance />,
          color: "#009FDA",
        },
        {
          name: "CI/CD",
          icon: <SiGithubactions />,
          color: "#2088FF",
        },
        {
          name: "Code Reviews",
          icon: <FaGithub />,
          color: "#181717",
        },
        {
          name: "Secure Coding Practices",
          icon: <SiAuth0 />,
          color: "#EB5424",
        },
      ],
    },

    {
      category: "Languages Known",

      items: [
        {
          name: "English (Fluent)",
          icon: <FaLanguage />,
          color: "#4B8BBE",
        },
        {
          name: "Tamil (Native)",
          icon: <FaLanguage />,
          color: "#4B8BBE",
        },
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
      courseName: "The Complete Full-Stack Web Development Bootcamp",

      author: "Dr. Angela Yu",

      platform: "Udemy",

      certificate: fullStackCertificate,

      year: "Aug 27 2025",
    },
  ],
};