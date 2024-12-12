'use client';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Background } from './components/Background';
import Sample from './components/Sample';
import About from './components/About';
import { MobileBackground } from './components/MobileBackground';
import AboutMobile from './components/MobileAbout';

export default function Home() {
  const [showSample, setShowSample] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleReachBottom = () => {
    setShowSample(true);
  };

  const handleScrollUp = () => {
    setShowSample(false);
  };

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  return (
    <div>
      {showAbout ? (
        <div className='bg-[#1A1A1A] bg-cover bg-no-repeat min-h-screen'>
          {isMobile ? <AboutMobile /> : <About />}
        </div>
      ) : (
        <div className='bg-skybox bg-cover bg-no-repeat min-h-screen'>
          {isMobile ? (
            <MobileBackground />
          ) : (
            <Background onReachBottom={handleReachBottom} onScrollUp={handleScrollUp} onShowAbout={handleShowAbout} />
          )}
          {showSample && <Sample />}
        </div>
      )}
    </div>
  );
}