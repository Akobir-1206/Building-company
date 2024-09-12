import React from 'react'
import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpg'
import news4 from '../assets/news4.jpg'
import { useTranslation } from 'react-i18next'
export default function News() {
      const {t, i18n} = useTranslation();
  return (
    <div id='news' className='bg-[#f7f4f4] py-14'>
        <div className="container">
              <h1 className='w-[400px] text-4xl text-black pb-6'>{t('news.text')}</h1>
              <div className='flex flex-wrap gap-7'>
                    <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4 mb-7">
                          <div><img className='w-[260px] h-[250px] rounded-l-3xl' src={news1} alt="" /></div>
                          <div className='py-8 px-2'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>{t('news.text-btn')}</button>
                              <h1 className='text-[20px] my-3 w-[200px] '>{t('news.text1')}</h1>
                              <p className='w-[274px] h-[165px] text-xs'>{t('news.text2')} </p>
                          </div>
                    </div>
                    {/* *********2 */}
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4">
                          <div><img className='w-[250px] h-[250px] rounded-l-3xl' src={news2} alt="" /></div>
                          <div className='py-8 px-2'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>{t('news.text-btn')}</button>
                              <h1 className='text-[16px] my-3  w-[200px]'>{t('news.text4')}</h1>
                              <p className='w-[274px] h-[165px] text-xs'>{t('news.text5')}</p>
                          </div>
                    </div>
                    {/* *********3 */}
                    <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4">
                          <div><img className='w-[260px] h-[250px] rounded-l-3xl' src={news3} alt="" /></div>
                          <div className='py-8 px-2'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>{t('news.text-btn')}</button>
                              <h1 className='text-[20px] my-3  '>{t('news.text6')}</h1>
                              <p className='w-[274px] h-[165px] text-xs'>{t('news.text7')}</p>
                          </div>
                    </div>
                    {/* *************4 */}
                    <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4">
                          <div><img className='w-[260px] h-[250px] rounded-l-3xl' src={news4} alt="" /></div>
                          <div className='py-8 px-1'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>{t('news.text-btn')}</button>
                              <h1 className='text-[14px] my-3  w-[200px] font-medium'>{t('news.text8')}</h1>
                              <p className='w-[294px] h-[165px] text-[10px]'>{t('news.text9')}</p>
                          </div>
                    </div>

              </div>
        </div>
    </div>
  )
}
