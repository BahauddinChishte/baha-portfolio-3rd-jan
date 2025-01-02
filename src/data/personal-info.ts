export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  images: string[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Baha',
  role: 'Software Engineer',
  bio: "I'm a software engineer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.",
  images: [
    'https://avatars.githubusercontent.com/u/91181868?v=4',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  ],
  contact: {
    email: 'hello@example.com',
    phone: '+1 (555) 123-4567',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
};