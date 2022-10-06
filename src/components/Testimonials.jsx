import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
  return (
    <section
    id="clients"
      className={`${styles.paddingY} ${styles.flexStart} flex-col relative`}
    >
      <div className="absolute w-[60%] h-[60%] blue__gradient z-[0] rounded-full bottom-[40] -right-[50%]" />
      <div className="w-full flex md:flex-row flex-col justify-between items-center relative sm:mb-16 mb-6 z-[1]">
        <h4 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h4>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-between w-full feedback-container relative z-[1]">
            {feedback.map((card)=> 
                <FeedbackCard key={card.id} {...card} />
            )}
      </div>
    </section>
  );
};

export default Testimonials;
