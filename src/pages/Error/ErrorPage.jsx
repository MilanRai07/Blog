import React from 'react'
import { ReactComponent as Cat } from '../../assets/cat.svg'

const ErrorPage = () => {
    return (
        <div className='h-homeImg w-full flexCenter'>
            <div className='text-center'>
                <Cat className='sm:scale-90' />
                <h1 className='text-2xl mt-5 sm:text-base dark:textDark'>Page not Found</h1>
            </div>
        </div>
    )
};

export default ErrorPage;