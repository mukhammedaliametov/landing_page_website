import React, { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";

const Totop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <a
          href="#home"
          className="block md:hidden fixed py-[15px] px-[15px] bottom-0 right-0 text-[28px] bg-[#F4F4F4] shadow-xl mr-[20px] mb-[40px] rounded-[10px] transition-all duration-300"
        >
          <FaAngleUp />
        </a>
      )}
    </>
  );
};

export default Totop;
