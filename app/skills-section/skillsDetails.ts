export type SkillProps = {
  id: number;
  name: string;
  category: "frontend" | "backend" | "ai-ml" | "database" | "tools" | "cloud";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  logo?: string;
  color?: string;
};

export const skills: SkillProps[] = [
  // Programming Languages
  {
    id: 1,
    name: "Python",
    category: "backend",
    proficiency: "expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776ab"
  },
  {
    id: 2,
    name: "JavaScript",
    category: "frontend",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#f7df1e"
  },
  {
    id: 3,
    name: "TypeScript",
    category: "frontend",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178c6"
  },

  // Frontend Technologies
  {
    id: 4,
    name: "React",
    category: "frontend",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61dafb"
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "#06b6d4"
  },
  {
    id: 6,
    name: "HTML",
    category: "frontend",
    proficiency: "expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#e34f26"
  },
  {
    id: 7,
    name: "CSS",
    category: "frontend",
    proficiency: "expert",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572b6"
  },

  // Backend Technologies
  {
    id: 8,
    name: "Django",
    category: "backend",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    color: "#092e20"
  },
  {
    id: 9,
    name: "FastAPI",
    category: "backend",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    color: "#009688"
  },
  {
    id: 10,
    name: "Node.js",
    category: "backend",
    proficiency: "intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933"
  },
  {
    id: 11,
    name: "Flask",
    category: "backend",
    proficiency: "intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    color: "#000000"
  },
  {
    id: 12,
    name: "Streamlit",
    category: "backend",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
    color: "#ff4b4b"
  },

  // AI/ML & Data
  {
    id: 13,
    name: "Hugging Face",
    category: "ai-ml",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    color: "#ffcc4d"
  },
  {
    id: 14,
    name: "LangChain",
    category: "ai-ml",
    proficiency: "advanced",
    color: "#1c3c3c"
  },
  {
    id: 15,
    name: "CrewAI",
    category: "ai-ml",
    proficiency: "advanced",
    color: "#ff6b35"
  },
  {
    id: 16,
    name: "Ollama",
    category: "ai-ml",
    proficiency: "intermediate",
    color: "#000000"
  },
  {
    id: 17,
    name: "NumPy",
    category: "ai-ml",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "#013243"
  },
  {
    id: 18,
    name: "Pandas",
    category: "ai-ml",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "#150458"
  },

  // Databases
  {
    id: 19,
    name: "MongoDB",
    category: "database",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47a248"
  },
  {
    id: 20,
    name: "PyMongo",
    category: "database",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47a248"
  },
  {
    id: 21,
    name: "MySQL",
    category: "database",
    proficiency: "intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479a1"
  },
  {
    id: 22,
    name: "PostgreSQL",
    category: "database",
    proficiency: "intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#336791"
  },

  // Tools & Cloud
  {
    id: 23,
    name: "Git",
    category: "tools",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#f05032"
  },
  {
    id: 24,
    name: "GitHub",
    category: "tools",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717"
  },
  {
    id: 25,
    name: "Docker",
    category: "tools",
    proficiency: "beginner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ed"
  },
  {
    id: 26,
    name: "Postman",
    category: "tools",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    color: "#ff6c37"
  },
  {
    id: 27,
    name: "Vercel",
    category: "cloud",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    color: "#000000"
  },
  {
    id: 28,
    name: "Netlify",
    category: "cloud",
    proficiency: "advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    color: "#00c7b7"
  },
  {
    id: 29,
    name: "Notion",
    category: "tools",
    proficiency: "expert",
    color: "#000000"
  },
  {
    id: 30,
    name: "FlutterFlow",
    category: "frontend",
    proficiency: "beginner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    color: "#02569b"
  }
];

export const skillCategories = [
  { id: "frontend", name: "Frontend", color: "#61dafb" },
  { id: "backend", name: "Backend", color: "#339933" },
  { id: "ai-ml", name: "AI/ML", color: "#ff6b35" },
  { id: "database", name: "Database", color: "#47a248" },
  { id: "tools", name: "Tools", color: "#f05032" },
  { id: "cloud", name: "Cloud", color: "#00c7b7" }
];
