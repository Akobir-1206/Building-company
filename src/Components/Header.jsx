import React from 'react'
import logo from '../assets/logo-b.png'
import {useTranslation} from 'react-i18next'

export default function Header() {
   const {t, i18n} = useTranslation();
   const languages = localStorage.getItem('i18nextLng') || 'uz'
   
   const handleChange = (event) =>{
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem('i18nextLng', selectedLanguage);
   }

  return (
    <div className='w-full   p-4 flex justify-center gap-[30px] items-center position  fixed top-0 left-0  z-50 '>
       <ul className='flex gap-16 text-white font-normal '>
          <li><a className='link-animation' href="">{t('header.text')}</a></li>
          <li><a className='link-animation' href="">{t('header.text1')}</a></li>
          <li><a className='link-animation' href="">{t('header.text2')}</a></li>
       </ul>
       <a className='link-animation' href="#"><img className='w-32 h-18' src={logo} alt=""  /></a>
       <ul className='flex gap-16 text-white font-normal'>
          <li><a className='link-animation' href="">{t('header.text3')}</a></li>
          <li><a className='link-animation' href="">{t('header.text4')}</a></li>
          <li><a className='link-animation' href="">{t('header.text5')}</a></li>
       </ul>
       <select className=' w-[70px] bg-transparent border-transparent outline-none text-white text-[19px] appearance-none pl-5' name='lng' id='lng' onChange={handleChange} value={languages}>
        <option className='bg-black' value="uz">UZ</option>
        <option className='bg-black' value="ru">RU</option>
        <option className='bg-black' value="en">EN</option>
       </select>
    </div>
  )
}
