import React from "react";
import FAQ_section from "./Main/FAQ_section";
import Questions_section from "./Main/Questions_section";
import Form_section from "../Page1/Main/Form_section";
import Map_section from "../Contact/Main/Map_section";
import Footer from "../Page1/Main/Footer";

function Page2() {
  return (
    <div>
      <div className="w-full bg-white">
        <FAQ_section />
      </div>
      <div className="w-full py-24 bg-white">
        <Questions_section />
      </div>
      <div className="w-full bg-white">
        <Form_section />
      </div>
      <div className="w-full bg-white">
        <Map_section />
      </div>
      <div className="w-full h-[14rem] bg-[#333333]">
        <Footer />
      </div>
    </div>
  );
}

export default Page2;
