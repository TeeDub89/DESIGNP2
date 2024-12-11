'use client';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from 'next/image';

export function Background() {
    return (
 
            <Parallax pages={2} style={{ top: 0, left: 0 }} className="animation">
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>
                    <div className="animation_layer parallax" id="moon"><Image src="/images/m"></Image></div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>
                    <div className="animation_layer parallax" id="cloud"></div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>
                    <div className="animation_layer parallax" id="cloud2"></div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>
                    <div className="animation_layer parallax" id="city-far"></div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>
                    <div className="animation_layer parallax" id="city-med"></div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>
                    <div className="animation_layer parallax" id="city-close"></div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>
                    <div className="animation_layer parallax" id="ground"></div>
                </ParallaxLayer>
            </Parallax>
    );
}