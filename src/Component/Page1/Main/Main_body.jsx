import React from 'react'
import Image from '../images/digital-tablet-screen-with-smart-home-controller-wooden-table5.jpg'
import Cards from './Cards'
import Smartcamera_section from './Smartcamera_section'
import SmartHome_section from './SmartHome_section'
import KnowMore_section from './KnowMore_section'
import Form_section from './Form_section'
import Footer from './Footer'

function Main_body() {
  return (
    <section>
        <div className='w-full bg-white'>
            <div style={{ backgroundImage: `url(${Image})` }} className='w-full h-[85vh] bg-cover bg-bottom flex justify-center items-center'>
                <h1 className='text-white font-bold text-[5rem]'>Our Services</h1>
            </div>
            
            {/* service we provide section from page 1 */}

            <div className='w-full h-[82vh] bg-white'>
                <div  className='w-[50%] h-[10rem]  mx-auto py-10 text-center'>
                    <h2 className='text-[3rem] font-bold '>Services We Provide</h2>
                    <h4 className='text-[1.2rem]'>Nunc eu turpis id nulla sodales luctus. Vestibulum fermentum dui faucibus ligula dapibus scelerisque. Etiam laoreet vitae est vitae convallis.</h4>
                </div>

                {/* card div */}

                <div className='w-full h-full'>
                    <Cards/>
                </div>
            </div>

            <div className='w-full h-screen bg-[#333333] text-white'>
                <Smartcamera_section/>
            </div>
            <div className='w-full bg-white '>
                <SmartHome_section/>
            </div>
           <div className='w-full bg-white'>
            <KnowMore_section/>
           </div>
           <div className='w-full my-20 bg-white'>
             <Form_section/>
           </div>
           <div className='w-full h-[14rem] bg-[#333333]'>
            <Footer/>
           </div>
        </div>
    </section>
  )
}

export default Main_body