"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { slideInFromTop,slideInFromRight, slideInFromLeft } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { Socials, projects } from '@/constants'

interface  Props {
    text: string;
    title: string;
    link: string;
    src: string;
    devtype: string;
    demolink: string;
    socialpost: string;
    frontend: string;
    backend: string;
}{

}

 const Project = ({ title, text, link, src, devtype, demolink, socialpost, frontend, backend }: Props) => (
    <motion.div
      id="projects"
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20  mt-4 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">{devtype}</h1>

        </motion.div>

        {frontend && (
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">{frontend}</h1>

        </motion.div>
        )}

        {backend && (
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">{backend}</h1>

        </motion.div>
        )}

        
  
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> 
            {title}
            </h2>
            
            
          </span>
          <motion.p
            variants={slideInFromLeft(0.8)}
             className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
            {text}
         </motion.p>
        </motion.div>

        <div className="h-full w-full flex flex-row gap-5 justify-center m-auto text-start">
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary flex-row text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href={link}
        >
          Check Source code Git Hub 
        </motion.a>
        {demolink && (
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-5 button-primary flex-row text-center text-white cursor-pointer rounded-lg w-[100px]"
          href={demolink}
        >
          See Demo
        </motion.a>
        )}
        {socialpost && (
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-5 button-primary flex-row text-center text-white cursor-pointer rounded-lg w-[200px] "
          href={socialpost}
        >
          See LinkedIn Post
        </motion.a>
        )}
      </div>

        </div>
        
  
      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
        <Image src={src} alt="work icons" height={550} width={650} />
      </motion.div>
    </motion.div>
  );
  
  const Projects = () => (
    < >
    <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-medium mt-[10px] text-center mb-[25px]'
        >
            Projects
    </motion.div>
    {projects.map((project, index) => (
      //@ts-ignore
        <Project key={index} {...project} />
      ))}
  
    </>
    );

export default Projects