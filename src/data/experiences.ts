export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description:
      'Led development of cloud-native applications and microservices architecture.',
  },
  {
    title: 'Software Developer',
    company: 'Digital Innovations',
    period: '2019 - 2021',
    description: 'Developed and maintained full-stack web applications.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2018 - 2019',
    description:
      'Built responsive web interfaces and implemented RESTful APIs.',
  },
];