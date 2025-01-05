import React from "react";
import details from "./Ourteam_details";

function Ourteam_section() {
  return (
    <div className="w-[75%] mb-24 mx-auto">
      <div className="w-[50%] mx-auto text-center py-14">
        <h1 className="text-[3rem] font-semibold">Our Team</h1>
        <h3 className="text-lg">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </h3>
      </div>
      {/* card items of team member */}
      <div className="w-full flex gap-5">
        {details.map((items, id) => {
          return (
            <div key={id}>
              <div className="bg-white w-[22rem] h-[25rem] rounded-[3rem] ">
              <img
                src={items.image}
                alt=""
                class="w-full h-[20rem] px-8 py-8 rounded-[4rem] object-cover"
              />
              <div className="flex flex-col justify-center items-center">
              <h3 class="text-[1.7rem] font-semibold text-gray-800">{items.name}</h3>
              <p class="text-sm font-semibold text-gray-500">{items.position}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ourteam_section;
