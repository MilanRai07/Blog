import React from 'react'
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';

const ConnectUs = () => {
    return (
        <>
            <div className='mt-5 m-d:w-full m-d:text-center'>
                <h1 className='sectionHeader bg-customGreen-200 '>Connect with us</h1>
                <div className='mt-16 flex flex-col gap-4 md:mt-10'>
                    <div className='connectBtn bg-blue-900'><Facebook className='medium' />Facebook</div>
                    <div className='connectBtn bg-gradient-to-br from-purple-500 to-pink-500'><Instagram className='medium' /> Instagram</div>
                    <div className='connectBtn bg-green-600'><Whatsapp className='medium' />Whatsapp</div>
                    <div className='connectBtn bg-blue-500'><Linkedin className='medium' />Linked In</div>
                </div>
            </div>
        </>
    )
}

export default ConnectUs;