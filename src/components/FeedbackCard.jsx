import React from "react";
import { quotes } from "../assets";
const FeedbackCard = ({ title, content, name, img }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card max-w-[370px]">
      <img src={quotes} className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-white text-[18px] leading-[32px] my-10">
        {content}
      </p>
      <div className="flex flex-row items-center">
        <img src={img} className="w-[48px] h-[48px] rounder-full " />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]" >{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
