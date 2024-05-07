import React, { useState } from 'react'
import TopImg from './TopImg'
import FootballNews from './FootballNews'
import useGetData from '../../customHook/useGetData';
import useFilterSport from '../../customHook/useFilterSport';

const FootballPage = () => {
    let Data = useGetData();
    let footBallData = useFilterSport(Data, 'Football');
    const [topData, setTopData] = useState(footBallData.slice(0, 3));
    const [otherNews, setOtherNews] = useState(footBallData.slice(3))

    return (
        <>
            <div>
                <TopImg topData={topData} />
            </div>
            <div className='px-10'>
                <FootballNews otherNews={otherNews} />
            </div>
        </>
    )
}

export default FootballPage