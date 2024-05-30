import React from "react";
import Navbar from "./navbar";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const dataArray = [
  { id: 1, value: "facebook", src: "Group 26.png" },
  { id: 2, value: "google", src: "Group 26 Copy.png" },
  { id: 3, value: "twitter", src: "Group 26 Copy 2.png" },
];

export default function Footer() {
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
    <div className="">
      <div className="h-[144px] bg-[#F7FBFF] ">
        <Navbar
        contactbutton={false}/>
      </div>
      <div className=" px-[120px] bg-[#ECF4FF] h-[281px] ">
      <div className="flex gap-[9px] ">
        {dataArray.map((item) => {
          const imageNode = images.find(
            (image) => image.node.base === item.src
          );
          const image = getImage(
            imageNode?.node.childImageSharp.gatsbyImageData
          );
          return (
            <div key={item.id} className="mt-[49px]">
              <div>
                <GatsbyImage
                  image={image}
                  alt={item.value}
                  width = {51}
                  height = {51}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-sans text-base font-light leading-9 text-left text-[#667C94] mt-[16px]">
         ©2023 - 011BQ 
      </div>
      </div>
    </div>
  );
}
