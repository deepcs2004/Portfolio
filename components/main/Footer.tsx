import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import Link from "next/link";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {


    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mb-8">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Founder</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px] text-bold text-purple-600">Sandeep Jain</span>
                        </p>
                    </div>


                    <div className="flex flex-column">
                        <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                            <div className="font-bold text-[16px]">Social Media</div>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <a href="https://www.instagram.com/scalllper"> <RxInstagramLogo /></a>
                                <span className="text-[15px] ml-[6px]">Instagram</span>
                            </p>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <a href="https://twitter.com/scalllper"> <RxTwitterLogo /></a>
                                <span className="text-[15px] ml-[6px]">Twitter</span>
                            </p>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <a href="https://www.linkedin.com/in/deep-pal2004/"> <RxLinkedinLogo /></a>
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </p>
                        </div>
                        <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                            <div className="font-bold text-[16px]">About</div>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">

                                <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                            </p>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">

                                <span className="text-[15px] ml-[6px]">Learn about us</span>
                            </p>

                            <p className="flex flex-row items-center my-[15px] cursor-pointer">

                                <span className="text-[15px] ml-[6px]">Terms & Condition</span>
                            </p>

                        </div>




                    </div>
                </div>


                <p className="flex flex-row items-center my-[15px] cursor-pointer pb-4 ">

                    <a href="mailto:contactmoneyview@gmail.com" className="text-[15px] ml-[6px] text-red-500 hover:text-green-700 break-words">
                        contactmoneyview@gmail.com
                    </a>
                </p>

                <div className="mb-[20px] text-[15px] text-center text-bold">
                    &copy; MoneyView 2023 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
