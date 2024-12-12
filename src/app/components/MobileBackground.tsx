'use client';
import { useState } from 'react';
import Image from 'next/image';
import MobileAbout from './MobileAbout';

export function MobileBackground() {
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  return (
    <div className="relative min-h-screen bg-skybox bg-cover bg-no-repeat overflow-hidden">
      {showAbout ? (
        <MobileAbout />
      ) : (
        <>
          <div className="flex justify-center items-center mt-20">
            <div className="cursor-pointer">
              <Image src="/images/moon.png" alt="moon" width={250} height={250} />
            </div>
          </div>
          <div className="absolute bottom-[15%] left-0 w-full opacity-50">
            <Image src="/images/cloud1.png" alt="cloud1" layout="responsive" width={100} height={50} />
          </div>
          <div className="absolute bottom-[15%] left-0 w-full opacity-50">
            <Image src="/images/cloud2.png" alt="cloud2" layout="responsive" width={100} height={50} />
          </div>
          <div className="absolute bottom-[10%] left-0 w-full">
            <Image src="/images/city1.png" alt="city1" layout="responsive" width={50} height={25} />
          </div>
          <div className="absolute bottom-[5%] left-0 w-full">
            <Image src="/images/city2.png" alt="city2" layout="responsive" width={50} height={25} />
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <Image src="/images/city3.png" alt="city3" layout="responsive" width={50} height={25} />
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <Image src="/images/ground.png" alt="ground" layout="responsive" width={50} height={25} />
          </div>
          <div className="absolute bottom-[20%] left-0 w-full flex flex-col items-center space-y-4">
            <button
              className="w-[300px] h-[100px] bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex text-white font-custom text-[28px]"
              onClick={handleShowAbout}
            >
              About Me
            </button>
            <button className="w-[300px] h-[100px] bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex text-white text-[28px] font-custom">
              Samples
            </button>
          </div>
        </>
      )}
    </div>
  );
}