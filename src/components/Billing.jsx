import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 rounded-full white-gradient top-0 h-[50%] w-[50%]" />
        <div className="absolute z-[0] -left-1/2 rounded-full pink-gradient bottom-0 h-[50%] w-[50%]" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} m-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            className="w-[130px] h-[42px] cursor-pointer object-contain mr-5"
          />
          <img
            src={google}
            className="w-[130px] h-[42px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
