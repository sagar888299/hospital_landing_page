import React from "react";

function Navbar({ contactbutton }) {
  return (
    <div className="flex px-[120px]">
      <div className="flex w-full justify-between items-center h-[90px]  relative">
        <div className=" h-[43px] mt-[40px] font-sans font-bold text-[34px] leading-[42.74px]">
          <span className="text-[#0073FF]">Medi</span>
          <span className="text-orange-300">Care+</span>
        </div>
        <div>
          <div className="flex justify-between items-center w-[586px] h-[20px] mt-[20px] font-sans font-bold text-[16px] leading-[20.11px] text-[#0073FF]">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>News</div>
            {contactbutton && (
              <div className="w-[170px] h-[50px] ">
                <div className="flex w-[170px] h-[50px] bg-[#007FF4] rounded-full justify-center items-center">
                  <span className="font-sans font-bold text-[16px] leading-[20.11px] text-[#FFFFFF]">
                    Contact
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
