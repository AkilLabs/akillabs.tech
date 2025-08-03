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
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Company Logo - Left aligned and centered */}
          {experience.logo && (
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-[#e4ded7]/10 p-3 shadow-md md:h-20 md:w-20">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Fallback to company initials if image fails to load
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex h-full w-full items-center justify-center rounded bg-[#e4ded7]/20 text-[#e4ded7] font-bold text-lg md:text-xl">
                          ${experience.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </motion.div>
          )}
          
          {/* Company Info - Better organized */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              {experience.website ? (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] font-bold text-[#e4ded7] transition-colors hover:text-white sm:text-[18px] md:text-[20px]"
                >
                  <AnimatedBody text={experience.company} />
                </a>
              ) : (
                <AnimatedBody
                  text={experience.company}
                  className="text-[16px] font-bold text-[#e4ded7] sm:text-[18px] md:text-[20px]"
                />
              )}
              <span className="hidden text-[#95a3b3] sm:block">•</span>
              <AnimatedBody
                text={experience.location}
                className="text-[14px] text-[#95a3b3] sm:text-[15px] md:text-[16px]"
              />
            </div>
            
            <AnimatedTitle
              text={experience.position}
              className="text-[15px] font-semibold text-[#95a3b3] sm:text-[16px] md:text-[18px]"
              wordSpace="mr-[0.25em]"
              charSpace="mr-[0.01em]"
            />
          </div>
        </div>
        
        {/* Duration and Type - Right aligned */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <AnimatedBody
            text={experience.duration}
            className="text-[13px] font-bold text-[#e4ded7] sm:text-[14px] md:text-[16px]"
          />
          <span className="rounded-full bg-gradient-to-r from-[#e4ded7]/15 to-[#e4ded7]/10 px-3 py-1.5 text-[11px] font-medium text-[#e4ded7] border border-[#e4ded7]/20 sm:text-[12px] md:text-[13px]">
            {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="relative flex flex-col gap-4">
        {/* Enhanced background with better visual hierarchy */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#e4ded7]/8 via-[#e4ded7]/3 to-transparent opacity-60"></div>
        
        <div className="relative z-10 flex flex-col gap-4 p-5 sm:p-6">
          <div className="grid gap-3 sm:gap-4">
            {experience.description.map((desc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
              >
                {/* Professional bullet point */}
                <motion.div 
                  className="relative mt-2 flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#e4ded7] via-[#e4ded7]/80 to-[#95a3b3] shadow-lg"></div>
                  {/* Expanding ring on hover */}
                  <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#e4ded7] opacity-0 transition-all duration-300 group-hover:opacity-30 group-hover:scale-150"></div>
                </motion.div>
                
                {/* Enhanced description text */}
                <motion.div
                  className="flex-1"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedBody
                    text={desc}
                    className="text-[14px] leading-relaxed text-[#95a3b3] transition-all duration-300 group-hover:text-[#e4ded7] sm:text-[15px] md:text-[16px] md:leading-7"
                  />
                  {/* Professional accent line */}
                  <div className="mt-1 h-px w-0 bg-gradient-to-r from-[#e4ded7]/40 to-transparent transition-all duration-500 group-hover:w-1/3"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Professional left accent border */}
        <div className="absolute left-0 top-5 bottom-5 w-1 bg-gradient-to-b from-[#e4ded7]/20 via-[#e4ded7]/40 to-[#e4ded7]/20 rounded-full"></div>
      </div>

      {/* Technologies */}
      <div className="relative border-t border-[#e4ded7]/10 pt-5">
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-4 text-[12px] font-bold uppercase tracking-wider text-[#e4ded7]/70 sm:text-[13px] md:text-[14px]"
        >
          Key Technologies
        </motion.h4>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {experience.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 6px 20px rgba(228, 222, 215, 0.2)" 
              }}
              className="group relative cursor-default rounded-lg bg-gradient-to-br from-[#e4ded7]/12 via-[#e4ded7]/8 to-[#e4ded7]/6 px-3 py-2 text-[12px] font-semibold text-[#e4ded7] transition-all duration-300 hover:from-[#e4ded7]/20 hover:to-[#e4ded7]/15 hover:text-white hover:shadow-lg sm:px-4 sm:py-2.5 sm:text-[13px] md:text-[14px]"
            >
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#e4ded7]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Tech name with better spacing */}
              <span className="relative z-10 tracking-wide">{tech}</span>
              
              {/* Professional border with gradient */}
              <div className="absolute inset-0 rounded-lg border border-[#e4ded7]/25 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#e4ded7]/40"></div>
              
              {/* Subtle top highlight */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#e4ded7]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
