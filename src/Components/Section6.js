import React from "react";

export default function Section6() {
  return (
    <>
      <div className="flex flex-row-reverse">
        <div className="absolute background3 flex flex-row-reverse"></div>/
      </div>
      <div className="flex mx-[120px] justify-center items-center font-sans">
        <div className="text-center my-[110px] w-[1198px] h-[478px] bg-[#007FF4] rounded-[12px] z-20">
          <div className="font-bold text-[48px] leading-[78px] text-[#FFFFFF]  mt-[44px] ">
            Subscribe to Newsletter
          </div>
          <div className="font-base text-[20px] leading-[39px] text-[#FFFFFF] mt-[12px]">
            We have a wide experience in experience design and strategy,
          </div>
          <div className="h-[120px] bg-[#FFFFFF] mx-[178px] rounded-[12px] flex justify-between px-[36px] items-center mt-[80px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-[546px] h-[39px]"
            />
            <button
              type="submit"
              className="w-[176px] h-[74px] rounded-full bg-[#007FF4] text-[#FFFFFF]"
            >
              <span className="font-bold text-[16px]"> Send Now </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
