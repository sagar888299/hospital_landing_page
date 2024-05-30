import React from "react";

function Section1() {
  return (
    <div>
      <div className="flex px-[120px] gap-[79px] justify-between">
        <div className="relative  mt-[174px] font-sans text-[#002348]  ">
          <div className="font-bold w-[340px] h-[30px] text-[24px] leading-[30.17px]">
            Welcome to MediCare+ Clinic
          </div>
          <div className="font-bold mt-[30px] h-[78px] w-[559px] text-[64px] leading-[78px]">
            Best Specialists
          </div>
          <div className="w-[546px] h-[122px] mt-[30px] text-[20px] leading-[39px]">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </div>
          <div className="flex w-[546px] mt-[30px] h-[60px] text-[16px] font-bold leading-[20.11px] justify-between">
            <div className="flex justify-center items-center w-[259px] rounded-full bg-[#007FF4] text-[#FFFFFF]">
              Make an Appointment
            </div>
            <div className="flex justify-center items-center w-[259px] text-[#007FF4]">
              Departments
            </div>
          </div>
        </div>
        <div className="w-[574px] h-[672px] top-[50px] rounded-[20px] bg-[#EBEEFF] relative"></div>
      </div>
    </div>
  );
}

export default Section1;
