import React from 'react'
import image from "../Images/close-up-portrait-smiling-asian-woman-watching-television-sitting-sofa-with-remote6.jpg"

function FAQ_section() {
  return (
    <div className="w-full h-[48vh]">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full bg-cover bg-top"
          >
            <div className="bg-[rgba(0,0,0,0.3)] w-full h-[48vh] flex justify-center items-center">
              <h1 className="text-[4rem] font-semibold text-white">FAQ</h1>
            </div>
          </div>
        </div>
  )
}

export default FAQ_section