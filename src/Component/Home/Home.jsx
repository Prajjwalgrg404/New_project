import React from "react";
import Home_section from "./main/Home_section";
import SmartHome from "./main/SmartHome";
import Manage_section from "./main/Manage_section";
import Background_image from "./main/Background_image";
import AboutSmarthome_section from "../Landing/Main/AboutSmarthome_section";
import People_say_section from "../Landing/Main/People_say_section";
import Ourwork from "./main/Ourwork";
import Background_image2 from "./main/Background_image2";
import Yourhome_section from "../Home/main/Yourhome_section";
import Form_section from "../Page1/Main/Form_section";
import Map_section from "../Contact/Main/Map_section";
import Footer from "../Page1/Main/Footer";
import Ourteam_section from "../../Team/Main/Ourteam_section";
import Questions_section from "../Page2/Main/Questions_section";


function Home() {
  return (
    <>
      <div className="w-full pb-[15rem] bg-[#F2F2F2]">
        <Home_section />
      </div>
      <div className="w-full h-screen bg-[#F2F2F2]">
        <SmartHome />
      </div>
      <div className="w-full py-10">
        <Manage_section />
      </div>
      <div className="w-full h-screen bg-red-300">
        <Background_image />
      </div>
      <div className="w-full h-full mx-auto my-20 flex justify-center items-center gap-10">
        <AboutSmarthome_section />
      </div>
      <div className="w-full bg-[#F2F2F2] py-14">
        <People_say_section />
      </div>
      <div className="w-full">
        <Ourwork/>
      </div>
      <div className="w-full h-screen">
        <Background_image2/>
      </div>
      <div className="w-full h-screen">
        <Yourhome_section/>
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

export default Home;
