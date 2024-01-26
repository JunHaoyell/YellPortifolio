"use client"
import { Backend_skill, Frontend_skill, skill_tools, language_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import Skill from '../sub/Skill'

import {motion} from 'framer-motion'
import { SparklesIcon } from "@heroicons/react/16/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Language from '../sub/Language'


const Skills = () => {
  return (
    <>
   <section 
   id='skills'
   className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
   style={{transform:"scale(0.9)"}}
   >
    <Skill />
    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) =>(
            <SkillDataProvider key={`frontend-${index}`}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
            />
        ))}

    </div>

    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image, index) =>(
            <SkillDataProvider key={`backend-${index}`}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
            />
        ))}

    </div>

    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {skill_tools.map((image, index) =>(
            <SkillDataProvider key={`tools-${index}`}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
            />
        ))}

    </div>


    <div className='w-full h-full absolute '>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
            <video 
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
            />

        </div>

    </div>
    
    </section>

    <section 
   id='languages'
   className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 '
   style={{transform:"scale(0.9)"}}
   >
    <Language />
    <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {language_skill.map((image, index) =>(
            <SkillDataProvider key={`language-${index}`}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
            />
        ))}

    </div>
   </section>


    </>
  )
}

export default Skills
