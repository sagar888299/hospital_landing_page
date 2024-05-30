import React from "react";

const dataArray = [
  { id: 1, name: "Dr. Awaatif Al", specality: "Dental Care" },
  { id: 2, name: "Dr. Filipa Gaspar", specality: "Cardiology" },
  { id: 3, name: "Dr. Sukhmeet Gorae", specality: "Neurological" },
  { id: 4, name: "Dr. Siri Jakobsson", specality: "Prediatrics" },
];

export default function Section4() {
  return (
    <div className="flex-col px-[120px] justify-center items-center text-[#002348] font-sans ">
      <div className="text-center text-5xl font-bold leading-loose mt-[46px]">
        We Have The Best Specialist
      </div>
      <div className="px-[370px] h-[78px] text-base font-normal leading-relaxed text-center">
        We have a wide experience in experience design and strategy, with
        locally-rooted knowledge.
      </div>
      <div className="flex justify-between">
        {dataArray.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[274px] h-[448px] border rounded-[12px] shadow-lg flex-col 
                             cursor-pointer shadow-lg  hover:outline-none hover:border-sky-500 hover:ring-1 hover:ring-sky-500"
            >
              <div className="h-[324px] bg-[#AED3E2] rounded-t-[12px] text-[#002348] text-left "></div>
              <div className="font-sans">
                <div className="pl-[34px] font-bold text-[24px] leading-[30.17px] mt-[25px]">
                  {item.name}
                </div>
                <div className=" pl-[34px] font-base text-[18px] leading-[22.63px] mt-[12px]">
                  {item.specality}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
