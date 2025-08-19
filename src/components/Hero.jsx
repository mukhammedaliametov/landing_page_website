import React from "react";
import HeroBg from "../assets/hero_bg.png";
import MobileBg from '../assets/mobile_bg.jpg';
import { IoMdMenu } from "react-icons/io";

const Hero = () => {
  return (
    <section id="home" className="max-w-[1100px] mx-auto px-[16px] md:px-0">
      <div className="flex items-start justify-between">
        <div className="w-auto md:w-full flex flex-col md:flex-row justify-between gap-[15px] items-end py-[40px] font-poppins">
          <h2 className="text-[45px] font-semibold w-full md:w-auto">
            Denis <br /> Novik
          </h2>
          <p className="text-[18px]">
            UX | UI designer <br /> 24 years old, Minsk
          </p>
          <div className="hidden md:flex flex-col items-center font-semibold gap-[6px] uppercase">
            <p className="cursor-pointer [writing-mode:vertical-rl] rotate-180">
              Eng
            </p>
            <span className="w-[18px] h-[3px] bg-black"></span>
            <p className="cursor-pointer text-[#828282] [writing-mode:vertical-rl] rotate-180">
              Ru
            </p>
          </div>
        </div>
          <div className="block md:hidden text-[38px] mt-[45px]">
            <IoMdMenu />
          </div>
      </div>
      <div>
        <img src={HeroBg} alt="hero_bg" className="hidden md:block w-full h-[440px]" />
        <img src={MobileBg} alt="mobile_bg" className="block md:hidden" />
      </div>
    </section>
  );
};

export default Hero;
