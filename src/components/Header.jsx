import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: `${t("home")}`, link: "#home" },
    { name: `${t("aboutme")}`, link: "#aboutme" },
    { name: `${t("skills")}`, link: "#skills" },
    { name: `${t("portfolio")}`, link: "#portfolio" },
    { name: `${t("contacts")}`, link: "#contacts" },
  ];
  return (
    <div className="hidden md:block bg-white sticky w-full top-0 z-999">
      <nav className="w-[1100px] mx-auto border-b-2 border-[#A1A1A1] py-[25px]">
        <ul className="flex items-center justify-between text-[18px]">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => setActiveSection(item.name)}
                className={`font-poppins text-[18px] capitalize font-semibold duration-300 ${
                  activeSection === item.name ? "text-black" : "text-[#828282]"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
