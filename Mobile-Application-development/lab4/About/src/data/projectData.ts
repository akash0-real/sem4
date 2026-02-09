export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Systems Monitor',
    description: 'Track daily expenses with analytics and charts.',
    tech: ['React Native', 'Firebase'],
    github: 'https://github.com/akash0-real/System-monitor',
  },
  {
    id: '2',
    title: 'Campus Connect',
    description: 'College event and notice management app.',
    tech: ['React Native', 'Node.js'],
    github: 'https://github.com/akash0-real/System-monitor',
  },
  {
    id: '3',
    title: 'Portfolio App',
    description: 'Personal portfolio mobile application.',
    tech: ['React Native', 'TypeScript'],
  },
];
