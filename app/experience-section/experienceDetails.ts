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
    company: "SNS Institutions",
    position: "Junior Software Intern",
    duration: "October 2024 - Present",
    location: "Onsite",
    description: [
  "Collaborated with cross-functional teams to build and deliver scalable, AI-driven software solutions",
  "Worked on real-time client projects powered by Generative AI and Agentic AI using Python, LangChain, and CrewAI",
  "Developed intelligent systems integrating Gemini AI to enhance user interaction and experience",
],
    technologies: ["Python", "Javascript", "CrewAI", "Gemini AI", "Django", "React", "MongoDB"],
    type: "internship",
    logo: "/experinence/sns_innovation_hub.png",
    website: "https://snsihub.ai/"
  },
  {
    id: 2,
    company: "NextRun Digital",
    position: "Academic Intern",
    duration: "June 2025 - Present",
    location: "Remote",
    description: [
        "Implemented backend APIs and managed databases to support data-driven applications",
        "Built and optimized data workflows using Databricks for scalable data processing and analytics",
        "Worked on MCP server integration to streamline multi-platform communication and automation",
         ],
    technologies: ["Databricks", "MCP Server", "Openai", "CrewAI"],
    type: "Internship",
    logo: "/experinence/nextrun_digital.png",
    website: "https://nextrun.io"
  }
];
