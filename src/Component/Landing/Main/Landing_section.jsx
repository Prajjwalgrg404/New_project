import React from "react";
import image from "../image/676.jpg"
import details from "../Main/Landing_section_details";

function Landing_section() {
  return (
    <div>
      <div className="w-full h-[75vh]">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full bg-cover bg-center"
        >
          <div className="bg-[rgba(0,0,0,0.3)] w-full h-[75vh] flex justify-center items-center">
            <h1 className="text-[4rem] font-semibold text-white">Change Live To The Best</h1>
          </div>

          {/* card div */}

          <div className="w-full h-full flex items-centern justify-center absolute top-[33rem] gap-6">
            {details.map((items, id) => {
                console.log(items)
              return (
                <div
                  key={id}
                  className="w-[22rem] h-[20rem] rounded-[3rem] p-6 shadow-md bg-white"
                >
                  <img
                    src={items.img}
                    alt="image"
                    className="object-contain object-center w-[5rem] bg-[#F1F6F9] mx-auto rounded-full px-4 py-2 h-[5rem] border "
                  />
                  <div className="mt-2 mb-2 text-center">
                    <span className=" text-2xl font-semibold ">
                      {items.title}
                    </span>
                  </div>
                  <div className="text-center">
                  <p className="text-lg">{items.text}</p>
                  <button className="text-sm mt-6"><u>MORE</u></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing_section;
