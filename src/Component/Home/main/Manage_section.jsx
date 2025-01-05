import React from 'react'
import details from "../main/Manage_section_details";

function Manage_section() {
  return (
    <>
      <div className=" w-full my-10 ">
        <div className=" w-[80%] mx-auto ">
          <div className="flex justify-center items-center text-[3rem] font-semibold py-10 ">
            Manage Everything
          </div>
          <div className="flex gap-6 flex-wrap justify-center items-center">
            {details.map((item, index) => (
              <div
                key={index}
                className=" w-[21rem] h-[27rem] bg-cover rounded-[1.5rem] "
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="w-full h-full bg-[rgba(0,0,0,0.3)] rounded-[1.5rem] flex flex-col justify-end p-5 ">
                  
                    <h3 className=" text-white text-2xl border-t-2 pt-2 border-[#A19D97] ">{item.name}</h3>
                    <h3 className=" text-white mt-2">{item.text}</h3>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default Manage_section