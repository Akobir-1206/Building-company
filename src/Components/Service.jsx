import React from 'react';
import tanga from '../assets/tanga.png';
import daftar from '../assets/daftar.png';
import setting from '../assets/setting.png';
import gruz from '../assets/gruz.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

AOS.init();

export default function Service() {
    const { t, i18n } = useTranslation();
    return (
        <div className='py-8 bg-[#fce8bd] text-[42px] pl-20'>
            <div className='container'>
                <h1 className='text-center mt-7'>{t('service.text')}</h1>
                <div className='py-16 gap-8'>
                    <div className='flex gap-8'>
                        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100" className="relative bg-[#2c3442] w-[620px] h-[190px] rounded-xl p-7">
                            <p className='text-white text-xl w-[390px] text-[20px] font-normal tracking-wider ml-6 mt-9'>
                                {t('service.text1')}
                            </p>
                            <img className='absolute bottom-0 right-0 w-[228px] h-[179px]' src={tanga} alt="Tanga" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="100" className="relative bg-[#2c3442] w-[420px] h-[190px] rounded-xl p-7">
                            <p className='text-white text-xl w-[200px] text-[20px] font-normal tracking-wider mt-10'>
                                       {t('service.text2')}
                            </p>
                            <img className='absolute bottom-0 right-0 w-[228px] h-[179px]' src={daftar} alt="Daftar" />
                        </div>
                    </div>

                    <div className='flex gap-8 mt-8'>
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="relative bg-[#2c3442] w-[420px] h-[190px] rounded-xl p-7">
                            <p className='text-white ml-6 mt-16 text-xl w-[190px] text-[20px] font-normal tracking-wider'>
                                          {t('service.text3')}
                            </p>
                            <img className='absolute bottom-0 right-0 w-[200px] h-[179px]' src={setting} alt="Gruz" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="relative bg-[#2c3442] w-[620px] h-[190px] rounded-xl p-7 pr-10">
                            <p className='text-white text-xl w-[100px] mt-16 text-[20px] font-normal tracking-wider'>
                                         {t('service.text4')}
                            </p>
                            <img className='absolute bottom-0 right-0 w-[228px] h-[179px]' src={gruz} alt="Setting" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
