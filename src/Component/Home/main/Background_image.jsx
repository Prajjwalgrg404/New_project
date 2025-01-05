import React from 'react'
import image from '../Images/digital-tablet-screen-with-smart-home-controller-wooden-table5.jpg'

function Background_image() {
  return (
    <div
    style={{ backgroundImage: `url(${image})` }}
    className="w-full h-full bg-contain bg-fixed"
  >
    {/* backdrop  */}
    <div className="w-full h-full bg-[rgba(0,0,0,0.3)] flex flex-col justify-center items-center">
      <div className="w-[60%] mx-auto text-center text-white">

        <h1 className="text-[3rem] font-semibold pb-6">Ready to build a smarter home?</h1>
        <p className="text-2xl pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        <button className=" px-12 py-5 border rounded-full border-white hover:bg-white hover:text-black font-semibold text-lg">GET FREE ESTIMATE</button>
      </div>
    </div>
  </div>
  )
}

export default Background_image