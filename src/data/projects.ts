export type Project = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  featured: boolean;
  teamSize?: number;
  description: string;
  contribution: string;
  details?: { title: string; items: string[] };
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  imageDirectory: string;
  // Add an actual screenshot filename and meaningful alt text when available.
  image?: { filename: string; alt: string };
  visual: 'leaf' | 'credit' | 'hardware';
};

export const projects: Project[] = [
  {
    id: 'ceylon-leaf',
    title: 'Ceylon Leaf',
    subtitle: 'Smart Tea Factory Supplier Analytics System',
    type: 'Solo Full-Stack Project',
    featured: true,
    description: 'A full-stack tea supplier quality and payment management system designed around real tea-factory workflows. The system helps manage tea collections, supplier quality, payments, supplier history, dashboards, and reporting.',
    contribution: 'Independently designed and developed the complete system, including the frontend, backend, database integration, business logic, authentication, validation, dashboards, and reporting features.',
    details: {
      title: 'Key features',
      items: [
        'Multi-grade tea collection recording',
        'Automated payment calculations',
        'Weighted quality scoring',
        'Supplier history',
        'Dashboards and reporting',
        'JWT authentication',
        'Server-side validation',
      ],
    },
    technologies: ['React.js', 'NestJS', 'SQL Server'],
    githubUrl: 'https://github.com/lumithmanuu/Tea-leaf-supplier-s-management-system',
    imageDirectory: '/images/projects/ceylon-leaf/',
    visual: 'leaf',
  },
  {
    id: 'smart-credit',
    title: 'Smart Credit+',
    subtitle: 'Peer-to-Peer Lending Platform',
    type: 'University Team Project',
    featured: true,
    teamSize: 5,
    description: 'A secure multi-role peer-to-peer lending platform with borrower, lender, and administrator interfaces.',
    contribution: 'Designed and implemented the Admin Web Portal, including KYC review and approval, lender advertisement moderation, user account management, administrative dispute-resolution workflows, analytics, and fraud-alert monitoring.',
    details: {
      title: 'Additional responsibilities',
      items: [
        'User activation and deactivation',
        'Account suspension and banning',
        'Loan-volume analytics',
        'Default analytics',
        'User-activity analytics',
        'Fraud-alert monitoring',
        'Coordinating shared Firebase data structures and status values across modules',
      ],
    },
    technologies: ['React.js', 'TypeScript', 'JavaScript', 'NestJS', 'Firebase', 'React Native'],
    githubUrl: 'https://github.com/NishenAMJ/Smart_Credit_Plus',
    liveDemoUrl: 'https://smart-credit-api.vercel.app',
    imageDirectory: '/images/projects/smart-credit/',
    visual: 'credit',
  },
  {
    id: 'grim-reaper',
    title: 'Grim Reaper',
    subtitle: 'Interactive Animatronic System',
    type: 'Team Hardware Project',
    featured: false,
    description: 'A sensor-driven Arduino Mega 2560 animatronic system that responds to proximity, sound, and touch using coordinated motor movement and synchronized audio.',
    contribution: 'Designed and implemented the NEMA 17 chest movement mechanism and touch-sensor module, including stepper-driver integration, Arduino motor-control logic, testing, debugging, and structural alignment.',
    technologies: ['C++', 'Arduino', 'Microcontrollers', 'Sensors', 'Stepper Motors'],
    imageDirectory: '/images/projects/grim-reaper/',
    visual: 'hardware',
  },
];
