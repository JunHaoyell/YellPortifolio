import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001217 backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Yell's Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] rounded-full bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-ful text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer hover:text-white hover:scale-105 transition-all hover:border-[1px] hover:p-[6px] rounded-3xl"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:text-white hover:scale-105 transition-all hover:border-[1px] hover:p-[6px] rounded-3xl"
            >
              Skills
            </a>
            <a
              href="#languages"
              className="cursor-pointer hover:text-white hover:scale-105 transition-all hover:border-[1px] hover:p-[6px] rounded-3xl"
            >
              Languages
            </a>
            <a
              href="#experience"
              className="cursor-pointer hover:text-white hover:scale-105 transition-all hover:border-[1px] hover:p-[6px] rounded-3xl"
            >
              Experiences
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-white hover:scale-105 transition-all hover:border-[1px] hover:p-[6px] rounded-3xl"
            >
              Project
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <a href={social.link} key={`social-${index}`}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
