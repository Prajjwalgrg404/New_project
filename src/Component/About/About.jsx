import React from "react";
import About_section from "./Main/About_section";
import Peopletrust from "../../Team/Main/Peopletrust"
import Whoweare_section from "./Main/Whoweare_section";
import KnowMore_section from "../Page1/Main/KnowMore_section";
import Ourservices from "./Main/Ourservices"
import SmartHomeAbout_section from "./Main/SmartHomeAbout_section";
import Ourteam_section from "../../Team/Main/Ourteam_section";
import Form_section from "../Page1/Main/Form_section";
import Footer from "../Page1/Main/Footer";

function About() {
  return (  
    <>
      <div className="h-screen w-full ">
        <About_section />
      </div>
      <div className="py-14">
        <Peopletrust />
      </div>
      <div className="w-full h-screen ">
        <Whoweare_section />
      </div>
      <div className="py-10 w-full bg-[#F1F6F9]">
        <KnowMore_section />
        <Ourservices/>
        <SmartHomeAbout_section/>
      </div>
      <div className="py-10 w-full">
        <Ourteam_section />
      </div>
      <div className="w-full bg-white">
        <Form_section />
      </div>
      <div className="w-full h-[14rem] bg-[#333333]">
        <Footer />
      </div>
    </>
  );
}

export default About;
