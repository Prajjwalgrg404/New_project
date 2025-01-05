import React from 'react'
import image from "../image/portrait-smiling-young-woman-resting-home-near-tv-watching-television-sitting-floor-drinking-coffee-from-cup_1258-129757.jpg"


    function YourHome_section() {
      
      return (
        <>
        {/* Full Div */}
          <div className=" h-full w-full flex justify-center items-center ">
            <div className=" w-[78%] mx-auto ">
              <div className=" flex justify-between gap-10 ">
    
        {/* Left Text Div */}
                <div className=" w-[45rem] p-8  ">
                  <div className=" text-3xl font-bold ">
                    Your Home's all-in-one display hub
                  </div>
    
            {/* Left Bottom Text Div */}
                  <div className=" flex gap-8 pt-6 ">
                    <div className=" flex flex-col gap-8  ">
                      <div>
                        <div className=" border-b-4 border-[#86AFC0] text-xl font-semibold py-3 ">
                          Google Assistant
                        </div>
                        <div className=" py-3 ">
                          Sample Text. click to select the Text Element
                        </div>
                      </div>
                      <div>
                        <div className=" border-b-4 border-[#86AFC0] text-xl font-semibold py-3 ">
                          6.5MP Camera
                        </div>
                        <div className=" py-3 ">
                          Sample Text. click to select the Text Element
                        </div>
                      </div>
                    </div>
            {/* Right Bottom Text Div */}
                    <div className=" flex flex-col gap-8 ">
                      <div>
                        <div className=" border-b-4 border-[#86AFC0] text-xl font-semibold py-3 ">
                          Chrome Cast Built-In
                        </div>
                        <div className=" py-3 ">
                          Sample Text. click to select the Text Element
                        </div>
                      </div>
                      <div>
                        <div className=" border-b-4 border-[#86AFC0] text-xl font-semibold py-3 ">
                          10in HD Display
                        </div>
                        <div className=" py-3 ">
                          Sample Text. click to select the Text Element
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        {/* Right Image Div */}
                <div className=" w-[42rem] h-[29rem] ">
                  <img
                    src={image}
                    className=" w-[30rem] h-[29rem] rounded-[3rem] object-cover "
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

export default YourHome_section