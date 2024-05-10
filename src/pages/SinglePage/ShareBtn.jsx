import React from 'react'
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
const ShareBtn = () => {
    return (
        <>
            <div className='flex gap-4 text-sm sm-d:gap-2'>
                <div className='shareBtnDiv bg-blue-900'><Facebook className='small' />Facebook</div>
                <div className='shareBtnDiv bg-gradient-to-br from-purple-500 to-pink-500'><Instagram className='small' /> Instagram</div>
                <div className='shareBtnDiv bg-green-600'><Whatsapp className='small' />Whatsapp</div>
            </div>
        </>
    )
}

export default ShareBtn;