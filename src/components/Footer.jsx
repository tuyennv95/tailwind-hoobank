import React from "react";
import styles, { layout } from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
const Footer = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-[1] flex flex-col justify-start mr-10`}>
          <img src={logo} className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex flex-row flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col md:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary ${
                        index !== footerLink.links.map - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row pt-6 flex-col border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-white text-[18px] leading-[27px] text-center">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Footer;
