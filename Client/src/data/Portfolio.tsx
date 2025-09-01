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
} from "react-icons/si";
import { PortfolioData } from "../types/portfolioTypes";
import rajkumar from "../assets/rajkumar.jpg";
import naukri from "../assets/naukri.png";
import resume from "../assets/raj-mern-resume.pdf";
import fullStackCertificate from "../assets/fullstackwebdev-certificate.pdf";

export const portfolioData: PortfolioData = {
  hero: {
    name: "Raja Kumaran",
    role: "MERN Stack Developer",
    description:
      "MERN Stack Developer | 2+ years experience building responsive, full-stack web applications with React, Node.js, Express, and MongoDB. Skilled in REST APIs, JWT authentication, Next.js, Redux Toolkit, and Tailwind CSS. Passionate about creating optimized, maintainable, and scalable solutions.",
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
      title: "DIGIGRAIN – AgriTech Platform",
      description:
        "Role-based procurement platform for farmers and vendors built using MERN stack.",
      technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      ],
      highlights: [
        "Led frontend development, boosting operational efficiency by 35%",
        "Built dynamic dashboards with React.js, Redux Toolkit, and Tailwind CSS",
        "Integrated secure login/auth flows with JWT, RBAC, and PostgreSQL for backend data management",
        "Followed Agile methodology and collaborated on designs using Figma",
        "Optimized performance by 30% using Webpack and lazy loading",
      ],
    },
    {
      title: "MERADOC – Telemedicine Platform",
      description:
        "Telemedicine platform for appointment booking and doctor-patient interaction using MERN stack.",
        technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
      highlights: [
        "Developed responsive UI using React.js, Tailwind CSS, and React Router v6",
        "Integrated REST APIs for real-time appointment booking within the MERN stack",
        "Implemented role-based dashboards and form validation with React-Hook-Form",
        "Enhanced accessibility using WCAG standards and semantic HTML",
        "Wrote unit tests using Jest and React Testing Library",
      ],
    },
    {
      title: "SANCHU ANIMAL HOSPITAL – Veterinary Platform",
      description:
        "Pet care and e-commerce portal built with Next.js and Redux in MERN stack.",
       technologies: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
      highlights: [
        "Developed pet care and e-commerce portal using Next.js and Redux in the MERN stack",
        "Integrated appointment scheduling and pet health tracking interfaces",
        "Collaborated on a UI/UX revamp, increasing average session duration by 25%",
        "Ensured 100% mobile responsiveness for all key features",
        "Boosted page load speeds by 30% using lazy loading and dynamic imports",
      ],
    },
    {
      title: "FINDOC – Financial Services Dashboard",
      description:
        "Interactive financial dashboard for tracking stocks and mutual funds using MERN stack.",
       technologies: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
      highlights: [
        "Built interactive financial dashboard using React.js and Node.js/Express for backend services",
        "Integrated MongoDB to store user preferences, portfolios, and transaction history",
        "Connected real-time stock and mutual fund APIs using Redux Toolkit for state management",
        "Enhanced UI performance for charts and tables, reducing load time by 20%",
        "Implemented persistent light/dark theme across sessions using local storage and context",
      ],
    },
  ],
  personalProjects: [
    // {
    //   title: "TaskPro – Task Management System",
    //   description:
    //     "Full-stack MERN task management system with real-time updates and role-based access.",
    //     technologies: [
    //     { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    //     { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
    //     { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    //     { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    //     { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    //     { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    //     { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    //   ],
    //   highlights: [
    //     "Designed and developed a full-stack MERN application for task management with task creation, assignment, role-based access, and real-time updates",
    //     "Built secure backend APIs using Node.js, Express.js, and MongoDB (Mongoose) with JWT authentication",
    //     "Integrated APIs with a React.js + Tailwind CSS frontend ensuring a responsive and modern UI",
    //     "Implemented user roles (Admin, User) with access control for task assignment and team collaboration",
    //     "Deployed on AWS (EC2, S3, Route 53) with Docker, optimized using lazy loading, caching, and database indexing",
    //   ],
    // },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "REST APIs", icon: <SiExpress />, color: "#FF5733" },
        {
          name: "JWT Authentication",
          icon: <SiJavascript />,
          color: "#F7DF1E",
        },
      ],
    },
    {
      category: "Database",
      items: [{ name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }],
    },
    {
      category: "Programming",
      items: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      ],
    },
    {
      category: "Testing & Deployment",
      items: [
        { name: "Jest", icon: <SiJest />, color: "#C21325" },
        { name: "Git", icon: <FaGithub />, color: "#F05032" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Vercel", icon: <SiVercel />, color: "#000000" },
        // { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        // { name: "React Testing Library", icon: <FaReact />, color: "#61DAFB" },
        // { name: "ESLint", icon: <SiEslint />, color: "#4B32C3" },
        // { name: "Prettier", icon: <SiPrettier />, color: "#F7B93E" },
      ],
    },
    {
      category: "Build & Optimization",
      items: [
        { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
        { name: "Babel", icon: <SiBabel />, color: "#F9DC3E" },
      ],
    },
    // {
    //   category: "UI/UX & Tools",
    //   items: [
    //     { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    //     { name: "Responsive Design", icon: <FaReact />, color: "#61DAFB" },
    //     { name: "Accessibility (WCAG)", icon: <FaReact />, color: "#61DAFB" },
    //     { name: "Storybook", icon: <SiStorybook />, color: "#FF4785" },
    //   ],
    // },
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
