import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Section3() {
  return (
    <div className="flex px-[120px] space-x-8 items-center">
      <div>
        <div className="font-bold font-sans text-[54px] leading-[78px] text-[#003B79]">
          Clinic With Innovative
        </div>
        <div className="font-base font-sans text-[20px] leading-[39px] text-[#002348] mt-[34px]">
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </div>
        <div className="flex items-center justify-center w-[186px] h-[60px] rounded-full bg-[#007FF4] text-[#FFFFFF] mt-[44px]">
          <div className="font-bold font-sans text-[16px] leading-[20.11px]">
            Learn More
          </div>
        </div>
      </div>
      <div className="my-[170px]">
        <div className="relative w-[282px] h-[236px] text-center border  rounded-lg shadow-lg">
          <StaticImage
            src="../images/doctor-woman.png"
            width={252}
            height={252}
            className="absolute  top-[-70px] left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div className="relative translate-y-[-100px] ml-[26px] text-[#002348] font-bold text-[24px]">
          Qualified Doctors
        </div>
        <div className="relative w-[282px] h-[236px] text-center border mt-[170px] rounded-lg shadow-lg">
          <StaticImage
            src="../images/doctor-woman copy 2.png"
            width={232}
            height={232}
            className="absolute top-[-70px] left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div className="relative translate-y-[-116px] ml-[26px] text-[#002348] font-bold text-[24px]">
          24 Hours Service
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-[282px] h-[236px] border rounded-lg shadow-lg">
          <StaticImage
            src="../images/doctor-woman copy.png"
            width={232}
            height={232}
            className="absolute top-[-70px] left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div className="relative translate-y-[-116px] translate-x-[-20px] text-[#002348] font-bold text-[24px]">
          Emergency Care
        </div>
      </div>
    </div>
  );
}
