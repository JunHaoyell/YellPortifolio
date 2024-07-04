import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Email</span> :
              <a href="mailto:fdse0322-020@learning.educlaas.com">
                &nbsp;&nbsp; yan46648@gmail.com{" "}
              </a>
            </div>

            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Contact Phone Number</span>{" "}
              :
              <a href="mailto:fdse0322-020@learning.educlaas.com">
                &nbsp;&nbsp; +959 &nbsp;&nbsp; 762346978{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Yell's Portfolio 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
