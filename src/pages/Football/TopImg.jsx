import React from 'react'
import ImgSlider from '../../components/ImgSlider';

const TopImg = (props) => {
    const { topData } = props;
    return (
        <>
            <ImgSlider topData={topData} />
        </>
    )
}

export default TopImg;