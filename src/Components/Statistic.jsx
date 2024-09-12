import React from 'react';
import stat from '../assets/statistic.png';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

export default function Statistic() {
    const { t, i18n } = useTranslation();
    return (
        <div id=''
            className='w-full bg-center bg-cover p-20'
            style={{ backgroundImage: `url(${stat})` }}
        >
            <div className="container">
                <h1 className='text-left text-white text-4xl pt-18 pl-24'>
                    {t('statistic.text')}
                </h1>
                <div className='text-left mt-24 ml-16 flex flex-wrap gap-10 font-normal'>
                    <div className='flex flex-col items-start'>
                        <CountUp
                            start={8}
                            end={120}
                            delay={2}
                            duration={7}
                            suffix="   +"
                            className='text-white text-6xl font-semibold'
                        />
                        <span className='text-white text-xl mt-2'>{t('statistic.text1')}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <CountUp
                            start={3}
                            end={43}
                            delay={2}
                            duration={7}
                            suffix="   +"
                            className='text-white text-6xl font-semibold'
                        />
                        <span className='text-white text-xl mt-2'>{t('statistic.text2')}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <CountUp
                            start={17}
                            end={250}
                            delay={2}
                            duration={7}
                            suffix="   +"
                            className='text-white text-6xl font-semibold'
                        />
                        <span className='text-white text-xl mt-2'>{t('statistic.text3')}</span>
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
                        <span className='text-white text-xl mt-2'>{t('statistic.text4')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

