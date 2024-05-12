import React, { useEffect, useState } from 'react'
import { ReactComponent as Left } from '../assets/left.svg';
import { ReactComponent as Right } from '../assets/right.svg';
import useNewsNavigate from '../customHook/useNewsNavigate';

const ImgSlider = (props) => {
    const { topData } = props;
    const [currentImg, setCurrentImg] = useState(0);
    const { Navigation } = useNewsNavigate();

    useEffect(() => {
        let changeImg = setTimeout(() => {
            if (currentImg == 2) {
                setCurrentImg(0);
            } else {
                setCurrentImg(currentImg + 1)
            }

        }, 5000);
        let changePosition = setTimeout(() => {
            let getTitle = document.getElementById('title');
            let getNews = document.getElementById('news');
            let getDate = document.getElementById('date');
            let getBtn = document.getElementById('btn');
            getNews.parentNode.removeChild(getNews);
            getTitle.style.top = "50%";
            getDate.style.top = "65%";
            getBtn.style.left = "50%";
        }, 2100)
        return () => {
            clearTimeout(changeImg)
            clearTimeout(changePosition)
        }
    })
    const right = () => {
        if (currentImg == 2) {
            setCurrentImg(0)
        } else {
            setCurrentImg(currentImg + 1);
        }
    }
    const left = () => {
        if (currentImg == 0) {
            setCurrentImg(2)
        } else {
            setCurrentImg(currentImg - 1)
        }
    }
    return (
        <>
            {
                topData.map((item, index) => {
                    const { id, img, title, news, date, sport } = item;
                    return (
                        <div key={index} className={index == currentImg ? 'opacity-100 duration-1000' : 'opacity-70 duration-1000'}>
                            {
                                index === currentImg &&
                                <div className='w-full h-topImg relative'>
                                    <img src={img} className='h-full w-full brightness-50' />
                                    <Left className='z-10 absolute top-1/2 left-10 cursor-pointer xs:size-10 xs:left-5' onClick={left} />
                                    <Right className='z-10 absolute top-1/2 right-10 cursor-pointer xs:size-10 xs:right-5' onClick={right} />
                                    <h1 id='title' className='absolute top-1/3 mlg:top-1/4 left-52 sm:left-28 xs:left-16 xs:w-40 text-white text-2xl mlg:text-xl sm:text-base xs:text-sm bg-textBg p-3 xs:p-2 rounded-md positionSmooth'>{title}</h1>
                                    <p id="date" className='absolute top-1/2 mlg:top-52 left-52 sm:left-28 xs:left-16 text-sm mlg:text-xs text-white bg-active p-1 rounded-md positionSmooth'>{date}</p>
                                    <p id='news' className='absolute bottom-1/4 left-52 sm:left-28 sm:top-1/2 right-52 text-white text-md mlg:text-sm sm:text-xs positionSmooth xs:hidden'>{`${news.slice(0, 200)}...`}</p>
                                    <button id='btn' className='absolute bottom-10 left-52 sm:left-28 sm:p-1 button1 positionSmooth xs:text-customSize xs:padding-0.5'
                                        onClick={() => Navigation(sport, id)}>
                                        Read More
                                    </button>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default ImgSlider;