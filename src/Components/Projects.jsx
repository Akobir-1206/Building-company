import React from 'react';
import magic from '../assets/magic.webp';
import gardens from '../assets/gardens.webp';
import fonon from '../assets/fonon.webp';
import bogcha from '../assets/bogcha.webp';
import school from '../assets/school.webp';
import bulvar from '../assets/bulvar.webp';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t, i18n } = useTranslation();
    return (
        <div className='mb-10'>
            <div className="container">
                <h1 className='items-left w-[400px] text-4xl text-black pb-6'>{t('project.text')}</h1>
                <div className='relative w-full flex flex-wrap gap-10 '>
                    {/* First project */}
                    <div className='relative w-[550px] h-[320px] overflow-hidden group '>
                        <div className='absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${magic})` }}>
                            {/* Qora overlay */}
                            <div className='absolute inset-0 bg-black opacity-50'></div>
                            <div className='absolute inset-0 flex flex-col justify-end p-4 z-10'>
                                <h1 className='text-white text-4xl pb-2 transform translate-y-20 transition-transform duration-700 ease-in-out group-hover:translate-y-[-170px]'>
                                    Magic City
                                </h1>
                                <p className='text-white text-lg opacity-0 transform translate-y-16 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-170px]'>
                                {t('project.text1')}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Second project */}
                    <div className='relative w-[550px] h-[320px] overflow-hidden group'>
                        <div className='absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${gardens})` }}>
                            {/* Qora overlay */}
                            <div className='absolute inset-0 bg-black opacity-40'></div>
                            <div className='absolute inset-0 flex flex-col justify-end p-4 z-10'>
                                <h1 className='text-white text-4xl pb-4 transform translate-y-16 transition-transform duration-700 ease-in-out group-hover:translate-y-[-190px]'>
                                       Gardens Residence
                                </h1>
                                <p className='text-white text-lg opacity-0 transform translate-y-16 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-190px]'>
                                {t('project.text2')}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Third project */}
                    <div className='relative w-[550px] h-[320px] overflow-hidden group '>
                        <div className='absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${fonon})` }}>
                            {/* Qora overlay */}
                            <div className='absolute inset-0 bg-black opacity-30'></div>
                            <div className='absolute inset-0 flex flex-col justify-end p-4 z-10'>
                                <h1 className='text-white text-4xl pb-2 transform translate-y-[145px] transition-transform duration-700 ease-in-out group-hover:translate-y-[-100px]'>
                                Fonon
                                </h1>
                                <p className='text-white text-lg opacity-0 transform translate-y-16 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-100px]'>
                                {t('project.text3')}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Fourth project */}
                    <div className='relative w-[550px] h-[320px] overflow-hidden group'>
                        <div className='absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${bogcha})` }}>
                            {/* Qora overlay */}
                            <div className='absolute inset-0 bg-black opacity-40'></div>
                            <div className='absolute inset-0 flex flex-col justify-end p-4 z-10'>
                                <h1 className='text-white text-4xl pb-2 transform translate-y-16 transition-transform duration-700 ease-in-out group-hover:translate-y-[-170px]'>
                                    Invento
                                </h1>
                                <p className='text-white text-lg opacity-0 transform translate-y-16 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-170px]'>
                                Tashkent City xalqaro biznes markazida joylashgan xalqaro bolalar bog'chasi va maktabi
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Fifth project */}
                    <div className='relative w-[550px] h-[320px] overflow-hidden group'>
                        <div className='absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${school})` }}>
                            {/* Qora overlay */}
                            <div className='absolute inset-0 bg-black opacity-30'></div>
                            <div className='absolute inset-0 flex flex-col justify-end p-4 z-10'>
                                <h1 className='text-white text-4xl pb-2 transform translate-y-8 transition-transform duration-700 ease-in-out group-hover:translate-y-[-180px]'>
                                Presidential School
                                </h1>
                                <p className='text-white text-lg opacity-0 transform translate-y-16 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-180px]'>
                                Bu xalqaro darajada bilim beradigan ta'lim muassasasi
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Sixth project */}
                    <div className='relative w-[550px] h-[320px] overflow-hidden group'>
                        <div className='absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${bulvar})` }}>
                            {/* Qora overlay */}
                            <div className='absolute inset-0 bg-black opacity-40'></div>
                            <div className='absolute inset-0 flex flex-col justify-end p-4 z-10'>
                                <h1 className='text-white text-4xl pb-2 transform translate-y-8 transition-transform duration-700 ease-in-out group-hover:translate-y-[-170px]'>
                                Boulevard
                                </h1>
                                <p className='text-white text-lg opacity-0 transform translate-y-16 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-170px]'>
                                       Poytaxt markazidagi muhtasham turar-joy massivi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
