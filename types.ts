export type LanguageCode = 'en' | 'tr' | 'ar' | 'ku';

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  birthDate: string;
  // linkedin removed
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  keyValues: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  description: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
  details?: string;
  proficiencyPercent: number;
}

export interface UIContent {
  sectionTitles: {
    experience: string;
    education: string;
    languages: string;
    skills: string;
    contact: string;
    about: string;
  };
  labels: {
    roleLabel: string;
    download: string;
    availableForWork: string;
  };
}

export interface ProjectItem {
  title: string;
  technologies: string[];
  description: string;
  image?: string; // Project screenshot/preview
  demoUrl?: string; // Live demo link
  githubUrl?: string; // GitHub repository
  stats?: {
    stars?: number;
    forks?: number;
    language?: string;
  };
}

export interface MethodologyItem {
  title: string;
  description: string;
  icon: string;
}

export interface AICapability {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  applications: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  typewriterTitles: string[];
  summary: string;
  contact: ContactInfo;
  highlights: string[];
  projects: ProjectItem[];
  methodology: MethodologyItem[];
  aiCapabilities: AICapability[];
  education: EducationItem[];
  experience: ExperienceItem[];
  languages: LanguageSkill[];
  skills: { category: string; items: string[] }[];
  ui: UIContent & {
    sectionTitles: {
      highlights: string;
      projects: string;
      methodology: string;
      aiCapabilities: string;
    }
  };
}

export type MultiLanguageResume = {
  [key in LanguageCode]: ResumeData;
};