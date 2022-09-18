import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I'm Hrithik.s.raj", "Wssup!", "Hey You"],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div>
        <Image
          className="rounded-full mt-5 relative  h-32 w-32  mx-auto object-cover "
          src="https://i.ibb.co/yhLVCcV/IMG-2609.jpg"
          height={130}
          width={130}
        />
      </div>
      <div>
        <h2 className="text-sm uppercase text-gray-500 mt-[-30px] pb-2 tracking-[15px]">
          {" "}
          Software Engineer
        </h2>
        <h1 className=" text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
