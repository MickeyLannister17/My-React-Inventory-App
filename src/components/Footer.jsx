import React from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";

function Footer() {
  return (
    <div className="max-w-[1640px] mx-auto border">
      <div className="flex bg-primary mx-auto py-4 px-2 md:px-4 justify-between md:justify-around">
        <p className="text-gray-500 text-[10px] md:text-[20px] font-serif pt-2 md:pt-0">
          &copy; REGVM Lannister 2023. <span>All rights reserved.</span>
        </p>
        <div className="flex items-center gap-4 md:gap-14">
          <SlSocialTwitter color="gray" size={30} />
          <SiLinkedin color="gray" size={30} />
          <GoMarkGithub color="gray" size={30} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
