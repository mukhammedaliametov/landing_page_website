import React from "react";
import Photoshop from "../assets/adobe_photoshop.png";
import Illustrator from "../assets/adobe_illustrator.png";
import Effect from "../assets/adobe_effect.png";
import Figma from "../assets/figma.png";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

const Skills = () => {
  const skillsItems = [
    { img: Photoshop, name: "Adobe Photoshop" },
    { img: Illustrator, name: "adobe illustrator" },
    { img: Effect, name: "Adobe After Effects" },
    { img: Figma, name: "figma" },
  ];
  return (
    <div className="max-w-[1100px] mx-auto pb-[80px]" id="skills">
        <div className="text-center font-poppins">
      <h2 className="text-[38px] font-semibold ">Skills</h2>
      <p className="text-[18px] my-[30px] md:my-[60px]">I work in such programs as</p>
        </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-[50px] md:gap-[30px] mt-[50px] md:mt-[80px]">
        {skillsItems.map((item, index) => {
          return (
            <div key={index} className="font-poppins">
              <img src={item.img} alt={item.name} className="mx-auto" />
              <p className="capitalize text-center text-[22px] md:text-[18px] text-[#828282] font-semibold my-[10px] w-[70%] mx-auto">{item.name}</p>
              <div className="flex items-center gap-[10px] my-[15px] ml-[5px] md:ml-[10px] text-[30px] md:text-[20px]">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarOutline />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
