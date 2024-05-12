import React, { useState } from 'react'
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Right } from '../../assets/right.svg';
import Card1 from '../../components/Card1';
import usePopularData from '../../customHook/usePopularData';
import useGetData from '../../customHook/useGetData';

const Popular = () => {
   let allData = useGetData();
   let filterData = usePopularData(allData);
   const [popularData, setPopularData] = useState(filterData);

   const slideLeft = () => {
      let slideDiv = document.getElementById('sliderDiv');
      slideDiv.scrollLeft = slideDiv.scrollLeft - 500;
   }
   const slideRight = () => {
      let slideDiv = document.getElementById('sliderDiv');
      slideDiv.scrollLeft = slideDiv.scrollLeft + 500;
   }
   return (
      <>
         <section className='section' >
            <h1 className='sectionHeader bg-customGreen-100 '>Popular News</h1>
            <div className=' bg-sliderBg mt-14 rounded-md dark:bg-stone-800'>
               <div className='flex justify-between p-7'>
                  <Left className="slideArrow" onClick={slideLeft} />
                  <Right className="slideArrow" onClick={slideRight} />
               </div>
               <div className='p-5'>
                  <div id='sliderDiv' className='flex overflow-hidden gap-6 scroll-smooth'>
                     {
                        popularData.map((item, index) => {
                           const { img, date, title, sport, id } = item;
                           return (
                              <div key={index}>
                                 <Card1
                                    img={img}
                                    date={date}
                                    title={title}
                                    sport={sport}
                                    id={id}
                                 />
                              </div>
                           )
                        })
                     }
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Popular;