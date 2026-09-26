export type SkillCategory = {
  id: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools';
  title: string;
  technologies: { name: string; initials: string }[];
};

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    technologies: [
      { name: 'Java', initials: 'JAVA' },
      { name: 'C', initials: 'C' },
      { name: 'JavaScript', initials: 'JS' },
      { name: 'TypeScript', initials: 'TS' },
      { name: 'Python', initials: 'PY' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    technologies: [
      { name: 'React.js', initials: 'RE' },
      { name: 'HTML5', initials: 'H5' },
      { name: 'Tailwind CSS', initials: 'TW' },
      { name: 'Bootstrap', initials: 'BS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    technologies: [{ name: 'NestJS', initials: 'N' }],
  },
  {
    id: 'databases',
    title: 'Databases',
    technologies: [
      { name: 'MySQL', initials: 'SQL' },
      { name: 'PostgreSQL', initials: 'PG' },
      { name: 'MongoDB', initials: 'MDB' },
      { name: 'Firebase', initials: 'FB' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    technologies: [
      { name: 'Git', initials: 'GIT' },
      { name: 'GitHub', initials: 'GH' },
      { name: 'Postman', initials: 'PM' },
      { name: 'Figma', initials: 'FIG' },
    ],
  },
];
