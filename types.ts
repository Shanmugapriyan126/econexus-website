export interface ServiceItem {
  id: string;
  title: string;
  category: 'Environmental' | 'Social' | 'Governance' | 'Chemical & Energy';
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string;
  keyDeliverables: string[];
  standards: string[];
  metricsTargeted: string;
}

export interface StrategicPillar {
  id: string;
  title: string;
  category: 'Governance' | 'Environment' | 'Social' | 'Strategic Value';
  icon: string;
  color: string;
  bgTint: string;
  description: string;
  coreFocus: string[];
  frameworkAlignment: string[];
}

export interface IndustryInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  complianceChallenges: string[];
  solutions: string[];
  keyRegulations: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  level: 'Foundational' | 'Advanced' | 'Lead Auditor';
  duration: string;
  format: 'On-site Workshop' | 'Virtual Masterclass' | 'Hybrid';
  summary: string;
  targetAudience: string;
  modules: string[];
}
