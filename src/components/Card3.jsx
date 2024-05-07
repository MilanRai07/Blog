import React from 'react'

const Card3 = (props) => {
    const { img, id, date, title, news } = props;

    return (
        <>
            <div className='h-auto rounded-md w-72 bg-white overflow-hidden shadow-customShadow hover:scale-customScale cursor-pointer'>
                <div className='h-40 md:h-36 overflow-hidden'>
                    <img src={img} alt={title} className='imgCustom'></img>
                </div>
                <div className='p-3'>
                    <div className='flex justify-between p-1'>
                        <p className='cardDateSport bg-customGreen-100 '>{date}</p>
                    </div>
                    <div className='mt-3 p-1 h-14 md:h-12'>
                        <h2 className=' font-bold md:text-sm'>{`${title.length < 45 ? title : title.slice(0, 45) + '...'}`} </h2>
                    </div>
                    <div>
                        <p className='text-sm sm:text-xs'>{`${news.slice(0, 50)}...`}</p>
                    </div>
                    <button className='button1 mt-4'>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Card3;