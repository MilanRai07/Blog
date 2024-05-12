import React, { useEffect, useState } from 'react'
import TopAds from '../../components/Ads/TopAds';
import { useParams } from 'react-router-dom';
import { Data } from '../../Data/Data';
import useColorFilter from '../../customHook/useColorFilter';
import ShareBtn from './ShareBtn';
import ConnectUs from './ConnectUs';
import Subscribe from './Subscribe';

const SinglePage = () => {
    window.scrollTo(0, 0)
    const { key } = useParams();
    const [selectdata, setSelectData] = useState('');
    let id = parseInt(key);

    useEffect(() => {
        let item = Data.find((item) => {
            return item.id === id;
        })
        setSelectData(item)
    }, [setSelectData, id])
    const { title, date, sport, img, news } = selectdata;

    return (
        <>
            <div className='px-10 mt-3 h-auto'>
                <TopAds />
                <div className='h-auto flex gap-5 mt-20 m-d:flex-wrap' >
                    <div>
                        <section className='flex flex-col gap-4 '>
                            <h1 className='text-2xl font-bold lg:text-xl dark:textDark'>{title}</h1>
                            <p className='text-xs text-slate-600 dark:textDark'>{date}</p>
                            <p className='cardDateSport w-14 cursor-pointer' style={{ backgroundColor: useColorFilter(sport) }}>{sport}</p>
                            <ShareBtn />
                            <img src={img} className='object-cover max-h-96 rounded-md sm-d:w-full'></img>
                            <p className='text-justify lg:text-sm sm-d:w-full sm:text-xs dark:textDark'>{news}</p>
                        </section>
                    </div>
                    <div className='flex-none h-auto w-1/3 m-d:flex m-d:justify-between m-d:w-full m-d:gap-16 sm-d:flex-col'>
                        <ConnectUs />
                        <Subscribe />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePage;
