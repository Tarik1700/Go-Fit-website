import React from 'react'
import ReactDOM from "react-dom";
import click from './Components/Header'

import Header from './Components/Header'
import Example from './Components/Menu'
import Landingpage from './Components/Landingpage'
import Imagething from './Components/Imagething'
import Imagetwo from './Components/Imagetwo'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import ParallaxImage  from './Components/Parallax'

window.onbeforeunload = function () {
  window.scrollTo(0, 0);

  ScrollTrigger.refresh();
}

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className=" grid grid-rows-2 max-wd-sm  md:max-wd-md lg:max-wd-lg xl:max-wd-xl absolute z-10  
      max-h-screen h-full top-16 left-0 right-0 bg-clip-padding  backdrop-blur-2xl  bg-opacity-60 ">
<div className=''>

</div>
<div className=" hidden md:block max-wd-sm  md:max-wd-md lg:max-wd-lg xl:max-wd-xl justify-center ">
<Imagething />
</div>
</div>
    <div className={`${click ? 'overflow-y-hidden' : 'overflow-y-visible'}  overflow-x-hidden `} >  
      <Header />
    </div>
    
    <div className=" bg-[#94806b]">
    <Imagetwo />
    
    </div>
    </div>
  )
}

export default App
