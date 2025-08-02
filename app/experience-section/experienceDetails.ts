export type ExperienceProps = {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: "internship" | "full-time" | "freelance" | "contract";
  logo?: string;
  website?: string;
};

export const experiences: ExperienceProps[] = [
  {
    id: 1,
    company: "SNS Innovation Hub",
    position: "Junior Software Intern",
    duration: "2024 - Present",
    location: "Remote",
    description: [
      "Developed real-time AI-powered applications for clients using Python, LangChain, and CrewAI",
      "Built intelligent systems integrating Gemini AI for enhanced user experiences",
      "Collaborated with cross-functional teams to deliver scalable software solutions",
      "Implemented full-stack features spanning frontend design systems to backend orchestration"
    ],
    technologies: ["Python", "LangChain", "CrewAI", "Gemini AI", "Django", "React"],
    type: "internship",
    logo: "/companies/sns-innovation-hub.svg",
    website: "https://snsinnovationhub.com"
  },
  {
    id: 2,
    company: "NextRun Digital",
    position: "Full-Stack Developer",
    duration: "2023 - 2024",
    location: "Remote",
    description: [
      "Designed and developed responsive web applications using modern frontend frameworks",
      "Implemented backend APIs and database management systems",
      "Optimized application performance and user experience across multiple platforms",
      "Collaborated with designers and product managers to deliver high-quality digital solutions"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    type: "freelance",
    logo: "/companies/nextrun-digital.svg",
    website: "https://nextrundigital.com"
  }
];
