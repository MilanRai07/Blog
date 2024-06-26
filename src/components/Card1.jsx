import React from 'react'
import useColorFilter from '../customHook/useColorFilter';
import useNewsNavigate from '../customHook/useNewsNavigate';

const Card1 = (props) => {
    const { img, id, date, sport, title } = props;
    const { Navigation } = useNewsNavigate();

    return (
        <>
            <div className='h-auto rounded-md w-72 bg-white dark:bg-stone-700 overflow-hidden'>
                <div className='h-40 md:h-36 overflow-hidden'>
                    <img src={img} alt={title} className='imgCustom'></img>
                </div>
                <div className='p-3'>
                    <div className='flex justify-between p-1'>
                        <p className='cardDateSport bg-customGreen-100 '>{date}</p>
                        <p className='cardDateSport cursor-pointer hover:brightness-90' style={{ backgroundColor: useColorFilter(sport) }}>{sport}</p>
                    </div>
                    <div className='mt-4 p-1 h-14 md:h-12'>
                        <h2 className=' font-bold md:text-sm dark:textDark'>{`${title.length < 45 ? title : title.slice(0, 45) + '...'}`} </h2>
                    </div>
                    <button className='button1 mt-4' onClick={() => Navigation(sport, id)}>
                        Read More
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card1;