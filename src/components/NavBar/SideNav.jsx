import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import soccer from '/navBarImg/soccer.jpg';
import ufc from '/navBarImg/ufcring.jpg';
import basketball from '/navBarImg/basketballs.jpg'
import member from '/navBarImg/member.jpg'
const SideNav = () => {
    const [list, setList] = useState([
        { name: 'Football', path: '/football', img: soccer },
        { name: 'UFC', path: 'ufc', img: ufc },
        { name: 'BasketBall', path: 'basketball', img: basketball },
        { name: 'Be a member', path: 'beamember', img: member },
    ])
    return (
        <>
            <div className='flex flex-col gap-5'>
                {
                    list.map((item, index) => {
                        const { name, path, img } = item;
                        return (
                            <div key={index}>
                                <NavLink to={path}>
                                    <div className='h-20 w-full relative cursor-pointer hover:scale-105 transition-all duration-2000 ease-in-out'>
                                        <img src={img} className='w-full h-full object-cover rounded-lg brightness-50 '></img>
                                        <p className='text-lg lg:text-base dark:textDark text-white absolute top-1/3 inset-x-0'>{name}</p>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SideNav;

