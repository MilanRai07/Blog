import React from 'react'
import useNewsNavigate from '../customHook/useNewsNavigate';

const Card2 = (props) => {
    const { id, title, date, news, img, sport } = props;
    const { Navigation } = useNewsNavigate();
    return (
        <>
            <div className='h-48 xl:h-52 max-w-fc flex rounded-xl overflow-hidden shadow-customShadow xs:flex-col'>
                <div className='h-full w-60 overflow-hidden'>
                    <img src={img} alt={title} className='imgCustom xs:hidden'></img>
                </div>
                <div className=' h-full max-w-fcDetail p-5 flex flex-col justify-center gap-3 text-start'>
                    <h2 className='text-lg font-bold lg:text-base sm:text-sm'>{title}</h2>
                    <p className='text-xs text-slate-600'>{date}</p>
                    <p className='break-words text-sm mlg:text-xs text-slate-700' >{`${news.slice(0, 145)}...`}</p>
                    <button className='button1 md:text-xs' onClick={() => Navigation(sport, id)} >Read More</button>
                </div>
            </div>
        </>
    )
}

export default Card2