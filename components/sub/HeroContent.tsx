"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Welcome to my Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, there! I'm
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Yell Min Thu{" "}
            </h2>
            Having good Project Exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m an IT Student At &nbsp;&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            LithanEduclaas
          </span>
          &nbsp;&nbsp; learning Higher National Diploma in Computing with
          Experience in &nbsp;&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Frontend & Backend Development ,
          </span>
          &nbsp;&nbsp; including &nbsp;&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            UI/UX designing, Project Management, MySQL Database, RESTful
            api&nbsp;&nbsp;
          </span>
          and using wide range of software tools and techniques. Check out my
          Porjects and skills.
        </motion.p>

        {/* <motion.a
    variants={slideInFromLeft(1)}
    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
    href="https://educlaasglobal-my.sharepoint.com/:b:/g/personal/fdse0322-020_learning_educlaas_com/EYrpWbwt_q1BgfPZpJ5yTw8By8jDoFe6ZJo5-7fmsOiC4Q?e=fJAFge"
    >
       Download Resume
    </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/YellMinPf-removebg.png"
          alt="work icons"
          height={550}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};
export default HeroContent;
