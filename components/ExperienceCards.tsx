import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCards({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg mt-7 items-center space-y-2 flex-shrink-0 w-[500px]  md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-40 bg-[#292929]
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/04c7b348b02d2c82bf60"
        className="w-20 h-20  rounded-full mt-3 xl:w-[120px] xl:h-[120px] object-cover object-center "
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">Full Stack Developer</h4>
        <p className="font-bold text-xl mt-1">Kaar Technologies</p>

        <div className="flex space-x-2 my-1">
          <img
            className="h-5 w-5 rounded-full"
            src="https://w7.pngwing.com/pngs/934/398/png-transparent-js-node-logos-and-brands-line-filled-icon-thumbnail.png"
          />
        </div>

        <p className="uppercase py-1 text-gray-300">
          Started work.... - Ended....
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Summary points </li>
          <li>Summary points </li>
          <li>Summary points </li>
          <li>Summary points </li>
          <li>Summary points </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCards;
