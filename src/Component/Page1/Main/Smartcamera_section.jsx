import React from 'react'
import Image from '../images/finger-pressing-smart-home-autom.jpg'

function Smartcamera_section() {
  return (
    <div className='w-[85%] flex justify-center items-center gap-[10rem] mx-auto'>
        <div className=' flex flex-col items-start pt-[5rem] gap-7'>
            <h1 className='text-[3rem]'> Smart Camera Control</h1>
            <p className='text-[1.3rem]'><i className="fa-solid fa-check text-red-500 text-sm"></i> 100% Wire-Free – Free of power cords</p>
            <p className='text-[1.3rem]'><i className="fa-solid fa-check text-red-500 text-sm"></i> HD Video – Enjoy sharp, detailed video</p>
            <p className='text-[1.3rem]'><i className="fa-solid fa-check text-red-500 text-sm"></i> Rechargeable – Long lasting batteries</p>
            <p className='text-[1.3rem]'><i className="fa-solid fa-check text-red-500 text-sm"></i> Quick Charging – Get fast battery charging</p>
            <p className='text-[1.3rem]'><i className="fa-solid fa-check text-red-500 text-sm"></i> 2-way Audio – Listen in or talk back.</p>
            <button className='px-7 py-4 text-[1.5rem] font-semibold rounded-full hover:text-black hover:bg-white border'>LEARN MORE</button>
        </div>
        <div className='w-[40%] h-[80vh] rounded-3xl overflow-hidden mt-[6rem]'>
            <img className='w-full h-full object-cover' src={Image} alt='Smart Camera' />
        </div>
    </div>
  )
}

export default Smartcamera_section