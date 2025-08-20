import React from "react";
import AboutImg from "../assets/mobile_bg.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t, i18n } = useTranslation();
  return (
    <div
      id="aboutme"
      className="bg-[#F4F4F4] flex justify-center items-center pt-[50px] md:pt-auto py-[90px] my-[90px] p-0"
    >
      <div className="max-w-[800px] px-[16px] mx-auto">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-center gap-[25px] md:gap-[50px] w-full ">
          <div>
            <img
              src={AboutImg}
              alt="about_img"
              className="hidden md:block w-[450px] rounded-[20px]"
            />
          </div>
          <div className="font-poppins">
            <h2 className="text-[32px] capitalize font-semibold">{t('aboutme')}</h2>
            <p className="flex flex-col gap-[20px] mt-[20px]">
              <span>
                {t("about_info1")}
              </span>
              <span>
                {t("about_info2")}
              </span>
              <span>
                {t("about_info3")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
