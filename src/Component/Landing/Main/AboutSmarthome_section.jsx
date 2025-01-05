import React from "react";
import image from "../image/person-holding-smartphone-with-h.jpg";

function AboutSmarthome_section() {
  return (
    <div className="w-[80%] h-full mx-auto flex justify-center items-center gap-10">
      {/* image Div */}
      <div className="h-[80vh] w-[37%] rounded-[2.5rem] overflow-hidden">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>

      {/* content div  */}
      <div className="h-[80vh] w-[49%] bg-[#F1F6F9] text-center rounded-[2.5rem]">
        <div className="py-20 px-12">
          <h1 className="text-[2.8rem] font-semibold">About Smart Homes</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="flex justify-between items-center px-16">
          <div>
            <h2 className="text-[2rem] font-semibold text-[#86AFC0]">300+</h2>
            <h3 className="text-[#86AFC0]">HAPPY CLIENTS</h3>
          </div>
          <div>
            <h2 className="text-[2rem] font-semibold text-[#86AFC0]">10+</h2>
            <h3 className="text-[#86AFC0]">YEARS OF EXPERIENCE</h3>
          </div>
          <div>
            <h2 className="text-[2rem] font-semibold text-[#86AFC0]">17</h2>
            <h3 className="text-[#86AFC0]">AWARDS</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSmarthome_section;
