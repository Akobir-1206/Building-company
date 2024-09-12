import React from 'react'
import par1 from '../assets/partner1.jpg'
import par2 from '../assets/partner2.jpg'
import par3 from '../assets/partner3.jpg'
import par4 from '../assets/partner4.jpg'
import par5 from '../assets/partner5.jpg'
import par6 from '../assets/partner6.jpg'
import par7 from '../assets/partnrer7.jpg'
import par8 from '../assets/partner8.jpg'

export default function Partners() {
    return (
        <div className='w-full py-10'>
                <h1 className='ml-[35%] items-center text-4xl text-black mb-6'>Hamkorlar bilan fikr almashish</h1>
            <div className="grid max-md:grid-cols-2 grid-cols-4 " >
                <img src={par1} alt="" />
                <img src={par2} alt="" />
                <img src={par3} alt="" />
                <img src={par4} alt="" />
                <img src={par5} alt="" />
                <img src={par6} alt="" />
                <img src={par7} alt="" />
                <img src={par8} alt="" />
            </div>
        </div>
    )
}
