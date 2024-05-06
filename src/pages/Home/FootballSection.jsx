import React, { useState } from 'react'
import Card2 from '../../components/Card2';
import useGetData from '../../customHook/useGetData';
import useFilterSport from '../../customHook/useFilterSport';
import SideNav from '../../components/NavBar/SideNav';

const FootballSection = () => {
    let allData = useGetData();
    let filterData = useFilterSport(allData, 'Football');
    const [footballData, setFootballData] = useState(filterData.slice(0, 4));

    return (
        <>
            <section className='section'>
                <h1 className='sectionHeader bg-footballBg'>Football News</h1>
                <div className='mt-14 w-full flex justify-between m-d:flex-col gap-6'>
                    <div className='flex flex-col gap-5'>
                        {
                            footballData.map((item, index) => {
                                const { id, title, date, news, img } = item;
                                return (
                                    <div key={index}>
                                        <Card2
                                            id={id}
                                            title={title}
                                            date={date}
                                            news={news}
                                            img={img}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='min-w-96 xl:min-w-80 lg:min-w-64 mlg:min-w-56'>
                        <SideNav />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FootballSection;