import React from "react";
import details from "../Main/People_say_details";

function People_say_section() {
  return (
    <div className="w-full  pb-10">
      <div className=" w-full h-full flex justify-center items-center">
        <h1 className="text-[3rem] font-semibold">What People Say?</h1>
      </div>
      <div className="w-[70%] mx-auto py-10 flex gap-10">
        {details.map((items, id) => {
          return (
            <div
              key={id}
              className="w-[22rem] h-[20rem] rounded-[3rem] px-8 py-5 shadow-md bg-white "
            >
              <div className="pt-3 py-4 border-b-2 border-[#86AFC0]">
                <h2 className="text-[1.5rem] font-semibold mb-5">{items.name}</h2>
                <span className=" text-lg">{items.text}</span>
              </div>
              
                <h3 className="text-lg pt-4 text-[#86AFC0]">{items.date}</h3>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default People_say_section;
