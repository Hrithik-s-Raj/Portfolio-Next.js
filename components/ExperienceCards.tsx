import { motion } from "framer-motion";
import { url } from "inspector";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCards({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg mt-7 items-center space-y-2 flex-shrink-0 w-[400px]  md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-40 bg-[#292929]
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        className="w-20 h-20  rounded-full mt-3 xl:w-[120px] xl:h-[120px] object-cover object-center "
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience.company}</p>

        <div className="flex space-x-2 my-1">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-5 w-5 rounded-full"
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>

        <p className="uppercase py-1 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCards;
