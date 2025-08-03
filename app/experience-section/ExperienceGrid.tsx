import { experiences } from "./experienceDetails";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const ExperienceGrid = () => {
  return (
    <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:gap-8">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
};

export default ExperienceGrid;
