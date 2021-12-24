import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Parallaximage from './Parallaximage'
import image1 from './img/gym1.jpg'
import image2 from './img/gym2.jpg'
import image3 from './img/gym3.jpg'
import image4 from './img/gymbannwif.png'
import image13 from './img/gofitlogo4psblack.png' 
import image5 from './img/gym4.jpg'
import image6 from './img/gym5.jpg'
import image7 from './img/gym6.jpg'
import image8 from './img/gym7.jpg'
import image9 from './img/background.jpg' 
import image10 from './img/gym9.jpg' 
import image11 from './img/gymlong1.jpg' 
import image12 from './img/gymlong2.jpg' 
import { useState } from 'react'
import Imagething from './Imagething'


const Header = () => {
  const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

function css(element, style) {
  for (const property in style)
      element.style[property] = style[property];
}



window.addEventListener("scroll", function() {
  console.log(this.scrollY)
  if(this.scrollY > 900) {
    var element = document.querySelector(".jsheader")
css(element, {
  'background-color': '#bcb0a3',
});
  }else if (this.scrollY <=  900){
    var element = document.querySelector(".jsheader")
css(element, {
  'background-color': 'transparent',
});
  }
})


    return (
        
        <ParallaxProvider>
<div>
<div>   
        <div id="js-header"
         className="jsheader fixed z-10 bg-opacity transition-all duration-500 "  >
          <div className="  text-white w-screen  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <div className="w-full  ">
            <div  className="  max-w-screen-xl mx-auto md:items-center md:justify-between   xl:mx-28 ">
              <div className=" flex flex-cols-2 mx-auto">
              <button onClick={handleClick} className="pl-5 h-24 rounded-lg  px-4 focus:outline-none focus:shadow-outline transition duration-200">
                  <div >
                  <svg  fill="currentColor" viewBox="0 0 20 20" className="w-14  h-14 translate hover:text-[#796046] rounded-lg transition-all">
                    <path className={`${click ? 'translate-x-full' : 'translate-x-0'} transition-all`} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                   
                </svg>
                </div>
                </button>
                <div className="mx-auto">
                <img src={image13} alt="try1" className=" top-0 h-20 justfiy-center  mx-auto "></img>
                </div>
                </div>
                
              <div  className={`${click ? ' translate-y-0 ' : ' -translate-y-full  '} top-0 absolute left-0 right-0 transition-transform bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90  bg-gray-600 md:text-opacity-100 grid grid-rows-auto duration-500   transform font-bold font-heading text-white    pb-4 md:pb-0 `}>
                
              <button onClick={handleClick} className="md:pl-32 h-24 rounded-lg justify-end px-4 focus:outline-none focus:shadow-outline transition duration-200">
              <svg  fill="currentColor" viewBox="0 0 20 20" className="w-14 opacity-85  h-14 translate hover:text-[#867059] rounded-lg transition-all ">
              <path className={`${click ? 'translate-x-0' : 'translate-x-full'} transition-all `} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                     
              </svg>
              </button>
              <div className="grid md:grid-cols-4 grid-cols-2  text-center h-38 justify-center ">
                <div id="id2" className=" hover:border-t-white  border-black border-t-2 border-r-2 py-2 duration-300 transition-all  
                
                  
                  ">
                <a className=" 
                [stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
                   
                     
                    
                     
                text-xl py-2 mt-2  transition-all duration-300  font-bold bg-transparent  md:mt-0  hover:text-[#867059] focus:text-gray-900   focus:outline-none focus:shadow-outline" href="index.html">Home
                <svg className="mx-auto 
             
             
    
    
                 
                 " width="150px" height="150px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path id="id1" class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
                </a>
                </div>


                <div className="hover:border-t-white  border-black  border-t-2 py-2 transition-all duration-100">
                <a className=" [stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
                py-2 mt-2 text-xl font-bold bg-transparent rounded-lg transition-all duration-100  md:mt-0  hover:text-[#867059] focus:text-gray-900 focus:outline-none focus:shadow-outline" href="Gallery.html">Gallery
                <svg className="mx-auto" width="150px" height="150px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
               </a>
                </div>

                <div className="hover:border-t-white  border-black border-r-2 md:border-x-2 border-t-2 py-2 transition-all duration-100">
                 <a className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
                  py-2 mt-2 text-xl font-bold bg-transparent rounded-lg  transition-all duration-100 md:mt-0  hover:text-[#867059] focus:text-gray-900  focus:outline-none focus:shadow-outline" href="Location.html">Location
                 <svg className="mx-auto" width="150px" height="150px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
                 </a>
                 </div>
                 <div className="hover:border-t-white  border-black border-t-2 py-2  transition-all duration-100 ">
                <a className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
                 py-2 mt-2 text-xl font-bold bg-transparent rounded-lg  transition-all duration-100 md:mt-0 hover:text-[#867059] focus:text-gray-900   focus:outline-none focus:shadow-outline" href="Contact.html">Contact
                <svg className="mx-auto" width="150px" height="150px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
                </a>
                </div>
                </div>
                  </div>
                </div>    
                
              </div>
            
            </div>
          </div>
          
        </div>
       

      
  

</div>
<div className="">
<Parallaximage imgsrc={image9} height="1000px" amount="0.9" tagOuter="figure1"  opacity=".5"> 
</Parallaximage>




<div className="hidden md:flex md:flex-row flex-col px-5 mx-auto gap-x-6 bg-[#534334]">

            <div className=" ">
                <Parallax x={[100, -100]}  tagOuter="figure" className="relative max-w-sm  py-5 md:py-20 top-0 mx-auto">
                <img src={image1} alt="try1" className=" h-64 rounded-xl"></img>
                </Parallax>
            </div>

            
            <div className="">
                <Parallax x={[50, -50]}   tagOuter="figure" className="relative max-w-sm py-5 md:py-20 top-0 mx-auto">
                <img src={image2} alt="try1" className="h-64 rounded-xl  "></img>
                </Parallax>
            </div>


            <div className="">
                <Parallax x={[-50, 50]}   tagOuter="figure" className="relative max-w-md py-5 md:py-20 top-0 mx-auto">
                <img src={image3} alt="try1" className="h-64 rounded-xl "></img>
                </Parallax>
            </div>


            <div className="">
                <Parallax x={[-100, 100]}   tagOuter="figure" className="relative max-w-md py-5 md:py-20 top-0 mx-auto">
                <img src={image4} alt="try1" className="h-64  rounded-xl"></img>
                </Parallax>
            </div>

            </div>

           <div className="hidden">-----</div> 
            <div className="flex-col md:hidden px-5 mx-auto gap-x-6 bg-[#534334]">

<div className=" ">
    <Parallax x={[50, -50]}  tagOuter="figure" className="relative max-w-sm  py-5 md:py-20 top-0 mx-auto">
    <img src={image1} alt="try1" className=" h-64 rounded-xl"></img>
    </Parallax>
</div>


<div className="">
    <Parallax x={[25, -25]}   tagOuter="figure" className="relative max-w-sm py-5 md:py-20 top-0 mx-auto">
    <img src={image2} alt="try1" className="h-64 rounded-xl  "></img>
    </Parallax>
</div>


<div className="">
    <Parallax x={[-25, 25]}   tagOuter="figure" className="relative max-w-md py-5 md:py-20 top-0 mx-auto">
    <img src={image3} alt="try1" className="h-64 rounded-xl "></img>
    </Parallax>
</div>


<div className="">
    <Parallax x={[-50, 50]}   tagOuter="figure" className="relative max-w-md py-5 md:py-20 top-0 mx-auto">
    <img src={image4} alt="try1" className="h-64  rounded-xl"></img>
    </Parallax>
</div>

</div>

<div className="hidden">-----</div> 

            <div className=" hidden md:flex px-5 mx-auto gap-x-6 bg-[#534334]">

<div className="">
    <Parallax y={[50, -50]}  tagOuter="figure" className="relative max-w-sm  py-20 top-0 mx-auto">
    <img src={image5} alt="try1" className=" h-64 rounded-xl"></img>
    </Parallax>
</div>


<div className="">
    <Parallax y={[25, -25]}   tagOuter="figure" className="relative max-w-sm  py-20 top-0 mx-auto">
    <img src={image6} alt="try1" className="h-64  rounded-xl "></img>
    </Parallax>
</div>


<div className="">
    <Parallax y={[-25, 25]}   tagOuter="figure" className="relative max-w-md  py-20 top-0 mx-auto">
    <img src={image7} alt="try1" className="h-64 rounded-xl  "></img>
    </Parallax>
</div>


<div className="">
    <Parallax y={[-50, 50]}   tagOuter="figure" className="relative max-w-md  py-20 top-0 mx-auto">
    <img src={image8} alt="try1" className="h-64 rounded-xl "></img>
    </Parallax>
</div>

</div>
<div className="hidden">-----</div> 
<div className="flex-col md:hidden px-5 mx-auto gap-x-6 pt-10 bg-[#534334]">

<div className="">
    <Parallax y={[-50, 50]}  tagOuter="figure" className="relative max-w-sm  py-10 top-0 mx-auto">
    <img src={image5} alt="try1" className=" h-64 "></img>
    </Parallax>
</div>


<div className="">
    <Parallax y={[25, -25]}   tagOuter="figure" className="relative max-w-sm  py-10 top-0 mx-auto">
    <img src={image6} alt="try1" className="h-64   "></img>
    </Parallax>
</div>


<div className="">
    <Parallax y={[-25, 25]}   tagOuter="figure" className="relative max-w-md  py-10 top-0 mx-auto">
    <img src={image7} alt="try1" className="h-64   "></img>
    </Parallax>
</div>


<div className="">
    <Parallax y={[50, -50]}   tagOuter="figure" className="relative max-w-md  py-10 top-0 mx-auto">
    <img src={image8} alt="try1" className="h-64  "></img>
    </Parallax>
</div>

</div>



<div className="bg-[#796046] text-white font-serif">
  <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className=" md:w-1/2 md:h-full ">
    <Parallaximage imgsrc={image10} height="900px"  tagOuter="figure1"  opacity=".5"> 
    </Parallaximage>
    </div>
  <div className="bg-[#796046]  md:w-1/2 md:h-full text-3xl text-semibold p-5 ">
    <div className="items-center relative md:top-32 justify-center ">
    <svg className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
    items-center relative  justify-center flex mx-auto" width="300px" height="300px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
    </div>
      <h1 className="text-4xl text-center py-3 justify-center items-center flex h-full md:pt-64 ">
      Lorem ipsum dolor sit
      </h1>
      <p className=" text-center py-3 px-16 justify-center items-center flex h-full my-auto mx-auto leading-relaxed">
    amet, consectetur adipiscing elit. Aliquam mi turpis, mattis viverra dui eget, sollicitudin tincidunt nisl. Nunc tortor eros, 
    convallis eget hendrerit eu, dignissim non odio. 
      </p>
    </div>
    
  </div>
</div>



<div className="bg-[#534334] text-white font-serif ">
  <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className=" md:w-1/2 md:h-full ">
    <Parallaximage imgsrc={image10} height="900px"  tagOuter="figure1"  opacity=".5"> 
    </Parallaximage>
    </div>
  <div className="bg-[#534334]  md:w-1/2 md:h-full text-3xl text-semibold p-5 ">
    <div className="items-center relative md:top-32 justify-center ">
    <svg className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
    items-center relative  justify-center flex mx-auto" width="300px" height="300px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
    </div>
      <h1 className="text-4xl text-center py-3 justify-center items-center flex h-full md:pt-64">
      Lorem ipsum dolor sit
      </h1>
      <p className=" text-center py-3 px-16 justify-center items-center flex h-full my-auto mx-auto leading-relaxed">
    amet, consectetur adipiscing elit. Aliquam mi turpis, mattis viverra dui eget, sollicitudin tincidunt nisl. Nunc tortor eros, 
    convallis eget hendrerit eu, dignissim non odio. 
      </p>
    </div>
    
  </div>
</div>


<div className="bg-[#796046] text-white font-serif">
  <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className="bg-[#796046] md:w-1/2 md:h-full text-3xl text-semibold p-5 ">
    <div className="items-center relative md:top-32 justify-center ">
    <svg className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
    items-center relative  justify-center flex mx-auto" width="300px" height="300px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
    </div>
      <h1 className="text-4xl text-center py-3 justify-center items-center flex h-full md:pt-64">
      Lorem ipsum dolor sit
      </h1>
      <p className=" text-center py-3 px-16 justify-center items-center flex h-full my-auto mx-auto leading-relaxed">
    amet, consectetur adipiscing elit. Aliquam mi turpis, mattis viverra dui eget, sollicitudin tincidunt nisl. Nunc tortor eros, 
    convallis eget hendrerit eu, dignissim non odio. 
      </p>
    </div>
    <div className=" md:w-1/2 md:h-full ">
    <Parallaximage imgsrc={image12} height="900px"  tagOuter="figure1"  opacity=".5"> 
    </Parallaximage>
    </div>
  </div>
</div>



<div className=" bg-[#534334] text-white font-serif">
  <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className="bg-[#534334] md:w-1/2 md:h-full text-3xl text-semibold p-5 ">
    <div className="items-center relative md:top-32 justify-center ">
    <svg className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:342.269775390625px;]
                  [stroke-dashoffset:-342.269775390625px;]
                  animate-dashneg
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                    hover:[fill:transparent;]
                    hover:[stroke-dasharray:342.269775390625px;]
                     hover:[stroke-dashoffset:-342.269775390625px;]
                     hover:animate-dash
    items-center relative  justify-center flex mx-auto" width="300px" height="300px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
    </div>
      <h1 className="text-4xl text-center py-3 justify-center items-center flex h-full md:pt-64">
      Lorem ipsum dolor sit
      </h1>
      <p className=" text-center py-3 px-16 justify-center items-center flex h-full my-auto mx-auto leading-relaxed ">
    amet, consectetur adipiscing elit. Aliquam mi turpis, mattis viverra dui eget, sollicitudin tincidunt nisl. Nunc tortor eros, 
    convallis eget hendrerit eu, dignissim non odio. 
      </p>
    </div>
    <div className=" md:w-1/2 md:h-full ">
    <Parallaximage imgsrc={image11} height="900px"  tagOuter="figure1"  opacity=".5"> 
    </Parallaximage>
    </div>
  </div>
</div>


      </div>
        </ParallaxProvider>
    )
}

export default Header
