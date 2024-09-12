import React from 'react'
import about from '../assets/about.png'
export default function About() {
  return (
    <div className='w-full  bg-coverw-full h-[800px] bg-cover bg-center p-4  relative z-0'
    style={{ backgroundImage: `url(${about})` }}>
          <div className="container ">
                <h1 className='text-2xl mt-20 mr-16 text-white'>ATAEV BAHODIR BUILD</h1>
                <div className='mt-20'>
                    <h1 className='w-80 text-4xl mb-8 text-white -tracking-tighter font-medium leading-normal'>ATAEV BAHODIR BUILD</h1>
                    <p className='w-[360px] h-[275px] font-serif text-white '>Biz shunchaki loyihalar yaratmaymiz, yangi imkoniyatlar yaratamiz. Davlat miqyosidagi inshootlarni qurish orqali biz kelajakni quryapmiz. Biz atrof-muhit haqida qayg'uramiz: kompaniya binolar va infratuzilmani qurish va ulardan foydalanish bilan bog'liq ekologik jihatlar uchun to'liq javobgarlikni o'z zimmasiga oladi.</p>
                    <button className='text-white border-2 w-44 h-12 rounded-3xl text-lg hover:bg-white hover:text-black hover:duration-500    '>Batafsil bilish</button>
                </div>
          </div>
    </div>
  )
}
