import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("menu");
  return (
    <nav className="w-full justify-center flex py-6 items-center">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex flex-1 justify-end items-center hidden ">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`text-[16px] font-poppins font-normal cursor-pointer ${active === item.title ? 'text-white' : 'text-dimWhite'} ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={()=> setActive(item.title)}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          src={toggle ? close : menu}
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient p-6 right-0 top-20 absolute mx-4 min-w-[140px] rounded-xl my-2 sidebar`}
        >
          <ul className="list-none sm:flex flex-1 flex-col text-center items-center ">
            {navLinks.map((item, index) => (  
              <li
                key={item.id}
                className={`text-[16px] font-poppins font-medium cursor-pointer ${active === item.title ? 'text-white' : 'text-dimWhite'} ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
                onClick={()=> setActive(item.title)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
