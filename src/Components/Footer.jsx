import React from 'react'
import blacklogo from '../assets/black-logo.png'
export default function Footer() {
  return (
    <div className='bg-[#fce8bd] py-28'>
        <div className="container">
             <div className='flex justify-around'>
             <ul>
                <li><img className='w-[120px] h-[71px]' src={blacklogo} alt="" /></li>
                <li><h1>Ijtimoiy tarmoqlarimizga obuna bo'ling</h1></li>
                <li>
                    <img src="" alt="" />
                </li>
             </ul>
             {/* *********2list */}
             <ul>
                <li><h1>Kompaniyamiz</h1></li>
                <li><a href="">Korxonalar</a></li>
                <li><a href="">Biz haqimizda</a></li>
                <li><a href="">Yangiliklar</a></li>
                <li><a href="">Bizning loyihalarimiz</a></li>
             </ul>
             {/* **********3list */}
             <ul>
                <li><h1>Aloqa</h1></li>
                <li><a href="tel:+998935531206">+998974839999</a></li>
                <li><a href="tel:+998935531206">+998997126666</a></li>
             </ul>
             </div>
        </div>
    </div>
  )
}
