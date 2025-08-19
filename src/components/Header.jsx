import React from "react";

const Header = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#aboutme" },
    { name: "Skills", link: "#skills" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contacts", link: "#contacts" },
  ];
  return (
    <div className="hidden md:block bg-white sticky w-full top-0 z-999">
      <nav className="w-[1100px] mx-auto border-b-2 border-[#A1A1A1] py-[25px]">
        <ul className="flex items-center justify-between text-[18px]">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="font-poppins text-[18px] font-semibold text-[#828282] hover:text-black duration-300">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
