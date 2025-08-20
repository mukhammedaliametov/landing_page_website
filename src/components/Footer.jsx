import React from "react";
import { FaLinkedinIn, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contacts" className="w-full bg-white py-12 px-[12px] text-center font-poppins">
      <h2 className="text-center text-[38px] font-semibold mb-[30px]">Contacts</h2>
      <p className="text-gray-600 mb-6">
        Want to know more or just chat? <br /> You are welcome!
      </p>
      <button className="bg-black cursor-pointer text-white px-10 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition">
        Send message
      </button>
      <div className="flex justify-center gap-6 mt-[75px]">
        <a href="#" className="text-black text-[30px] hover:text-gray-600">
          <FaLinkedinIn />
        </a>
        <a href="#" className="text-black text-[30px] hover:text-gray-600">
          <FaInstagram />
        </a>
        <a href="#" className="text-black text-[30px] hover:text-gray-600">
          <FaBehance />
        </a>
        <a href="#" className="text-black text-[30px] hover:text-gray-600">
          <FaDribbble />
        </a>
      </div>
      <p className="text-gray-400 text-sm mt-6">
        Like me on <br /> LinkedIn, Instagram, Behance, Dribbble
      </p>
    </footer>
  );
};

export default Footer;
