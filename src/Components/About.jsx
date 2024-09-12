import React from 'react'
import about from '../assets/about.png'
import { useTranslation } from 'react-i18next';
export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <div id='about' className='w-full  bg-coverw-full h-[800px] bg-cover bg-center p-4  relative z-0'
    style={{ backgroundImage: `url(${about})` }}>
          <div className="container ">
                <h1 className='text-2xl mt-20 mr-16 text-white'>ATAEV BAHODIR BUILD</h1>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className='mt-20'>
                    <h1 className='w-80 text-4xl mb-8 text-white -tracking-tighter font-medium leading-normal'>ATAEV BAHODIR BUILD</h1>
                    <p className='w-[360px] h-[275px] font-serif text-white '>{t('about.text')}</p>
                    <button className='text-white border-2 w-44 h-12 rounded-3xl text-lg hover:bg-white hover:text-black hover:duration-500    '>{t('about.text1')}</button>
                </div>
          </div>
    </div>
  )
}
