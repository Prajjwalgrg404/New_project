import React from "react";
import Contactus_section from "./Main/Contactus_section";
import Offices_section from "./Main/Offices_section";
import Form_section from "../Page1/Main/Form_section";
import Map_section from "./Main/Map_section";
import Footer from "../Page1/Main/Footer";

function Contact() {
  return (
    <>
      <div className="w-full bg-white">
        <Contactus_section />
      </div>
      <div className="w-full h-screen bg-white">
        <Offices_section />
      </div>
      <div className="w-full my-20 bg-white">
        <Form_section />
      </div>
      <div className="w-full bg-white">
        <Map_section />
      </div>

      <div className="w-full h-[14rem] bg-[#333333]">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
