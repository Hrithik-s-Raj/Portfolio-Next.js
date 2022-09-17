import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex sticky p-5 top-0 justify-between max-w-7xl mx-auto z-20 xl:items-center  ">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex flex-row items-center "
      >
        {/* Social Icons */}

        <SocialIcon
          url="https://youtube.com/hrithiksraj"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/hrithiksraj"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/hrithiksraj"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <div className="flex flex-row items-center text-hray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div>
    </header>
  );
}

export default Header;
