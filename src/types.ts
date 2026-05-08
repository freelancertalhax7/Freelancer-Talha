export interface Skill {
  name: string;
  category: 'Design' | 'Marketing' | 'Security' | 'Development';
  level: number; // 1-100
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
