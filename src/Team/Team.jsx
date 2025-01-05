import React from "react";
import Team_section from "./Main/Team_section";
import Ourteam_section from "./Main/Ourteam_section";
import KnowMore_section from "../Component/Page1/Main/KnowMore_section";
import Form_section from "../Component/Page1/Main/Form_section";
import Footer from "../Component/Page1/Main/Footer";

function Team() {
  return (
    <div>
      <div className="w-full bg-white">
        <Team_section />
      </div>
      <div className="py-10 w-full bg-[#F1F6F9]">
        <Ourteam_section />
        <KnowMore_section />
      </div>
      <div className="w-full bg-white">
        <Form_section />
      </div>
      <div className="w-full h-[14rem] bg-[#333333]">
        <Footer />
      </div>
    </div>
  );
}

export default Team;
