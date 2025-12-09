export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Minijob' | 'Ausbildung';
  category: 'Verkauf' | 'Logistik' | 'Management' | 'E-Commerce' | 'Zentrale';
  salaryRange?: string;
  postedDate: string;
  featured?: boolean;
}

export interface CareerProfile {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  requirements: string[];
  careerPath: string;
  salary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum UserRole {
  APPLICANT = 'APPLICANT',
  EMPLOYER = 'EMPLOYER'
}