import React, { useState } from 'react'
import TopImg from './TopImg'
import UFCNews from './UFCNews'
import useGetData from '../../customHook/useGetData';
import useFilterSport from '../../customHook/useFilterSport';

const UFCPage = () => {
    window.scroll(0,0);
    let Data = useGetData();
    let footBallData = useFilterSport(Data, 'UFC');
    const [topData, setTopData] = useState(footBallData.slice(0, 3));
    const [otherNews, setOtherNews] = useState(footBallData.slice(3))

    return (
        <>
            <div>
                <TopImg topData={topData} />
            </div>
            <div className='px-10'>
                <UFCNews otherNews={otherNews} />
            </div>
        </>
    )
}

export default UFCPage