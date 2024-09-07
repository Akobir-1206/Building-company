import React from 'react';
import backgroundImage from '../assets/header.bg.jpeg'

export default function Hero() {
    return (
        <div className='w-full h-[800px] bg-cover bg-center p-4 pl-52 relative z-0' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='absolute inset-0 bg-black filter blur-sm bg-opacity-30'></div>
            <div className='relative z-10 flex flex-col justify-center'>
                <h1 className='text-white text-[90px] font-semibold tracking-tight leading-[120%] mt-[15%] text-shadow-lg'>
                    ATAYEV <br />BAHODIR BUILD
                </h1>
                <p className='p-10 pl-2 text-xl text-white font-medium'>
                    Hamma narsada a'lo
                </p>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}
