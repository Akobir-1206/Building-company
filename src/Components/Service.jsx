import React from 'react';
import tanga from '../assets/tanga.png';
import daftar from '../assets/daftar.png';
import setting from '../assets/setting.png';
import gruz from '../assets/gruz.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей для AOS

// Инициализация AOS
AOS.init();

export default function Service() {
    return (
        <div className='py-8 bg-[#fce8bd] text-[42px] pl-20'>
            <div className='container'>
                <h1 className='text-center mt-7'>Bizning xizmatlarimiz</h1>
                <div className='py-16 gap-8'>
                    <div className='flex gap-8'>
                        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100" className="relative bg-[#2c3442] w-[620px] h-[190px] rounded-xl p-7">
                            <p className='text-white text-xl w-[390px] text-[20px] font-normal tracking-wider ml-6 mt-9'>
                                Siz kompaniyamiz mutaxassislaridan bepul ma'lumot olishingiz mumkin
                            </p>
                            <img className='absolute bottom-0 right-0 w-[228px] h-[179px]' src={tanga} alt="Tanga" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="100" className="relative bg-[#2c3442] w-[420px] h-[190px] rounded-xl p-7">
                            <p className='text-white text-xl w-[200px] text-[20px] font-normal tracking-wider mt-10'>
                                Hujjatlarni rasmiylashtirish
                            </p>
                            <img className='absolute bottom-0 right-0 w-[228px] h-[179px]' src={daftar} alt="Daftar" />
                        </div>
                    </div>

                    <div className='flex gap-8 mt-8'>
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="relative bg-[#2c3442] w-[420px] h-[190px] rounded-xl p-7">
                            <p className='text-white ml-6 mt-20 text-xl w-[150px] text-[20px] font-normal tracking-wider'>
                                Ta`mirlash tuzatish xizmat
                            </p>
                            <img className='absolute bottom-0 right-0 w-[200px] h-[179px]' src={setting} alt="Gruz" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="relative bg-[#2c3442] w-[620px] h-[190px] rounded-xl p-7 pr-10">
                            <p className='text-white text-xl w-[100px] mt-20 text-[20px] font-normal tracking-wider'>
                                Professionallar jamoasi
                            </p>
                            <img className='absolute bottom-0 right-0 w-[228px] h-[179px]' src={gruz} alt="Setting" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
