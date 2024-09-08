import React from 'react';
import stat from '../assets/statistic.png';
import CountUp from 'react-countup';

export default function Statistic() {
    return (
        <div
            className='w-full bg-center bg-cover p-20'
            style={{ backgroundImage: `url(${stat})` }}
        >
            <div className="container">
                <h1 className='text-left text-white text-3xl pt-20 pl-16'>
                    Bizning kompaniyada
                </h1>
                <div className='text-left mt-24 ml-16 flex flex-wrap gap-16'>
                    <div className='flex flex-col items-start'>
                        <CountUp
                            start={8}
                            end={120}
                            delay={2}
                            duration={4}
                            suffix="   +"
                            className='text-white text-6xl font-semibold'
                        />
                        <span className='text-white text-xl mt-2'>Xodimlar soni</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <CountUp
                            start={3}
                            end={43}
                            delay={2}
                            duration={4}
                            suffix="   +"
                            className='text-white text-6xl font-semibold'
                        />
                        <span className='text-white text-xl mt-2'>Ob'yektlar</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <CountUp
                            start={17}
                            end={250}
                            delay={2}
                            duration={4}
                            suffix="   +"
                            className='text-white text-6xl font-semibold'
                        />
                        <span className='text-white text-xl mt-2'>Maxsus jihozlar</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <CountUp
                            start={0}
                            end={2}
                            delay={2}
                            duration={7}
                            suffix="   +"
                            className='text-white text-6xl font-semibold'
                        />
                        <span className='text-white text-xl mt-2'>bozorda 14-yil</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
