import React from 'react';
import ALlNewsSection from './ALlNewsSection';
import Popular from './Popular';
import FootballSection from './FootballSection';

const HomePage = () => {

  return (
    <div className='px-10 mt-3'>
      <ALlNewsSection />
      <Popular />
      <FootballSection />
    </div>
  )
}

export default HomePage