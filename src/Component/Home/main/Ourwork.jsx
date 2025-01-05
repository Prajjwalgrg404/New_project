import React from 'react'
import images from "../main/Ourwork_details"

function Ourwork() {
  return (
    <div>
      <div className=" w-full my-10 ">
        <div className=" w-[80%] mx-auto ">
          <div className="text-center  py-10 px-[15rem] ">
            <h1 className='text-[3rem] font-semibold'>Our works</h1>
            <p className='text-lg py-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center items-center">
            {images.map((item, index) => (
              <div className='overflow-hidden'>
                <div
                key={index}
                className=" w-[22rem] h-[23rem] bg-cover duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
              >
              </div>
              
              </div>
            ))}
            <button className='border-2 border-[#D2E2E9] text-[#AECBD7] px-20 py-6 rounded-full text-xl hover:bg-black hover:text-white'>VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourwork