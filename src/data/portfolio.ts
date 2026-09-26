export type JourneyMilestone = {
  id: string;
  category: string;
  date: string;
  title: string;
  organization?: string;
  description: string;
  supportingText?: string;
  icon: 'education' | 'leadership' | 'logistics' | 'learning';
  highlighted?: boolean;
};

export type UniversityInvolvement = {
  id: string;
  role: string;
  event: string;
  date: string;
};

export const portfolio: {
  journey: JourneyMilestone[];
  universityInvolvement: UniversityInvolvement[];
} = {
  journey: [
    {
      id: 'information-technology-degree',
      category: 'Education',
      date: '2024 — Present',
      title: 'BSc (Hons) in Information Technology',
      organization: 'University of Moratuwa, Sri Lanka',
      description: 'Currently pursuing a Bachelor of Science Honours degree in Information Technology, building a strong foundation in software development, problem-solving, databases, and modern computing technologies.',
      icon: 'education',
      highlighted: true,
    },
    {
      id: 'cheer-for-mora-2025',
      category: 'Leadership',
      date: 'August 2025',
      title: 'Co-Chairperson — Cheer for Mora 2025',
      description: 'Led the planning and execution of a university-wide spirit and engagement event, coordinating committee activities, logistics, promotion, and crowd engagement.',
      supportingText: 'Strengthened leadership, teamwork, communication, and event coordination skills.',
      icon: 'leadership',
    },
    {
      id: 'food-festival-2025',
      category: 'Leadership',
      date: 'July 2025',
      title: 'Logistics Team Lead — Food Festival 2025',
      description: 'Led the Stall Coordination Team while contributing to the Logistics Team for a large-scale university food festival.',
      supportingText: 'Coordinated stall allocation, vendor support, and event logistics to improve operational flow and attendee experience.',
      icon: 'logistics',
    },
    {
      id: 'ai-ml-engineering-course',
      category: 'Professional Development',
      date: 'Ongoing',
      title: 'AI & ML Engineering Course',
      organization: 'IJSE',
      description: 'Following a 6-month AI & ML Engineering program to broaden my technical knowledge alongside my Information Technology degree.',
      supportingText: 'Supplementary upskilling in AI and machine learning while maintaining Software Engineering and Full-Stack Development as my main career focus.',
      icon: 'learning',
    },
  ],
  universityInvolvement: [
    { id: 'fit-and-furious', role: 'Organizing Committee Member', event: 'Fit and Furious', date: 'Feb 2025' },
    { id: 'cheer-for-mora-2024', role: 'Organizing Committee Member', event: 'Cheer for Mora 2024', date: 'Aug 2024' },
    { id: 'food-carnival-2024', role: 'Logistics Team Member', event: 'Food Carnival 2024', date: 'Jun 2024 to Aug 2024' },
    { id: 'cricket-fiesta-2024', role: 'Sponsorship Calling & Logistics Team Member', event: 'Cricket Fiesta 2024', date: 'May 2024 to Sep 2024' },
  ],
};
