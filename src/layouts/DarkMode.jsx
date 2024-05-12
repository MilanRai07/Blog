import React, { useEffect, useState } from 'react'
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as Sun } from '../assets/sun.svg';

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    )
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <div onClick={changeTheme} className='cursor-pointer hover:scale-105'>
            {
                theme === 'light' ?
                    <Moon /> : <Sun />
            }
        </div>
    )
}

export default DarkMode;