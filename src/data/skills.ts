export type SkillCategory = {
  id: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'ai-ml';
  title: string;
  technologies: { name: string; icon: string }[];
};

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    technologies: [
      { name: 'Java', icon: 'java' },
      { name: 'C', icon: 'c' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    technologies: [
      { name: 'React.js', icon: 'react' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    technologies: [{ name: 'NestJS', icon: 'nestjs' }],
  },
  {
    id: 'databases',
    title: 'Databases',
    technologies: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    technologies: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    technologies: [
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'Matplotlib', icon: 'matplotlib' },
      { name: 'Seaborn', icon: 'seaborn' },
      { name: 'Jupyter Notebook', icon: 'jupyter' },
      { name: 'Streamlit', icon: 'streamlit' },
      { name: 'Joblib', icon: 'joblib' },
    ],
  },
];
