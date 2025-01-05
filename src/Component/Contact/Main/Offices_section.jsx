import React from 'react'
import cards from "../Main/Offices_cards" 

function Offices_section() {
  return (
    <div className='bg-[#F1F6F9] w-full h-[82vh]'>
        <div className='pt-12'>
            <h1 className='text-center text-[3rem] font-bold'>Offices</h1>
        </div>
        <div className='w-[60%] mx-auto mt-[5rem] flex justify-between '>
            {cards.map((items,id)=>{
               return(
                <div key={id} className='w-[18rem] flex flex-col gap-5'>
                <h1 className='text-[3rem] font-bold'>{items.location}</h1>
                <h4 className='font-semibold'><u>{items.email}</u></h4>
                <h4 className='text-lg'>{items.address}</h4>
               <div>
               <button className='px-4 py-2 text-xs font-semibold bg-[#A6C6D3] rounded-full hover:bg-black hover:text-white'>GOOGLE MAP</button>
               </div>
            </div>
               )
            })}
        </div>
    </div>
  )
}

export default Offices_section