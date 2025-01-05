import React from 'react'
import image1 from "../Images/whoweare_images/8477375-5f3f615a.png"
import image2 from "../Images/whoweare_images/7198217-0c058c29.png"
import image3 from "../Images/whoweare_images/12644617-147c4a6f.png"
import image4 from "../Images/whoweare_images/cheerful-man-showing-draft-woman.jpg"




  function Whoweare_section() {
    return (
      <>
        {/* Full Div */}
        <div className=" h-full w-full">
          <div className=" w-[80%] mx-auto ">
            <div className=" flex justify-between gap-10 ">
              {/* Left Text Div */}
              <div className=" w-[45rem] p-8  ">
                <div className=" text-4xl font-semibold py-6 ">Who We are</div>
  
                {/* Left Bottom Text Div */}
  
                <div className=" flex flex-col gap-8  ">
                  <div className=" flex items-center gap-8">
                    <div>
                      <img
                        src={image1}
                        className=" w-[4rem] "
                      />
                    </div>
                    <div>
                      <div className=" text-xl font-semibold py-4 ">
                        Contemporary Living Model for Everyone
                      </div>
                      <div className=" ">
                        Sample Text. click to select the Text Element
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center gap-8">
                    <div>
                      <img
                       src={image2}
                        className=" w-[4rem] "
                      />
                    </div>
                    <div>
                      <div className=" text-xl font-semibold py-4 ">
                        Thousands of Ingenius Projects World-Wide
                      </div>
                      <div className=" ">
                        Sample Text. click to select the Text Element
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center gap-8">
                    <div>
                      <img
                        src={image3}
                        className=" w-[4rem] "
                      />
                    </div>
                    <div>
                      <div className=" text-xl font-semibold py-4 ">
                        Building Services & Consumer Electronics
                      </div>
                      <div className=" ">
                        Sample Text. click to select the Text Element
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Right Image Div */}
              <div className=" w-[42rem] h-[29rem] ">
                <img
                  src={image4}
                  className=" w-[30rem] h-[37rem] rounded-[3rem] object-cover "
                ></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export  default  Whoweare_section;