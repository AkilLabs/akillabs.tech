import { skills } from "./skillsDetails";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const SkillsGrid = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* Skills Count */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[14px] font-medium text-[#95a3b3] md:text-[16px]">
          {skills.length} technologies and tools
        </span>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        layout
        transition={{ duration: 0.6 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
          >
            <SkillCard skill={skill} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsGrid;
