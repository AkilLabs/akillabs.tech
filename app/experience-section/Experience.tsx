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
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center px-4 py-16 md:py-20 lg:py-20"
      id="experience"
    >
      <h2 className="mb-8 text-[28px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Professional Experience
      </h2>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="relative z-10 w-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Type Badge */}
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <div className="rounded-lg bg-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
                <h3 className="text-[12px] font-semibold text-[#0E1016] sm:text-[14px] md:text-[16px] lg:text-[18px] capitalize">
                  {experience.type}
                </h3>
              </div>
              
              {/* Duration */}
              <div className="rounded-lg bg-[#0E1016]/30 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 backdrop-blur-sm">
                <span className="text-[12px] font-medium text-[#e4ded7] sm:text-[14px] md:text-[16px]">
                  {experience.duration}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              {/* Header with Logo */}
              <div className="flex items-start gap-4 mb-3">
                {experience.logo && (
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm flex-shrink-0">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={32}
                      height={32}
                      className="rounded-lg object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <AnimatedTitle
                    text={experience.position}
                    className="text-[22px] leading-tight text-white sm:text-[24px] md:text-[28px] md:leading-tight lg:text-[32px] lg:leading-tight xl:text-[36px]"
                    wordSpace="mr-[0.25em]"
                    charSpace="-mr-[0.01em]"
                  />
                  <p className="text-[14px] font-semibold text-[#e4ded7] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-1">
                    {experience.company} • {experience.location}
                  </p>
                </div>
                
                {/* Website Link */}
                {experience.website && (
                  <Link
                    href={experience.website}
                    target="_blank"
                    aria-label={`Visit ${experience.company} website`}
                    className="rounded-full"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      className="w-[20px] rounded-full bg-white p-5 text-[20px] sm:w-[25px] sm:text-[24px] lg:w-[30px] lg:text-[28px] text-[#0E1016]"
                      data-blobity
                      data-blobity-radius="38"
                      data-blobity-offset-x="4"
                      data-blobity-offset-y="4"
                      data-blobity-magnetic="true"
                    />
                  </Link>
                )}
              </div>
              
              <AnimatedBody
                text={experience.description[0]}
                className="mt-3 text-[13px] font-medium text-[#95979D] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed"
              />
              
              {/* Key Highlights */}
              <div className="mt-4 space-y-2">
                {experience.description.slice(1, 3).map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e4ded7] flex-shrink-0"></div>
                    <p className="text-[12px] text-[#95979D] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Technologies */}
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-[#0E1016]/30 px-2 py-1.5 sm:px-3 sm:py-2 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[11px] font-medium text-white sm:text-[12px] md:text-[13px]">
                      {tech}
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

export default Experience;
