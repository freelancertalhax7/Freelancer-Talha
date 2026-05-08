import { Skill, Service, SocialLink } from './types';

export const SKILLS: Skill[] = [
  { name: 'UI/UX Design', category: 'Design', level: 95, icon: 'Palette' },
  { name: 'Graphic Design', category: 'Design', level: 90, icon: 'Image' },
  { name: 'Cyber Security', category: 'Security', level: 98, icon: 'ShieldAlert' },
  { name: 'Bug Hunting', category: 'Security', level: 94, icon: 'Bug' },
  { name: 'Web Penetration', category: 'Security', level: 96, icon: 'Lock' },
  { name: 'Digital Marketing', category: 'Marketing', level: 85, icon: 'TrendingUp' },
  { name: 'SEO Optimization', category: 'Marketing', level: 88, icon: 'Search' },
  { name: 'React / Next.js', category: 'Development', level: 92, icon: 'Code2' },
  { name: 'Node.js Backend', category: 'Development', level: 88, icon: 'Server' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Professional Web Design',
    description: 'Creating immersive, fast, and responsive web experiences that convert.',
    icon: 'Monitor',
    benefits: ['Modern 3D Animations', 'Mobile-First Design', 'User-Centric UX'],
  },
  {
    id: 'cyber-security',
    title: 'Security Auditing',
    description: 'Protecting your digital assets with advanced pentesting and security protocols.',
    icon: 'Shield',
    benefits: ['Vulnerability Assessment', 'Data Protection', 'Bug Hunting'],
  },
  {
    id: 'digital-marketing',
    title: 'Growth Strategy',
    description: 'Scale your brand visibility with targeted digital marketing campaigns.',
    icon: 'BarChart',
    benefits: ['Ad Management', 'SEO Excellence', 'Content Strategy'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: '#', icon: 'Github' },
  { name: 'LinkedIn', url: '#', icon: 'Linkedin' },
  { name: 'Twitter', url: '#', icon: 'Twitter' },
  { name: 'Instagram', url: '#', icon: 'Instagram' },
];
