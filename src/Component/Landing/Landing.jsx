import React from "react";
import Landing_section from "./Main/Landing_section";
import People_say_section from "./Main/People_say_section";
import AboutSmarthome_section from "./Main/AboutSmarthome_section";
import YourHome_section from "./Main/YourHome_section";
import BackgroundImage_Section from "./Main/BackgroundImage_Section";
import ManageEverthing_section from "./Main/ManageEverthing_section";
import Smarthome_section from "./Main/Smarthome_section";
import Ourteam_section from "../../Team/Main/Ourteam_section";
import Questions_section from "../Page2/Main/Questions_section";
import Footer from "../Page1/Main/Footer";
import Map_section from "../Contact/Main/Map_section";
import Form_section from "../Page1/Main/Form_section";


function Landing() {
  return (
    <>
      <div className="w-full pb-[15rem] bg-[#F1F6F9]">
        <Landing_section />
      </div>
      <div className="w-full pt-28 bg-[#F1F6F9]">
        <People_say_section />
      </div>
      <div className="w-full h-screen">
        <AboutSmarthome_section />
      </div>
      <div className="w-full h-screen">
        <YourHome_section />
      </div>
      <div className="w-full h-screen ">
        <BackgroundImage_Section />
      </div>
      <div className="w-full h-screen">
        <ManageEverthing_section />
      </div>
      <div className="w-full h-screen bg-[#86AFC0]">
        <Smarthome_section />
      </div>
      <div className="py-10 w-full bg-[#F1F6F9]">
        <Ourteam_section />
      </div>
      <div className="w-full py-24 bg-white">
        <Questions_section />
      </div>
      <div className="w-full my-12 bg-white">
        <Form_section />
      </div>
      <div className="w-full bg-white">
        <Map_section/>
      </div>
      <div className="w-full h-[14rem] bg-[#333333]">
        <Footer />
        </div>
    </>
  );
}

export default Landing;
