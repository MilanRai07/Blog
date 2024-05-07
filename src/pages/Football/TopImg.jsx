import React, { useState } from 'react'
import useGetData from '../../customHook/useGetData';
import ImgSlider from '../../components/ImgSlider';

const TopImg = () => {
    let Data = useGetData();
    const [topData, setTopData] = useState(Data.slice(0, 3));
    return (
        <>
            <ImgSlider topData={topData} />
        </>
    )
}

export default TopImg;