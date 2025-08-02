import { ExperienceProps } from "./experienceDetails";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

type ExperienceCardProps = {
  experience: ExperienceProps;
  index: number;
};

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      className="flex w-full flex-col gap-4 rounded-xl border border-[#212531] bg-[#0c0e16] p-4 shadow-lg transition-all duration-300 hover:border-[#e4ded7]/20 hover:shadow-xl sm:gap-6 sm:p-6 md:p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Company Logo */}
          {experience.logo && (
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-[#e4ded7]/10 p-2 sm:h-12 sm:w-12 md:h-14 md:w-14">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Fallback to company initials if image fails to load
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex h-full w-full items-center justify-center rounded bg-[#e4ded7]/20 text-[#e4ded7] font-bold text-sm sm:text-lg">
                          ${experience.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </motion.div>
          )}
          
          {/* Company Info */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <AnimatedTitle
              text={experience.position}
              className="text-[18px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[24px]"
              wordSpace="mr-[0.25em]"
              charSpace="mr-[0.01em]"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              {experience.website ? (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-semibold text-[#95a3b3] transition-colors hover:text-[#e4ded7] sm:text-[16px] md:text-[18px]"
                >
                  <AnimatedBody text={experience.company} />
                </a>
              ) : (
                <AnimatedBody
                  text={experience.company}
                  className="text-[14px] font-semibold text-[#95a3b3] sm:text-[16px] md:text-[18px]"
                />
              )}
              <span className="hidden text-[#95a3b3] sm:block">•</span>
              <AnimatedBody
                text={experience.location}
                className="text-[12px] text-[#95a3b3] sm:text-[14px] md:text-[16px]"
              />
            </div>
          </div>
        </div>
        
        {/* Duration and Type */}
        <div className="flex flex-col items-start gap-1 sm:items-end sm:gap-2">
          <AnimatedBody
            text={experience.duration}
            className="text-[12px] font-medium text-[#e4ded7] sm:text-[14px] md:text-[16px]"
          />
          <span className="rounded-full bg-[#e4ded7]/10 px-2 py-1 text-[10px] font-medium text-[#e4ded7] sm:px-3 sm:text-[12px] md:text-[14px]">
            {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="relative flex flex-col gap-3 sm:gap-4">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#e4ded7]/5 via-transparent to-[#e4ded7]/5 opacity-50"></div>
        
        <div className="relative z-10 flex flex-col gap-3 p-3 sm:gap-4 sm:p-4">
          {experience.description.map((desc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              viewport={{ once: true }}
              className="group flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
            >
              {/* Enhanced bullet point with gradient and animation */}
              <motion.div 
                className="relative mt-1.5 flex-shrink-0 sm:mt-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#e4ded7] to-[#95a3b3] shadow-lg shadow-[#e4ded7]/30 sm:h-2 sm:w-2"></div>
                {/* Subtle ring effect on hover */}
                <div className="absolute inset-0 h-1.5 w-1.5 rounded-full bg-[#e4ded7] opacity-0 transition-opacity duration-300 group-hover:opacity-20 group-hover:animate-pulse sm:h-2 sm:w-2"></div>
              </motion.div>
              
              {/* Enhanced text with better spacing and hover effects */}
              <motion.div
                className="flex-1"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedBody
                  text={desc}
                  className="text-[13px] leading-relaxed text-[#95a3b3] transition-all duration-300 group-hover:text-[#e4ded7]/90 sm:text-[14px] md:text-[16px] md:leading-7"
                />
                {/* Subtle underline effect */}
                <div className="h-px w-0 bg-gradient-to-r from-[#e4ded7]/30 to-transparent transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative side border */}
        <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-[#e4ded7]/30 to-transparent sm:top-4 sm:bottom-4"></div>
      </div>

      {/* Technologies */}
      <div className="relative">
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#e4ded7]/60 sm:mb-3 sm:text-[12px] md:text-[14px]"
        >
          Technologies Used
        </motion.h4>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {experience.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 12px rgba(228, 222, 215, 0.15)" 
              }}
              className="group relative cursor-default rounded-lg bg-gradient-to-r from-[#e4ded7]/8 to-[#e4ded7]/5 px-2 py-1.5 text-[11px] font-medium text-[#e4ded7] transition-all duration-300 hover:from-[#e4ded7]/15 hover:to-[#e4ded7]/10 hover:text-white sm:px-3 sm:py-2 sm:text-[12px] md:text-[14px]"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-[#e4ded7]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Tech name */}
              <span className="relative z-10">{tech}</span>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-lg border border-[#e4ded7]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
