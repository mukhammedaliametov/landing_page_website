import React, { useState } from "react";
import HeroBg from "../assets/hero_bg.png";
import MobileBg from "../assets/mobile_bg.jpg";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [nav, setNav] = useState(0);
  const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState("home");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  setNav(false);
  };

  const navItems = [
    { name: `${t('home')}`, link: "#home" },
    { name: `${t('aboutme')}`, link: "#aboutme" },
    { name: `${t('skills')}`, link: "#skills" },
    { name: `${t('portfolio')}`, link: "#portfolio" },
    { name: `${t('contacts')}`, link: "#contacts" },
  ];
  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(false);
  return (
    <section id="home" className="max-w-[1100px] mx-auto px-[16px] md:px-0">
      <div className="flex items-start justify-between">
        <div className="w-auto md:w-full flex flex-col md:flex-row justify-between gap-[15px] items-end py-[40px] font-poppins">
          <pre className="text-[45px] font-poppins font-semibold w-full md:w-auto">
            {t('name')}
          </pre>
          <pre className="text-[18px] font-poppins">
            {t("hero_title")}
          </pre>
          <div className="hidden md:flex flex-col items-center font-semibold gap-[6px] uppercase">
            <p
              className={`cursor-pointer [writing-mode:vertical-rl] rotate-180 ${
                i18n.language === "en" ? "text-black" : "text-[#828282]"
              }`}
              onClick={() => changeLanguage("en")}
            >
              Eng
            </p>
            <span className="w-[18px] h-[3px] bg-black"></span>
            <p
              className={`cursor-pointer [writing-mode:vertical-rl] rotate-180 ${
                i18n.language === "ru" ? "text-black" : "text-[#828282]"
              }`}
              onClick={() => changeLanguage("ru")}
            >
              Ru
            </p>
          </div>
        </div>
        <div
          className="block md:hidden text-[38px] mt-[45px]"
          onClick={handleClick}
        >
          <IoMdMenu />
        </div>
        <nav
          className={`block md:hidden fixed font-poppins w-full top-0 bg-white h-[100vh] pt-[50px] transition-all duration-300 z-998 ${
            nav ? "translate-x-0" : "-translate-x-[500px]"
          }`}
        >
          <ul className="flex flex-col gap-[30px] ml-[10px]">
            {navItems.map((item, index) => {
              return (
                <li key={index} onClick={closeNav}>
                  <a
                    href={item.link}
                    onClick={() => setActiveSection(item.name)}
                className={`font-poppins text-[32px] capitalize font-semibold duration-300 ${
                  activeSection === item.name ? "text-black" : "text-[#828282]"
                }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <div
              className="absolute right-0 text-[38px] mr-[30px] mt-[-5px] text-[#828282]"
              onClick={closeNav}
            >
              <IoMdClose />
            </div>
            <div className="absolute bottom-[50px] right-0 mr-[30px] flex flex-col items-center font-semibold gap-[12px] uppercase">
              <p className={`text-[38px] cursor-pointer [writing-mode:vertical-rl] ${
                i18n.language === "en" ? "text-black" : "text-[#828282]"
              }`}
              onClick={() => changeLanguage("en")}>
                Eng
              </p>
              <span className="w-[28px] h-[3px] bg-black"></span>
              <p className={`text-[38px] cursor-pointer [writing-mode:vertical-rl] ${
                i18n.language === "ru" ? "text-black" : "text-[#828282]"
              }`}
              onClick={() => changeLanguage("ru")}>
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
