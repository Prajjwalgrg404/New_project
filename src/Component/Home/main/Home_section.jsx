import React from "react";
import Image from "../Images/rendering-smart-home-device6.jpg";
import details from "../main/Home_section_details";

function Home_section() {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className="w-full h-[85vh] bg-cover bg-bottom"
      >
        <div className="w-full h-full bg-[rgba(0,0,0,.3)] flex justify-center items-center">
          <h1 className="text-white font-bold text-[5rem]">Smart Homes</h1>
        </div>

        <div className="w-full h-screen flex justify-center gap-10 absolute top-[30rem]">
          {details.map((items, id) => {
            return (
              <div key={id}>
                <div className="bg-white w-[17rem] py-6 text-center rounded-[3rem] flex flex-col items-center">
                  <img
                    src={items.img}
                    alt="Image"
                    class="w-[6rem] h-[6rem] p-4 bg-[#F2F2F2] rounded-[4rem] object-cover"
                  />
                  <div className="flex flex-col justify-center items-center px-8">
                    <h3 class="text-[1.5rem] font-semibold text-gray-800">
                      {items.name}
                    </h3>
                    <p class="text-[1.1rem] py-6 font-semibold text-gray-500">
                      {items.text}
                    </p>
                    <button>
                      <u>LEARN MORE</u>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home_section;
