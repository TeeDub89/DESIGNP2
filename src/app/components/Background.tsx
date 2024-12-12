'use client';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
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
  const [scrollPercent, setScrollPercent] = useState(0);

  // Smooth scale animation for the moon
  const moonScale = useSpring({
    scale: scrollPercent,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const { current: parallax } = parallaxRef;
        const scrollTop = parallax.container.current.scrollTop;
        const scrollHeight = parallax.container.current.scrollHeight;
        const clientHeight = parallax.container.current.clientHeight;

        // Calculate scroll percentage for moon growth
        const maxScroll = scrollHeight - clientHeight;
        const percentage = Math.min(scrollTop / maxScroll, 1);
        setScrollPercent(percentage);

        // Check for bottom reach and scroll direction
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
    <Parallax ref={parallaxRef} pages={2.5} className="h-screen">
      <ParallaxLayer offset={0} speed={0.1}>
        <div className="absolute top-0 left-0 w-full text-center p-4 bg-[#1A1A1A] text-white text-[28px] font-custom">
          Click the moon to learn more about me, or scroll down to see my projects!
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={-0.8}>
        <div className="flex justify-center items-center">
          {/* Animated moon with scaling */}
          <animated.div
            style={{
              transform: moonScale.scale.to((s) => `scale(${1 + s * 0.5})`),
            }}
            onClick={onShowAbout}
            className="cursor-pointer"
          >
            <Image src="/images/moon.png" alt="moon" width={250} height={250} />
          </animated.div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.1} speed={0.15}>
        <div style={{ opacity: 0.5 }}>
          <Image src="/images/cloud1.png" alt="cloud1" layout="responsive" width={100} height={50} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.3}>
        <div style={{ opacity: 0.5 }}>
          <Image src="/images/cloud2.png" alt="cloud2" layout="responsive" width={100} height={50} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.3}>
        <Image src="/images/city1.png" alt="city1" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.4} speed={0.5}>
        <Image src="/images/city2.png" alt="city2" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.6}>
        <Image src="/images/city3.png" alt="city3" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.7}>
        <Image src="/images/ground.png" alt="ground" layout="responsive" width={50} height={25} />
      </ParallaxLayer>
    </Parallax>
  );
}
