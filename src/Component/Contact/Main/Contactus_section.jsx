import React from "react";
import image from "../images/young-woman-using-home-technology5-min.jpg";

function Contactus_section() {
  return (
    <div className="w-full h-[48vh] bg-green-400">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-full bg-cover bg-center"
      >
        <div className="bg-[rgba(0,0,0,0.3)] w-full h-[48vh] flex justify-center items-center">
          <h1 className="text-[4rem] font-semibold text-white">Contact us</h1>
        </div>
      </div>
    </div>
  );
}

export default Contactus_section;
