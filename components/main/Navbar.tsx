import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 lg:px-10 px-2  ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto lg:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/money.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer sm:w-20 sm:h-20 hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Money<span className="text-purple-500">View</span>
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About us
            </a>
            <a href="#skills" className="cursor-pointer">
              Services
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row  lg:gap-5 gap-2">
          {Socials.map((social) => (
            // <Link to={social.toLink}>
            <a
              href={social.toLink}  
              target="_blank"        
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
