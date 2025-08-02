"use client";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const skillSections = [
    {
      id: 1,
      title: "Frontend & Design",
      description: "Creating responsive, interactive user interfaces with modern frameworks and design systems.",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ],
      category: "Frontend"
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description: "Building intelligent applications using cutting-edge AI models and machine learning frameworks.",
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "LangChain", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ],
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Backend & APIs",
      description: "Developing scalable server-side applications and robust API architectures.",
      technologies: [
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      category: "Backend"
    },
    {
      id: 4,
      title: "DevOps & Tools",
      description: "Streamlining development workflows with modern tools and deployment strategies.",
      technologies: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ],
      category: "DevOps"
    }
  ];

  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center px-4 py-16 md:py-20 lg:py-20"
      id="skills"
    >
      <h2 className="mb-8 text-[28px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Technical Skills
      </h2>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
        {skillSections.map((skill) => (
          <motion.div
            key={skill.id}
            className="relative z-10 w-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 hover:bg-white/10 transition-all duration-300"
            initial="initial"
            animate="animate"
          >
            {/* Category Badge */}
            <div className="mb-4 sm:mb-6 flex items-center justify-start">
              <div className="rounded-lg bg-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
                <h3 className="text-[12px] font-semibold text-[#0E1016] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                  {skill.category}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <AnimatedTitle
                text={skill.title}
                className="text-[22px] leading-tight text-white sm:text-[24px] md:text-[28px] md:leading-tight lg:text-[32px] lg:leading-tight xl:text-[36px]"
                wordSpace="mr-[0.25em]"
                charSpace="-mr-[0.01em]"
              />
              
              <AnimatedBody
                text={skill.description}
                className="mt-3 text-[13px] font-medium text-[#95979D] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed"
              />
              
              {/* Technology Icons */}
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {skill.technologies.slice(0, 6).map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-[#0E1016]/30 px-2 py-1.5 sm:px-3 sm:py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={16}
                      height={16}
                      className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                    />
                    <span className="text-[11px] font-medium text-white sm:text-[12px] md:text-[13px]">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
