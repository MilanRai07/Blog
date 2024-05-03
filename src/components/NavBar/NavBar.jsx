import React, { useState } from 'react'
import { ReactComponent as Ball } from '../../assets/ball.svg';
import { ReactComponent as Ham } from '../../assets/ham.svg';
import { NavLink, Outlet } from 'react-router-dom';
import DropDown from './DropDown';
const NavBar = () => {
    const [showDropDown, setShowDropDown] = useState(false); //to toggle the hamburger dropdown menu
    const [NavList, setNavList] = useState([   //array object to map for list
        { name: 'Home', path: '/' },
        { name: 'Football', path: '/football' },
        { name: 'UFC', path: 'ufc' },
        { name: 'BasketBall', path: 'basketball' },
        { name: 'Be a member', path: 'beamember' },
        { name: 'About us', path: '/aboutus' }
    ])
    const toggleMenu = () => {  //toggle dropdown function
        setShowDropDown(!showDropDown)
    }

    return (
        <>
            <nav className='bg-customGreen w-full h-20 flex items-center justify-between px-10 text-white font-bold '>
                <div className='flex items-center gap-5' >
                    <Ball className="animate-rotateSlow" />
                    <h1 className='text-xl md:text-lg'>Sport News</h1>
                </div>
                <ul className='flex gap-8 xl:gap-2 xl:text-sm lg:gap-0 '>
                    {
                        NavList.map((item, index) => {
                            const { name, path } = item;
                            return (
                                <li key={index} >
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'navActive' : 'md:hidden p-7 lg:p-5 mlg:p-3 hover:bg-active'}>
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                    <li onClick={toggleMenu} className='hidden md:block hover:cursor-pointer'>
                        <Ham />
                    </li>
                </ul>
            </nav>
            {showDropDown ?
                <DropDown navList={NavList} toggleMenu={toggleMenu} /> //pass props to child
                :
                ''
            }
            <Outlet />
        </>
    )
}

export default NavBar;