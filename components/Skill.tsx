import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className=" group relative flex cursor-pointer  ">
      <motion.img
        initial={{
          x: directionLeft ? -150 : 150,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
        className="  rounded-full object-cover h-14 overflow-hidden w-14 border border-gray-500  filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:w-14 md:h-14 xl:h-14 xl:w-14 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-md font-bold text-black opacity-100 ">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
