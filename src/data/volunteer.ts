export interface VolunteerExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  image: string;
}

export const volunteerExperiences: VolunteerExperience[] = [
  {
    title: 'Code Mentor',
    organization: 'Tech4Youth',
    period: '2022 - Present',
    description:
      'Mentoring underprivileged youth in web development fundamentals and modern programming practices.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    period: '2020 - Present',
    description:
      'Contributing to open-source projects focused on education and accessibility tools.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Community Workshop Leader',
    organization: 'Local Tech Community',
    period: '2021 - Present',
    description:
      'Organizing and leading workshops on web development and software engineering practices.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'STEM Education Volunteer',
    organization: 'Code.org',
    period: '2022 - Present',
    description:
      'Teaching coding fundamentals to middle school students through interactive workshops.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
];