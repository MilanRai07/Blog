import React, { useState } from 'react'
import useGetData from '../../customHook/useGetData'
import useFilterOut from '../../customHook/useFilterOut';
import Card1 from '../../components/Card1';

const Others = () => {
  let allData=useGetData(); //get all data
  let noPopular=useFilterOut(allData,'popular') //filter out popular datas
  let noFootball=useFilterOut(noPopular,'Football'); //filter out football datas
  const [others,setOthers]=useState(noFootball.slice(0,8));

  return (
    
    <section className='section'>
      <h1 className='sectionHeader bg-basketBallBg'>Other News</h1>
      <div className='mt-14 flex w-full flex-wrap gap-9 justify-center'>
          {
            others.map((item,index)=>{
              const {id,sport,title,date,img}=item;
              return(
                <div key={index} className='shadow-customShadow rounded-md'>
                  <Card1
                  id={id}
                  title={title}
                  sport={sport}
                  date={date}
                  img={img}
                  />
                  </div>
              )
            })
          }
      </div> 
    </section>
  )
}

export default Others