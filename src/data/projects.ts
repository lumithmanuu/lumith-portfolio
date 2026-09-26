export type ProjectImage = {
  src: string;
  alt: string;
  supplementary?: boolean;
};

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
  images: ProjectImage[];
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
    images: [
      { src: '/images/projects/ceylon-leaf/ceylon-dashboard.png', alt: 'Ceylon Leaf dashboard' },
      { src: '/images/projects/ceylon-leaf/ceylon-suppliers.png', alt: 'Ceylon Leaf supplier management' },
      { src: '/images/projects/ceylon-leaf/ceylon-reports.png', alt: 'Ceylon Leaf reports and payment analytics' },
      { src: '/images/projects/ceylon-leaf/ceylon-quality-rating.png', alt: 'Ceylon Leaf grades and payment rates' },
    ],
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
    images: [
      { src: '/images/projects/smart-credit/smart-credit-dashboard.png', alt: 'Smart Credit Plus admin dashboard' },
      { src: '/images/projects/smart-credit/smart-credit-kyc.png', alt: 'Smart Credit Plus KYC review interface' },
      { src: '/images/projects/smart-credit/smart-credit-users.png', alt: 'Smart Credit Plus user management' },
      { src: '/images/projects/smart-credit/smart-credit-disputes.png', alt: 'Smart Credit Plus dispute management' },
      { src: '/images/projects/smart-credit/smart-credit-analytics.png', alt: 'Smart Credit Plus analytics dashboard' },
      { src: '/images/projects/smart-credit/smart-credit-lender-ads.png', alt: 'Smart Credit Plus lender advertisement management', supplementary: true },
      { src: '/images/projects/smart-credit/smart-credit-ad-boosts.png', alt: 'Smart Credit Plus ad boost management', supplementary: true },
    ],
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
    images: [
      { src: '/images/projects/grim-reaper/grim-reaper-active.png', alt: 'Grim Reaper animatronic illuminated during operation' },
      { src: '/images/projects/grim-reaper/grim-reaper-setup.png', alt: 'Grim Reaper animatronic physical setup' },
    ],
    visual: 'hardware',
  },
];
