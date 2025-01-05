import React from "react";
import image from "../image/smart-speaker-house-control-inno.jpg";
import image1 from "../image/image/1295090-06fd91ee.png"
import image2 from "../image/image/3712541-2f0989d8.png"
import image3 from "../image/image/4234057-402e5d41.png"


function Smarthome_section() {
    const div_css = "flex flex-col items-center";

  return (
    <div className="w-full h-full flex justify-start items-center gap-5">
      <div className="w-[40%] h-[80vh] flex absolute left-[-3rem] rounded-[3rem] overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-auto h-[80vh] pl-[38rem] px-10 text-white">
        <div className="px-5 py-5">
          <h1 className="text-[3rem] ">Smart Home</h1>
          <p className="text-xl py-5 mb-5">
            Sample text. Click to select the Text Element. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <button className="px-12 py-5 rounded-full border hover:bg-white hover:text-black font-semibold">
            VIEW MORE
          </button>
        </div>
        <div className="flex justify-start items-center gap-[6rem] pt-16 text-center">
          <div className={div_css}>
            <img className="w-[7rem] border px-4 py-4 bg-white rounded-full object-cotain" src={image1} alt="" />
            <h2 className="font-semibold">Wirelessly Connects</h2>
          </div>
          <div className={div_css}>
            <img className="w-[7rem] border px-4 py-4 bg-white rounded-full object-cotain" src={image2} alt="" />
            <h2>Managed Centrally</h2>
          </div>
          <div className={div_css}>
            <img className="w-[7rem] border px-4 py-4 bg-white rounded-full object-cotain" src={image3} alt="" />
            <h2>Smart Applications</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smarthome_section;
