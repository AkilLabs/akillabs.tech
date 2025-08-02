import { SkillProps } from "./skillsDetails";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type SkillCardProps = {
  skill: SkillProps;
  index: number;
};

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center rounded-xl border border-[#212531] bg-[#0c0e16] p-6 shadow-lg transition-all duration-300 hover:border-[#e4ded7]/20 hover:shadow-xl hover:scale-105"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#e4ded7]/5 via-transparent to-[#e4ded7]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        initial={false}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Skill Logo */}
      <motion.div
        className="relative mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-[#e4ded7]/10 p-3 transition-all duration-300 group-hover:bg-[#e4ded7]/20"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.05 + 0.2,
          type: "spring",
          stiffness: 200 
        }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        {skill.logo && !imageError ? (
          <Image
            src={skill.logo}
            alt={`${skill.name} logo`}
            width={40}
            height={40}
            className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
            priority={index < 12}
          />
        ) : (
          <div 
            className="flex h-full w-full items-center justify-center rounded bg-gradient-to-br from-[#e4ded7]/20 to-[#e4ded7]/10 text-[#e4ded7] font-bold text-lg transition-all duration-300 group-hover:from-[#e4ded7]/30 group-hover:to-[#e4ded7]/20"
            style={{ 
              backgroundColor: skill.color ? `${skill.color}20` : undefined 
            }}
          >
            {skill.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-30"
          style={{ 
            backgroundColor: skill.color,
            filter: "blur(8px)",
            zIndex: -1 
          }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
        />
      </motion.div>

      {/* Skill Name */}
      <motion.h3
        className="text-center text-[14px] font-semibold text-[#e4ded7] transition-all duration-300 group-hover:text-white md:text-[16px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
        viewport={{ once: true }}
      >
        {skill.name}
      </motion.h3>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ 
          borderColor: skill.color || '#e4ded7',
          borderWidth: '1px'
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
      />
    </motion.div>
  );
};

export default SkillCard;
