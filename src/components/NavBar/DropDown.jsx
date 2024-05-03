import React from 'react'
import { NavLink } from 'react-router-dom';

const DropDown = (props) => {
    const { navList, toggleMenu } = props; //destructuring props
    return (
        <>
            <ul className='hidden md:flex flex-col w-full text-center font-bold text-sm ' >
                {
                    navList.map((item, index) => {
                        const { name, path } = item;
                        return (
                            <li key={index} className='border-b-2 py-1 hover:bg-active hover:text-white' onClick={toggleMenu}>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default DropDown;