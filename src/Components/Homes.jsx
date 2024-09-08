import React from 'react'
import home1 from '../assets/uy1.jpg'
import home2 from '../assets/uy2.jpg'
import home3 from '../assets/uy3.jpg'
import home4 from '../assets/uy4.jpg'
import home5 from '../assets/uy5.jpg'
import home6 from '../assets/uy6.jpg'

export default function Homes() {
    return (
        <div className='bg-gray-800  '>
            <div className="  ">
                <h1 className=' items-center w-[400px] ml-[35%] text-4xl text-white'>Sizning orzuingizdagi uy </h1>
                <div className="img mt-8  gap4">
                    <div className="1-column flex relative w-[100%]">
                        <img className='w-[500px] h-[350px]' src={home1} alt="" />
                        <img className='w-[500px] h-[350px]' src={home2} alt="" />
                        <img className='w-[500px] h-[350px]' src={home3} alt="" />

                    </div>
                    <div className="2-column flex relative">
                        <img className='w-[500px] h-[350px]' src={home4} alt="" />
                        <img className='w-[500px] h-[350px]' src={home5} alt="" />
                        <img className='w-[500px] h-[350px]' src={home6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
