import React from "react";
import Navbar from "../Components/navbar";
import Section1 from "../Components/Section1";
import Services from "../Components/Services";
import Section2 from "../Components/Section2";
import Section3 from "../Components/section3";
import Section4 from "../Components/Section4";
import Footer from "../Components/footer";
import Section5 from "../Components/Section5";
import '../Styles/style.css';  

const IndexPage = () => {
  return (
    <div>
      <div className="background1">  
        <Navbar contactbutton={true} />
        <Section1 />
      </div>
      <div className="h-[600px]">
        <Services />
      </div>
      <div className="h-[1127px]">
        <Section2/>
      </div>
      <div className="background2 h-[953px]">
        <Section3/>
      </div>
      <div className="h-[700px] bg-[#F8FDFF]">
        <Section5/>
      </div>
      <div className="h-[698px] bg-[#F8FDFF]">
        <Section4/>
      </div>
      <div className="h-[385px]">
       <Footer/>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
