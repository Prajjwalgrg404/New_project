import React from "react";
import Image from "../../Page1/images/digital-tablet-screen-with-smart-home-controller-wooden-table5.jpg";
import AboutSmarthome_section from "../../Landing/Main/AboutSmarthome_section"
function About_section() {
  return (
    <div className="w-full h-full">
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className="w-full h-[85vh] bg-cover bg-bottom"
      >
        <div className="w-full h-full bg-[rgba(0,0,0,.3)] flex justify-center items-center">
          <h1 className="text-white font-bold text-[5rem]">
            About Smart Homes
          </h1>
        </div>

        <div className="w-full h-full mx-auto flex justify-center items-center gap-10 absolute top-[25rem]">
            <AboutSmarthome_section/>
        </div>
      </div>
    </div>
  );
}

export default About_section;
