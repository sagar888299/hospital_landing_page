import React from "react";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section6 from "../Components/Section6";
import Section5 from "../Components/Section5";
import Footer from "../Components/Footer";
import '../Styles/style.css';  

const IndexPage = () => {
  return (
    <div>
      <div className="background1">  
        <Navbar contactbutton={true} />
        <Section1 />
      </div>
      <div className="h-[600px]">
        <Section2 />
      </div>
      <div className="h-[1127px]">
        <Section3/>
      </div>
      <div className="background2 h-[953px]">
        <Section4/>
      </div>
      <div className="h-[700px] bg-[#F8FDFF]">
        <Section5/>
      </div>
      <div className="h-[698px] bg-[#F8FDFF]">
        <Section6/>
      </div>
      <div className="h-[385px]">
       <Footer/>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
