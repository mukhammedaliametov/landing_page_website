import React from "react";
import AboutImg from "../assets/mobile_bg.jpg";

const About = () => {
  return (
    <div
      id="aboutme"
      className="bg-[#F4F4F4] flex justify-center items-center py-[90px] my-[90px] p-0"
    >
      <div className="max-w-[800px] px-[16px] mx-auto">
        <div className="flex flex-col md:flex-row  items-center justify-center gap-[25px] md:gap-[50px] w-full ">
          <div>
            <img
              src={AboutImg}
              alt="about_img"
              className="w-[450px] rounded-[20px]"
            />
          </div>
          <div className="font-poppins">
            <h2 className="text-[32px] font-semibold">About Me</h2>
            <p className="flex flex-col gap-[20px] mt-[20px]">
              <span>
                Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in
                design and everything connected with it.
              </span>
              <span>
                I'm studying at courses "Web and mobile design interfaces" in
                IT-Academy.
              </span>
              <span>
                Ready to implement excellent projects with wonderful people.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
