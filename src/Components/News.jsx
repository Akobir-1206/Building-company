import React from 'react'
import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpg'
import news4 from '../assets/news4.jpg'
export default function News() {
  return (
    <div className='bg-[#f7f4f4] py-14'>
        <div className="container">
              <h1 className='w-[400px] text-4xl text-black pb-6'>Barcha yangiliklarimiz</h1>
              <div className='flex flex-wrap gap-7'>
                    <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4 mb-7">
                          <div><img className='w-[260px] h-[250px] rounded-l-3xl' src={news1} alt="" /></div>
                          <div className='py-8 px-2'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>Batafsil bilish</button>
                              <h1 className='text-[20px] my-3  '>Qurilish loyihasi menejeri kim?</h1>
                              <p className='w-[274px] h-[165px] text-xs'>Discover Invest kompaniyasida qurilish loyihasi bo'yicha bir nechta menejerlar mavjud. Bu mutaxassis o'ziga ishonib topshirilgan qurilish ob'ektini muvaffaqiyatli amalga oshirish uchun mas'uldir. </p>
                          </div>
                    </div>
                    {/* *********2 */}
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4">
                          <div><img className='w-[290px] h-[250px] rounded-l-3xl' src={news2} alt="" /></div>
                          <div className='py-8 px-2'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>Batafsil bilish</button>
                              <h1 className='text-[20px] my-3  '>Barchani kelayotgan 2024 yil bilan tabriklayman!</h1>
                              <p className='w-[274px] h-[165px] text-xs'>Zallarning murakkab ichki dizayni kvartiraga kirishdan oldin ham qulaylik muhitini yaratadi va qulay navigatsiya tizimi sizga kerakli qavatga osongina chiqishga yoki hududga chiqishga yordam beradi.</p>
                          </div>
                    </div>
                    {/* *********3 */}
                    <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4">
                          <div><img className='w-[260px] h-[250px] rounded-l-3xl' src={news3} alt="" /></div>
                          <div className='py-8 px-2'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>Batafsil bilish</button>
                              <h1 className='text-[20px] my-3  '>Manzil</h1>
                              <p className='w-[274px] h-[165px] text-xs'>Transport infratuzilmasi shaharning istalgan nuqtasiga osongina ko'chib o'tishga imkon beradi: siz faqat kerakli va kerakli yo'nalishni tanlashingiz kerak.</p>
                          </div>
                    </div>
                    {/* *************4 */}
                    <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className="card flex w-[600px] h-[250px] bg-white rounded-3xl gap-4">
                          <div><img className='w-[310px] h-[250px] rounded-l-3xl' src={news4} alt="" /></div>
                          <div className='py-8 px-1'>
                              <button className='bg-[#363f4e] text-[11px] text-white rounded-xl w-[114px] h-[26px] hover:bg-white hover:text-black border-2 hover:border-zinc-950'>Batafsil bilish</button>
                              <h1 className='text-[16px] my-3  '>Discover Invest ko'p ob'ektlari bilan tanishtirishda davom etamiz.</h1>
                              <p className='w-[294px] h-[165px] text-xs'>Biz sizlarni 'ATAEV BAHODIR BUILD' kompaniyasining ko'p funksiyali ob'ektlari bilan tanishtirishda davom etamiz. Ulardan biri Toshkent shahrining Yangixoyat tumanida barpo etilgan 'Yangi Choshtepa turar-joy majmuasidir.</p>
                          </div>
                    </div>

              </div>
        </div>
    </div>
  )
}
