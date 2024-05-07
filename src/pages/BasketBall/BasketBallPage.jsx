import React, { useState } from 'react'
import TopImg from './TopImg'
import BasketBallNews from './BasketBallNews'
import useGetData from '../../customHook/useGetData';
import useFilterSport from '../../customHook/useFilterSport';

const BasketBallPage = () => {
    window.scroll(0, 0);
    let Data = useGetData();
    let footBallData = useFilterSport(Data, 'Basketball');
    const [topData, setTopData] = useState(footBallData.slice(0, 3));
    const [otherNews, setOtherNews] = useState(footBallData.slice(3))

    return (
        <>
            <div>
                <TopImg topData={topData} />
            </div>
            <div className='px-10'>
                <BasketBallNews otherNews={otherNews} />
            </div>
        </>
    )
}

export default BasketBallPage;