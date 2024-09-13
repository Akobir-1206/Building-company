import React from 'react'
import blacklogo from '../assets/black-logo.png'
import insta from '../assets/insta.svg'
import face from '../assets/facebook.svg'
import { useTranslation } from 'react-i18next';
export default function Footer() {
   const {t, i18n} = useTranslation();
   return (
      <div className='bg-[#fce8bd] py-14 '>
         <div className="container">
            <div className='flex justify-around '>
               <div className='flex flex-col gap-4'>
                  <img className='w-32 h-20' src={blacklogo} alt="" />
                  <p className='text-xl max-w-[250px]'>{t('footer.text')}</p>
                  <div className='flex gap-4'>
                     <img className='bg-black p-3 rounded-full w-[45px] hover:translate-y-[-8px] transition-all duration-300' src={insta} alt="" />
                     <img className='bg-black p-3 rounded-full w-[45px] hover:translate-y-[-8px] transition-all duration-300' src={face} alt="" />
                  </div>
               </div>
               {/* *********2list */}
               <ul className='text-xl flex flex-col gap-2 text-gray-400'>
                  <li className=''><h1 className='text-black mb-2'>{t('footer.text1')}</h1></li>
                  <li><a className='link-animationf' href="#partner">{t('footer.text2')}</a></li>
                  <li><a className='link-animationf' href="#about">{t('footer.text3')}</a></li>
                  <li><a className='link-animationf' href="#news">{t('footer.text4')}</a></li>
                  <li><a className='link-animationf' href="#projects">{t('footer.text5')}</a></li>
               </ul>
               {/* **********3list */}
               <ul className=' text-gray-400 text-xl flex flex-col gap-3'>
                  <li><h1 className='text-black mb-2'>{t('footer.text6')}</h1></li>
                  <li><a className='link-animationf' href="tel:+998935531206">+998974839999</a></li>
                  <li><a className='link-animationf' href="tel:+998935531206">+998997126666</a></li>
               </ul>
            </div>
         </div>
      </div>
   )
}
