import React from "react";
import Image from "../images/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-102347.jpg"

function Form_section() {
  const Input_css = "w-full py-2 px-2 rounded-3xl outline-none";
  return (
    <div className="w-full h-full flex gap-10 py-20 justify-center items-center">
      <div className="w-[35%] h-[90vh] flex flex-col justify-end items-start">
        <h1 className="font-semibold text-[2rem]">Make Smart Home Project</h1>
        <p className="text-lg py-5">
          Sample text. Click to select the Text Element.
        </p>
        <div className="w-full h-[68vh] rounded-[3rem] bg-[#F2F2F2] px-8 my-2">
          <form action="">
            <div className="pt-8">
              <h3>Name</h3>
              <input
                className={Input_css}
                type="text"
                placeholder="Enter Your Name "
              />
            </div>
            <div className="pt-8">
              <h3>Email</h3>
              <input
                className={Input_css}
                type="email"
                placeholder="Enter Your Email "
              />
            </div>
            <div className="pt-8">
              <h3>Message</h3>
              <textarea className="w-full h-[6rem] py-2 rounded-3xl px-2 outline-none"></textarea>
            </div>
            <button className="px-10 py-2 mt-4 rounded-3xl bg-red-300 hover:bg-red-500 text-[1.3rem] text-white">
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className="w-[35%] h-[90vh] rounded-[3rem] overflow-hidden">
        <img className="w-full h-full object-cover" src={Image} alt="" />
      </div>
    </div>
  );
}

export default Form_section;
