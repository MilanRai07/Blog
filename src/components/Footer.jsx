import React from 'react'
import { ReactComponent as Ball } from '../assets/ball.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Whatsapp } from '../assets/whatsapp.svg';

const Footer = () => {
  return (
    <>
      <div className='mt-20 min-h-60 2-full p-14 bg-customGreen-200 flexCenter'>
        <div className='flex flex-col items-center w-80 gap-5 '>
          <Ball className="animate-rotateSlow" />
          <h1 className='text-white font-bold text-xl'>Sport News</h1>
          <p className='text-white font-semibold text-base text-center'>This is a blog template. It is simply made with React Js and Tailwind CSS.
            It gives news about various sports
          </p>
          <div className='flex gap-5 '>
            <Facebook className="footerSVG" />
            <Instagram className="footerSVG" />
            <Linkedin className="footerSVG" />
            <Whatsapp className="footerSVG" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer