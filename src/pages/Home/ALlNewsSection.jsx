import React, { useState } from 'react'
import useGetData from '../../customHook/useGetData';
import useColorFilter from '../../customHook/useColorFilter';

const ALlNewsSection = () => {
  const data = useGetData();
  let newData = data.slice(0, 9);
  return (
    <>
      <div className='grid grid-cols-3 gap-5 sm:grid-cols-2 m-auto'>
        {
          newData.map((item) => {
            const { img, sport, date, title, id } = item;
            return (
              <div key={id} className={`w-full shadow-2xl rounded-lg overflow-hidden relative
              ${id === 0 ? ' col-span-2 row-span-2 h-homeImg' : 'h-52 sm:h-44'}`}
              >
                <img src={img} className='imgCustom cursor-pointer '></img>
                <div className={`absolute bottom-8 text-white font-bold  bg-textBg w-full ${id === 0 ? 'p-5 text-xl md:text-lg' : 'p-1.5 md:text-sm xs:text-customSize xs:leading-customLineHeight'}`}>
                  <h2>{title.slice(0, 85)}</h2>
                </div>
                <p className={`absolute top-8 right-5 md:right-2 xs:right-1 text-white bg-customGreen-100 p-1 rounded-md ${id === 0 ? 'text-base md:text-sm' : 'text-xs md:p-0.5 xs:text-customSize'}`}>
                  {date}
                </p>
                <p
                  className={`absolute top-8 left-5 md:left-2 xs:left-1 cursor-pointer text-white rounded-md ${id === 0 ? 'text-base p-1.5' : 'text-xs p-1 md:p-0.5 xs:text-customSize'}`}
                  style={{ backgroundColor: useColorFilter(sport) }}
                >
                  {sport}
                </p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ALlNewsSection;