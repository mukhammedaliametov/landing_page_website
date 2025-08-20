import React from 'react';
import { FaAngleUp } from "react-icons/fa6";

const Totop = () => {
    return (
            <a href="#home" className='fixed py-[15px] px-[15px] bottom-0 right-0 text-[28px] bg-[#F4F4F4] shadow-xl mr-[20px] mb-[40px] rounded-[10px]'>
            <FaAngleUp />
            </a>
    );
};

export default Totop;