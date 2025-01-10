import React, { useState } from "react";
import details from "../Main/Question_details";

function Questions_section() {
  const [Toggle, setToggle] = useState();

  function Accordian(id) {
    setToggle((prevToggle) => (prevToggle === id ? null : id));
  }
  
  return (
    <div className="w-[80%] h-full mx-auto ">
      <div className="text-center">
        <h1 className="text-[3rem] font-bold">Facts & Questions</h1>
        <h3 className="text-lg ">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </h3>
      </div>

      {/* FAQ section */}

      {details.map((item,id) => {
        return (
          <div key={id}>
            <div onClick={() => Accordian(id)} className="w-full h-[5rem] font-semibold px-8 bg-[#F2F2F2] hover:bg-[#F1F6F9] hover:text-[#86AFC0] rounded-full flex justify-between items-center mt-4 ">
              <h3 className="">
                <span>{item.id}</span>.{item.question}
              </h3>
              <i
                className="fa-solid fa-plus text-[1.5rem]"
              ></i>
            </div>
            <div
              className={`w-full ${
                Toggle === id ? "h-[12rem]" : "h-0"
              } px-8 flex justify-start items-center transition-height duration-300 transition- overflow-hidden`}
            >
              <p className="text-lg">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Questions_section;
