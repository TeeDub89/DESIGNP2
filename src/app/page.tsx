'use client';
import React, { useState } from 'react';
import { Background } from './components/Background';
import Sample from './components/Sample';

export default function Home() {
  const [showSample, setShowSample] = useState(false);

  const handleReachBottom = () => {
    setShowSample(true);
  };

  const handleScrollUp = () => {
    setShowSample(false);
  };

  return (
    <div>
      <Background onReachBottom={handleReachBottom} onScrollUp={handleScrollUp} />
      {showSample && <Sample />}
    </div>
  );
}