import { ReactNode } from "react";

export interface HeroContent {
  name: string;
  role: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  resumeLink: string;
  linkedIn: string;
  github: string;
  image: any;
}

export interface Project {
  title: string;
  description: string;
  technologies: projectIcons[];
  highlights: string[];
  link?: string;
}
export interface EducationItem {
  course: string;
  college: string;
  year: string;
  type?: string;
  percentage?: string;
}

export interface CertificateItem {
  courseName: string;
  author?: string;
  platform: string;
  certificate?: ReactNode;
  year: string;
}

export interface projectIcons {
  icon: React.ReactNode;
  color: string;
  name: string;
}

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface jobPortalItem {
  portal: string;
  icon: React.ReactNode;
  link: string;
}

export interface jobPortalCategory {
  category: string;
  items: jobPortalItem[];
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface PortfolioData {
  hero: HeroContent;
  companyProjects: Project[];
  personalProjects: Project[];
  skills: SkillCategory[];
  jobPortals: jobPortalCategory[];
  educations: EducationItem[];
  certifications: CertificateItem[];
}
