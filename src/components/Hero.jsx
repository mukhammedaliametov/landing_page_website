import React, {useState} from "react";
import HeroBg from "../assets/hero_bg.png";
import MobileBg from "../assets/mobile_bg.jpg";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Hero = () => {
    const [nav, setNav] = useState(0);
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#aboutme" },
    { name: "Skills", link: "#skills" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contacts", link: "#contacts" },
  ];
  const handleClick = () => setNav(!nav)
  const closeNav = () => setNav(false);
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
        <div className="block md:hidden text-[38px] mt-[45px]" onClick={handleClick}>
          <IoMdMenu />
        </div>
        <nav className={`block md:hidden absolute font-poppins w-full top-0 bg-white h-[100vh] pt-[50px] transition-all duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col gap-[30px] ml-[10px]">
            {navItems.map((item, index) => {
              return (
                <li key={index} onClick={closeNav}>
                  <a href={item.link} className="text-[32px] font-semibold text-[#828282]">
                    {item.name}
                  </a>
                </li>
              );
            })}
            <div className="absolute right-0 text-[38px] mr-[30px] mt-[-5px] text-[#828282]" onClick={closeNav}>
                <IoMdClose />
            </div>
            <div className="absolute bottom-[50px] right-0 mr-[30px] flex flex-col items-center font-semibold gap-[12px] uppercase">
            <p className="text-[34px] cursor-pointer [writing-mode:vertical-rl]">
              Eng
            </p>
            <span className="w-[28px] h-[3px] bg-black"></span>
            <p className="text-[34px] cursor-pointer text-[#828282] [writing-mode:vertical-rl]">
              Ru
            </p>
          </div>
          </ul>
        </nav>
      </div>
      <div>
        <img
          src={HeroBg}
          alt="hero_bg"
          className="hidden md:block w-full h-[440px]"
        />
        <img src={MobileBg} alt="mobile_bg" className="block md:hidden" />
      </div>
    </section>
  );
};

export default Hero;
