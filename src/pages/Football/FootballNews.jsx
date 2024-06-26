import React from 'react'
import Card3 from '../../components/Card3';

const FootballNews = (props) => {
    const { otherNews } = props;
    return (
        <>
            <div className='section'>
                <h1 className='sectionHeader bg-active'>Football News</h1>
                <div className='mt-14 flex w-full flex-wrap gap-9 justify-center' >
                    {
                        otherNews.map((item, index) => {
                            const { id, news, title, img, date, sport } = item;
                            return (
                                <div key={index}>
                                    <Card3
                                        id={id}
                                        news={news}
                                        title={title}
                                        img={img}
                                        date={date}
                                        sport={sport}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FootballNews