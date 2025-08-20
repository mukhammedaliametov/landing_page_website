import React from 'react';
import Portfolio1 from '../assets/portfolio1.png';
import Portfolio2 from '../assets/portfolio2.png';
import Portfolio3 from '../assets/portfolio3.png';

const Portfolio = () => {
    return (
        <div id='portfolio' className='bg-[#F4F4F4] py-[90px] px-[16px]'>
            <div className='max-w-[1100px] mx-auto font-poppins'>
            <h2 className='text-center text-[38px] font-semibold mb-[30px]'>Portfolio</h2>
            <div className='flex flex-col gap-[60px]'>
                <div>
                    <img src={Portfolio1} alt="portfolio" />
                    <h3 className='text-center underline text-[22px] my-[26px] md:my-[46px] cursor-pointer'>Online fashion store - Homepage</h3>
                </div>
                <div>
                    <img src={Portfolio2} alt="portfolio" />
                    <h3 className='text-center underline text-[22px] my-[26px] md:my-[46px] cursor-pointer'>Reebok Store - Concept</h3>
                </div>
                <div>
                    <img src={Portfolio3} alt="portfolio" />
                    <h3 className='text-center underline text-[22px] my-[26px] md:my-[46px] cursor-pointer'>Braun Landing Page - Concept</h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Portfolio;