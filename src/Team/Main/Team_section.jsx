import React from "react";
import Image from "../image/business-people-looking-plans-office5.jpg";
import details from "./Team_section_details";
import Peopletrust from "./Peopletrust";

function Team_section() {
  return (
    <div className="w-full">
      <div className="w-full h-[85vh]">
        <div
          style={{ backgroundImage: `url(${Image})` }}
          className="w-full h-full bg-cover bg-center"
        >
          <div className="bg-[rgba(0,0,0,0.3)] w-full h-[85vh] flex justify-center items-center">
            <h1 className="text-[4rem] font-semibold text-white">Our Team</h1>
          </div>

          {/* card div */}

          <div className="w-full h-full flex items-centern justify-center absolute top-[33rem] gap-6">
            {details.map((items, id) => {
              return (
                <div
                  key={id}
                  className="w-[22rem] h-[20rem] rounded-[3rem] p-6 shadow-md bg-[#F1F6F9] "
                >
                  <img
                    src={items.img}
                    alt="image"
                    className="object-contain object-center w-[6rem] rounded-md h-[5rem] "
                  />
                  <div className="mt-2 mb-2">
                    <span className=" text-lg font-semibold text-[#86AFC0]">
                      {items.title}
                    </span>
                  </div>
                  <p className="text-lg ">{items.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
            <div>
              <Peopletrust/>
            </div>
      
      
    </div>
  
  );
}

export default Team_section;
