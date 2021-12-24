import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import React from 'react'

const Parallaximage = (props) => {
    return (
       <ParallaxBanner layers={[{image: props.imgsrc, amount: 0.9},{image: props.imgsrc1, amount: 0.04} ]} style={{height: props.height, width: props.width}} >
        <div className="flex justify-center md:h-full  text-white text-4xl    mx-auto items-center ">
            {props.children}
        </div>
        </ParallaxBanner> 
        
        
    )
}

export default Parallaximage; 
