import React from "react";
import image from "../Images/Home_section images/smart-speaker-house-control-inno.jpg";
function SmartHome() {
  return (
    <div className=" w-full h-full flex justify-center items-center gap-[5rem] rounded-3xl">
      {/* text div */}

      <div className="w-[38%] h-[80%] rounded-3xl flex flex-col gap-7 px-10 item-center justify-center">
        <h1 className="text-[2.7rem] font-semibold">About Smart Home</h1>
        <p>
          <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart Lighting
          Setup Media Room Setup
        </p>
        <p>
          <i className="fa-solid fa-check text-[#86AFC0]"></i> Media Room Setup
        </p>
        <p>
          <i className="fa-solid fa-check text-[#86AFC0]"></i> Home Theater
          Setup
        </p>
        <p>
          <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart Doorbell
          Installation
        </p>
        <p>
          <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart Thermostat
          Installation
        </p>
        <p>
          <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart Door Lock
          Installation
        </p>
        <div>
          <button className="px-8 py-4 rounded-full border border-[#86AFC0] text-[1.3rem] font-bold text-[#86AFC0] hover:bg-[#86AFC0] hover:text-white">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* image div */}

      <div className="w-[35%] h-[75%] rounded-[3rem] overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
    </div>
  );
}

export default SmartHome;
