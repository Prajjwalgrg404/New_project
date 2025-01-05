import React, { useState } from "react";
// import details from "../Main/Questions_details";

function Questions_section() {
  const [Toggle, setToggle] = useState(0);



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

      <div>
        <div
          onClick={() => setToggle(1)}
          className="w-full h-[5rem] font-semibold px-8 bg-[#F2F2F2] hover:bg-[#F1F6F9] hover:text-[#86AFC0] rounded-full flex justify-between items-center mt-4 "
        >
          <h3>
          How much does it cost?
          </h3>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div
          className={`w-full ${
            Toggle === 1 ? "h-[12rem]" : "h-0"
          } px-8 flex justify-start items-center transition-height duration-500 overflow-hidden`}
        >
          <p className="text-lg">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>

        <div
          onClick={() => setToggle(2)}
          className="w-full h-[5rem] font-semibold px-8 bg-[#F2F2F2] hover:bg-[#F1F6F9] hover:text-[#86AFC0] rounded-full flex justify-between items-center mt-4 "
        >
          <h3>
          How Fast Are Your Services?
          </h3>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div
          className={`w-full ${
            Toggle===2 ? "h-[12rem]" : "h-0"
          } px-8 flex justify-start items-center transition-height duration-500 overflow-hidden`}
        >
          <p className="text-lg">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>

        <div
          onClick={() => setToggle(3)}
          className="w-full h-[5rem] font-semibold px-8 bg-[#F2F2F2] hover:bg-[#F1F6F9] hover:text-[#86AFC0] rounded-full flex justify-between items-center mt-4 "
        >
          <h3>
          What types of customers have you worked with?
          </h3>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div
          className={`w-full ${
            Toggle===3 ? "h-[12rem]" : "h-0"
          } px-8 flex justify-start items-center transition-height duration-500 overflow-hidden`}
        >
          <p className="text-lg">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>

        <div
          onClick={() => setToggle(4)}
          className="w-full h-[5rem] font-semibold px-8 bg-[#F2F2F2] hover:bg-[#F1F6F9] hover:text-[#86AFC0] rounded-full flex justify-between items-center mt-4 "
        >
          <h3>
          What education and/or training do you have that relates to your work?
          </h3>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div
          className={`w-full ${
            Toggle===4 ? "h-[12rem]" : "h-0"
          } px-8 flex justify-start items-center transition-height duration-500 overflow-hidden`}
        >
          <p className="text-lg">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>

        <div
          onClick={() => setToggle(5)}
          className="w-full h-[5rem] font-semibold px-8 bg-[#F2F2F2] hover:bg-[#F1F6F9] hover:text-[#86AFC0] rounded-full flex justify-between items-center mt-4 "
        >
          <h3>
          Nunc sit amet nibh dolor. Integer iaculis nisi nec libero elementum?
          </h3>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div
          className={`w-full ${
            Toggle===5 ? "h-[12rem]" : "h-0"
          } px-8 flex justify-start items-center transition-height duration-500 overflow-hidden`}
        >
          <p className="text-lg">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default Questions_section;
