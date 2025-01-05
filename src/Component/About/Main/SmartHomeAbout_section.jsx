import React from 'react'
import image from "../Images/home-automation-with-device_4.jpg"

function SmartHomeAbout_section() {
  return (
      <div>
        <div className=" w-[90%] h-screen mx-auto  flex justify-center items-center gap-10 rounded-3xl">
          {/* image div */}

          <div className="w-[38%] h-[80%] bg-blue-200 rounded-3xl overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>

          {/* text div */}

          <div className="w-[38%] h-[80%] bg-[#F1F6F9] rounded-3xl flex flex-col gap-7 px-10 item-center justify-center">
            <h1 className="text-[2rem] font-semibold">About Smart Home</h1>
            <p>
              <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart
              Lighting Setup Media Room Setup
            </p>
            <p>
              <i className="fa-solid fa-check text-[#86AFC0]"></i> Media Room
              Setup
            </p>
            <p>
              <i className="fa-solid fa-check text-[#86AFC0]"></i> Home Theater
              Setup
            </p>
            <p>
              <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart
              Doorbell Installation
            </p>
            <p>
              <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart
              Thermostat Installation
            </p>
            <p>
              <i className="fa-solid fa-check text-[#86AFC0]"></i> Smart Door
              Lock Installation
            </p>
            <div>
              <button className="px-8 py-4 rounded-full border border-[#86AFC0] text-[1.3rem] font-bold text-[#86AFC0] hover:bg-[#86AFC0] hover:text-white">
                LEARN MORE
              </button>
            </div>
        </div>
        </div>
        </div>
  )
}

export default SmartHomeAbout_section