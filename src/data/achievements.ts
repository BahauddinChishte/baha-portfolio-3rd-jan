export interface Achievement {
  title: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  image: string;
}

export const achievements: Achievement[] = [
  {
    title: 'AWS Certified Solutions Architect',
    category: 'certificates',
    date: '2023',
    organization: 'Amazon Web Services',
    description:
      'Achieved professional certification demonstrating expertise in designing distributed systems and deploying applications on AWS infrastructure.',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Innovation Award',
    category: 'awards',
    date: '2023',
    organization: 'Tech Conference 2023',
    description:
      'Recognized for developing an innovative AI-powered solution that revolutionized customer service automation.',
    image:
      'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hackathon Winner',
    category: 'achievements',
    date: '2022',
    organization: 'Global Tech Hackathon',
    description:
      'Led a team of four to victory by creating a sustainable technology solution for reducing urban waste management costs.',
    image:
      'https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&w=800&q=80',
  },
];