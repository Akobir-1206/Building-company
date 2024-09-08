import React from 'react';
import backgroundImage from '../assets/header.bg.jpeg'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const {t, i18n} = useTranslation();
    return (
        <div className=' w-full h-[800px] bg-cover bg-center p-4 pl-52 relative z-0' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='absolute inset-0 bg-black filter blur-sm bg-opacity-30'></div>
            <div className='container relative z-10 flex flex-col justify-center'>
                <h1 className='text-white text-[90px] font-semibold tracking-tight leading-[120%] mt-[15%] text-shadow-lg'>
                    ATAYEV <br />BAHODIR BUILD
                </h1>
                <p className='p-10 pl-2 text-xl text-white font-medium'>
                    {t('hero.text')}
                </p>
                <ul className='w-[100px ] bg-red text-white flex gap-10 font-medium'>
                    <li><a href=""><button className='w-40 h-12  border-2 rounded-full hover:bg-white duration-500  hover:text-black '>{t('hero.text1')}</button></a></li>
                    <li><a href="tel:+998935531206"><button className='w-40 h-12 border-2 rounded-full hover:bg-white duration-500   hover:text-black'>{t('hero.text2')}</button></a></li>
                </ul>
            </div>
        </div>
    );
}
