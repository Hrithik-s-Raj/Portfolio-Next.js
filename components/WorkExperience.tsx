import React from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl md:text-2xl md:-mt-[70px]    ">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-7 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
