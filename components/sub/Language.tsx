"use client"
import {motion} from 'framer-motion'
import { SparklesIcon } from "@heroicons/react/16/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import React from 'react'

const Language = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-medium mt-[10px] text-center mb-[25px]'
        >
            Spoken Languages
        </motion.div>
        
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            I'm a Chinese in Myanmar
          </h1>
        </motion.div>
        
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[40px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            trilingual Jun Hao
        </motion.div>
    </div>
  )
}

export default Language