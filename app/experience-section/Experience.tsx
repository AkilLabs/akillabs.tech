import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import { experiences } from "./experienceDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="experience"
    >
      <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Professional Experience
      </h2>

      <div className="grid w-[90%] grid-cols-1 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            style={{
              backgroundColor: "#212531",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              position: "relative",
            }}
            className={`relative z-10 h-[500px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[550px] md:h-[500px] lg:h-[450px]`}
            initial="initial"
            animate="animate"
          >
            {/* Company Logo/Background */}
            {experience.logo && (
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                className={`absolute -bottom-2 w-[40%] opacity-15 sm:w-[50%] md:w-[35%] lg:max-w-[30%] ${
                  experience.id % 2 === 0 ? "right-4" : "left-4"
                }`}
                width={200}
                height={200}
              />
            )}

            {/* Action Buttons */}
            <div className={`absolute top-6 text-[#0E1016] ${
              experience.id % 2 === 0 ? "left-8 lg:left-14" : "right-8 lg:right-14"
            } flex items-center justify-center gap-4 lg:top-10`}>
              
              {experience.website && (
                <Link
                  href={experience.website}
                  target="_blank"
                  aria-label={`Visit ${experience.company} website`}
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
              )}
              
              <div className="rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
                <h3 className="text-[14px] font-semibold text-[#0E1016] md:text-[16px] lg:text-[18px]">
                  {experience.duration}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className={`absolute text-white ${
              experience.id % 2 === 0 
                ? "left-8 lg:left-14 top-28 lg:top-32" 
                : "right-8 lg:right-14 top-28 lg:top-32"
            } max-w-[85%] lg:max-w-[60%]`}>
              
              <AnimatedTitle
                text={experience.position}
                className="text-[28px] leading-tight text-white md:text-[32px] md:leading-tight lg:text-[36px] lg:leading-tight"
                wordSpace="mr-[0.25em]"
                charSpace="-mr-[0.01em]"
              />
              
              <AnimatedBody
                text={`${experience.company} • ${experience.location}`}
                className="mt-2 text-[16px] font-bold text-[#e4ded7] md:text-[18px] lg:text-[20px]"
              />
              
              <AnimatedBody
                text={experience.description[0]}
                className="mt-4 text-[14px] font-semibold text-[#95979D] md:text-[16px] lg:text-[18px]"
              />
              
              {/* Key Highlights */}
              <div className="mt-4 space-y-1">
                {experience.description.slice(1, 3).map((desc, index) => (
                  <AnimatedBody
                    key={index}
                    text={`• ${desc}`}
                    className="text-[13px] text-[#95979D] md:text-[14px] lg:text-[15px]"
                  />
                ))}
              </div>
              
              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.slice(0, 6).map((tech, index) => (
                  <motion.span
                    key={index}
                    className="rounded-lg bg-[#0E1016]/30 px-3 py-1 text-[11px] font-medium text-[#e4ded7] backdrop-blur-sm md:text-[12px] lg:text-[13px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
