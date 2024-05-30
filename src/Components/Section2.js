import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const dataArray = [
  { id: 1, value: "Dental Care", src: "tooth.png", src2: "tooth2.png" },
  { id: 2, value: "Pulmonary", src: "lung.png", src2: "lungs.png" },
  { id: 3, value: "Neurological", src: "human_brains.png", src2: "human_brains2.png" },
  { id: 4, value: "Pediatrics", src: "pediatrics.png", src2: "pediatrics1.png" },
];

export default function Section2() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(png|jpg|jpeg)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                placeholder: BLURRED
                transformOptions: { fit: CONTAIN }
              )
            }
          }
        }
      }
    }
  `);

  const images = data.allFile.edges;

  return (
    <div className="flex-col px-[120px]  bg-[#F8FDFF] justify-center items-center text-[#002348] font-sans">
      <div className="text-center text-5xl font-bold leading-loose mt-[46px]">
        Our Services
      </div>
      <div className="px-[370px] h-[78px] text-base font-normal leading-relaxed text-center">
        We provide the most full medical services, so every person could have
        the opportunity to receive qualitative medical help.
      </div>
      <div className="flex justify-between mt-[69px]">
        {dataArray.map((item) => {
          const imageNode = images.find((image) => image.node.base === item.src);
          const imageNode2 = images.find((image) => image.node.base === item.src2);
          const image = getImage(imageNode?.node.childImageSharp.gatsbyImageData);
          const image2 = getImage(imageNode2?.node.childImageSharp.gatsbyImageData);

          return (
            <div
              key={item.id}
              className="service-card bg-[#FFFFFF] w-[273px] h-[323px] border rounded-[12px] shadow-lg flex-col items-center 
                         transition-all duration-500 ease-in-out hover:bg-[#007EF3] hover:h-[383px] cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="pl-[44px] mt-[44px] h-[128px]">
                <GatsbyImage
                  image={hoveredItem === item.id && image2 ? image2 : image}
                  alt={item.value}
                  className="mr-2 text-blue-500"
                />
              </div>
              <div
                className={`font-sans font-bold pl-[44px] mt-[55px] text-xl leading-[30.17px] text-left transition-colors duration-500 ${hoveredItem === item.id ? "text-white" : "text-[#002348]"}`}
              >
                {item.value}
              </div>
              {hoveredItem === item.id && (
                <div className="mt-10 pl-[44px] text-white text-[16px]">
                  LEARN MORE <span className="ml-[98px]">&gt;</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
