import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="flex items-end space-x-1  w-full justify-center">
          <p
            className={
              isDarkMode
                ? " text-white text-[45px] font-[600]"
                : `text-[#1e1e1e] text-[45px] font-[600]`
            }
          >
            Ngelale
          </p>
          <div className="w-[10px] h-[10px] bg-[#ec1552] rounded-full" />
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          preciousngelale@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Precious Ngelale. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
