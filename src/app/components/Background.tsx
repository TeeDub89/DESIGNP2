'use client';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface BackgroundProps {
  onReachBottom: () => void;
  onScrollUp: () => void;
  onShowAbout: () => void;
}

export function Background({ onReachBottom, onScrollUp, onShowAbout }: BackgroundProps) {
  const parallaxRef = useRef<Parallax>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const { current: parallax } = parallaxRef;
        const scrollTop = parallax.container.current.scrollTop;
        const scrollHeight = parallax.container.current.scrollHeight;
        const clientHeight = parallax.container.current.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
          onReachBottom();
        } else if (scrollTop < lastScrollTop) {
          onScrollUp();
        }

        setLastScrollTop(scrollTop);
      }
    };

    const parallaxElement = parallaxRef.current?.container.current;
    parallaxElement?.addEventListener('scroll', handleScroll);

    return () => {
      parallaxElement?.removeEventListener('scroll', handleScroll);
    };
  }, [onReachBottom, onScrollUp, lastScrollTop]);

  return (
    <Parallax ref={parallaxRef} pages={2.5}>
      <ParallaxLayer offset={0} speed={0}>
        <div className="absolute top-0 left-0 w-full text-center p-4 bg-gray-800 text-white">
          Click the moon or scroll down
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0.1}>
        <div onClick={onShowAbout} className="cursor-pointer">
          <Image src="/images/moon.png" alt="moon" width={250} height={250} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.1} speed={0.15}>
        <Image src="/images/-5.png" alt="cloud1" layout="responsive" width={100} height={50} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.3}>
        <Image src="/images/-4.png" alt="cloud2" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={0.4}>
        <Image src="/images/-3.png" alt="city1" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.4} speed={0.5}>
        <Image src="/images/-2.png" alt="city2" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.6}>
        <Image src="/images/-1.png" alt="city3" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.7}>
        <Image src="/images/0.png" alt="ground" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
    </Parallax>
  );
}