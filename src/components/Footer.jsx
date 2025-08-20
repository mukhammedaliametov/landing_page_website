import React from "react";
import { FaLinkedinIn, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
            const { t, i18n } = useTranslation();
  return (
    <footer id="contacts" className="w-full bg-white py-12 px-[12px] text-center font-poppins">
      <h2 className="text-center text-[38px] font-semibold mb-[30px] capitalize">{t('contacts')}</h2>
      <pre className="text-gray-600 mb-6 font-poppins">
        {t('footer_info')}
      </pre>
      <button className="bg-black cursor-pointer text-white px-10 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition">
        {t('button')}
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
      <pre className="text-gray-400 text-sm mt-6 font-poppins">
        {t('footer_end')}
      </pre>
    </footer>
  );
};

export default Footer;
