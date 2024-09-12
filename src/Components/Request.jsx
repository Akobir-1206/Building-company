import React from 'react';
import request from '../assets/request.png';

export default function Request() {
  return (
    <div className='bg-gray-800 py-14 pt-36'>
      <div className="container">
        <div className="ml-20 w-[1134px] h-[625px] bg-no-repeat justify-center rounded-2xl" style={{ backgroundImage: `url(${request})` }}>
          <h1 className='w-[290px] text-white text-3xl pt-12'>Savol, taklif va murojaatlar bormi?</h1>
          <form className='ml-20 gap-8 flex flex-col' action="">
            <input className='w-[485px] h-[46px] block mb-3' type="text" placeholder='Ismingiz' required />
            <input className='w-[485px] h-[46px] block mb-4' type="number" placeholder='Telefon raqamingiz' />
            <input className='w-[485px] h-[46px] block mb-4' type="text" placeholder='Sizning xabaringiz...' />
            <button className='w-[485px] h-[46px] bg-blue-500 text-white'>Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
}
