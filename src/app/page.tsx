'use client';
import React, { useState } from 'react';
import { Background } from './components/Background';
import Sample from './components/Sample';
import About from './components/About';

export default function Home() {
  const [showSample, setShowSample] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

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
        <div className='bg-slate-900 bg-cover bg-no-repeat min-h-screen'>
          <About />

        </div>
      ) : (
        <div className='bg-skybox bg-cover bg-no-repeat min-h-screen'>
          <Background onReachBottom={handleReachBottom} onScrollUp={handleScrollUp} onShowAbout={handleShowAbout} />
          {showSample && <Sample />}
        </div>
      )}
    </div>
  );
}