export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  images: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  pdfPath: string;
  thumbnail?: string;
}

export interface AcademicEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  pronouns: string;
  location: string;
  email: string;
  openToInternships: boolean;
  headline: string;
  rotatingRoles: string[];
  about: string;
  skills: string[];
  resumeUrl: string;
}
