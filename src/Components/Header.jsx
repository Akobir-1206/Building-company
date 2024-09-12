import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-b.png';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng') || 'uz';

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) { 
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
    };

    return (
        <div
            className={`w-full p-4 flex justify-center gap-[30px] items-center position fixed top-0 left-0 z-50 transition-bg ${
                scrolled ? 'bg-gray-800' : 'bg-transparent'
            }`}
        >
            <ul className='flex gap-16 text-white font-normal'>
                <li><a className='link-animation' href="#about">{t('header.text')}</a></li>
                <li><a className='link-animation' href="#projects">{t('header.text1')}</a></li>
                <li><a className='link-animation' href="#home">{t('header.text2')}</a></li>
            </ul>
            <a className='link-animation px-6' href="#"><img className='w-28 h-18 ' src={logo} alt="" /></a>
            <ul className='flex gap-16 text-white font-normal'>
                <li><a className='link-animation' href="#service">{t('header.text3')}</a></li>
                <li><a className='link-animation' href="#news">{t('header.text4')}</a></li>
                <li><a className='link-animation' href="#request">{t('header.text5')}</a></li>
            </ul>
            <select
                className='w-[70px] bg-transparent border-transparent outline-none text-white text-[19px] appearance-none pl-5'
                name='lng'
                id='lng'
                onChange={handleChange}
                value={languages}
            >
                <option className='bg-black' value="uz">UZ</option>
                <option className='bg-black' value="ru">RU</option>
                <option className='bg-black' value="en">EN</option>
            </select>
        </div>
    );
}
