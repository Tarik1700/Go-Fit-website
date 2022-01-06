import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image10 from './img/gym9.jpg' 
import image9 from './img/background1.jpg' 
import image11 from './img/gymlong1.jpg' 
import image12 from './img/blackbg3.jpg' 
import image4 from './img/gymbannwif.png'
import image3 from './img/blackbg2.jpg'






const Parallaxtry = () => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {


      let images  = [  image10, image3, image4,  image12]
      
    gsap.utils.toArray("section").forEach((section, i) => {
        section.bg = section.querySelector(".bg"); 
      
        
        section.bg.style.backgroundImage = `url(${images[i]})`;
          
        if (i) {
          section.bg.style.backgroundPosition = `50% ${-window.innerHeight / 0.5}px`;
      
          gsap.to(section.bg, {
            backgroundPosition: `50% ${window.innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              scrub: true
            }
          });
        } 
        
        
        else {
          section.bg.style.backgroundPosition = "50% -800px"; 
      
          gsap.to(section.bg, {
            backgroundPosition: `50% ${window.innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top", 
              end: "bottom top",
              scrub: true
            }
          });
        }
      });
    });
    return (
        <div id="aboutus" className="z-20">
            <div className=" absolute  left-0 right-1/2 h-[100vh]">
           
            </div>
            <div className="bg-[#796046]  text-white font-serif">
            <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className=" md:w-1/2 h-[80vh] md:h-full ">
  <section id="firsttry">
  <div className="bg flex items-center justify-center relative h-[100vh]"></div>
  
</section>
    </div>
  <div className="bg-[#796046] z-20 md:w-1/2 md:h-full  text-3xl text-semibold p-5 ">
    <div className="items-center relative top-28 md:top-32 justify-center ">
       <svg className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:1100px;]
                  [stroke-dashoffset:-1100px;]
                  animate-dashnegthree
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                   
                    
                    
                     hover:animate-dashnegtwo

    items-center relative transition-all duration-300 justify-center flex mx-auto h-[30vh] lg:h-full " id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="400px" height="400px"
	 viewBox="0 0 181.115 181.115">
<path id="svg" d="M11.688,181.115c-0.641,0-1.281-0.245-1.768-0.732l-9.188-9.188c-0.943-0.943-0.979-2.459-0.084-3.447l13.332-14.699
	l-9.001-9.001c-2.364-2.364-2.364-6.21,0-8.574l7.404-7.404c0.255-0.255,0.527-0.484,0.816-0.687l-4.397-4.397
	c-2.363-2.364-2.363-6.209-0.001-8.573l10.66-10.659c1.146-1.146,2.668-1.776,4.287-1.776s3.142,0.631,4.287,1.776l17.536,17.536
	l75.716-75.716l-17.536-17.536c-1.146-1.145-1.776-2.667-1.776-4.287s0.631-3.142,1.776-4.287l10.659-10.659
	c1.146-1.146,2.668-1.776,4.287-1.776c1.618,0,3.141,0.63,4.286,1.775l4.398,4.399c0.201-0.288,0.43-0.562,0.686-0.818l7.404-7.404
	c1.146-1.146,2.668-1.776,4.287-1.776s3.143,0.631,4.287,1.777l9.001,9l14.699-13.332c0.988-0.895,2.506-0.859,3.447,0.084
	l9.188,9.188c0.943,0.943,0.979,2.459,0.084,3.447l-13.332,14.699l9.001,9.001c2.364,2.364,2.364,6.21,0,8.574l-7.404,7.404
	c-0.255,0.255-0.527,0.484-0.816,0.687l4.397,4.397c2.363,2.364,2.363,6.209,0.001,8.573l-10.66,10.659
	c-1.146,1.146-2.668,1.776-4.287,1.776s-3.142-0.631-4.287-1.776l-17.536-17.536l-75.716,75.716l17.536,17.536
	c1.146,1.145,1.776,2.667,1.776,4.287s-0.631,3.142-1.776,4.287l-10.659,10.659c-1.146,1.146-2.668,1.776-4.287,1.776
	c-1.618,0-3.141-0.63-4.286-1.775l-4.398-4.399c-0.201,0.288-0.43,0.562-0.686,0.818l-7.404,7.404
	c-1.146,1.146-2.668,1.776-4.287,1.776s-3.143-0.631-4.287-1.777l-9.001-9l-14.699,13.332
	C12.891,180.9,12.289,181.115,11.688,181.115z M5.951,169.342l5.821,5.821l12.755-11.568l-7.008-7.008L5.951,169.342z
	 M16.671,131.292c-0.164,0-0.48,0.04-0.752,0.311l-7.404,7.404c-0.414,0.415-0.414,1.089,0,1.503l32.09,32.089
	c0.271,0.271,0.587,0.312,0.751,0.312s0.48-0.041,0.752-0.312l7.404-7.405c0.411-0.412,0.414-1.083,0.006-1.497l-32.096-32.096
	C17.15,131.332,16.835,131.292,16.671,131.292z M42.103,149.214l19.563,19.563c0.271,0.271,0.587,0.311,0.751,0.311
	c0.165,0,0.481-0.041,0.752-0.312l10.659-10.659c0.271-0.271,0.312-0.587,0.312-0.751s-0.041-0.48-0.312-0.751L24.5,107.287
	c-0.271-0.271-0.587-0.311-0.751-0.311c-0.165,0-0.481,0.041-0.752,0.312l-10.659,10.659c-0.414,0.414-0.414,1.088,0.001,1.503
	L42.103,149.214z M49.107,124.823l7.185,7.185l75.716-75.716l-7.185-7.185L49.107,124.823z M118.698,12.027
	c-0.165,0-0.481,0.041-0.752,0.312l-10.659,10.659c-0.271,0.271-0.312,0.587-0.312,0.751s0.041,0.48,0.312,0.751l49.328,49.328
	c0.271,0.271,0.587,0.311,0.751,0.311c0.165,0,0.481-0.041,0.752-0.312l10.659-10.659c0.414-0.414,0.414-1.088-0.001-1.503
	l-49.327-49.328C119.179,12.068,118.862,12.027,118.698,12.027z M142.547,28.365l21.146,21.146c0.271,0.271,0.587,0.312,0.751,0.312
	s0.48-0.041,0.752-0.312l7.404-7.404c0.414-0.415,0.414-1.089,0-1.503l-32.09-32.089c-0.271-0.271-0.587-0.312-0.751-0.312
	s-0.48,0.041-0.752,0.312l-7.404,7.405c-0.411,0.412-0.414,1.083-0.006,1.497L142.547,28.365z M156.588,17.52l7.008,7.008
	l11.568-12.755l-5.821-5.821L156.588,17.52z"/>

</svg>










    </div>
      <h1 className=" text-2xl lg:text-5xl text-center py-3 justify-center items-center flex h-full pt-28 md:pt-64 ">
      The best training equpiment
      </h1>
      <p className=" text-2xl lg:text-4xl text-center py-3  px-4 md:px-16 justify-center items-center flex h-full my-auto mx-auto lg:leading-normal">
    Our gym provides only the best machines, equipment and training that you could ever need. Every workout is possible for every
    part of the body  
      </p>
    </div>
    </div>
  </div>
            
  <div className="bg-[#534334] text-white font-serif">
            <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className=" md:w-1/2 h-[80vh] md:h-full ">
  <section id="firsttry">
  <div className="bg flex items-center justify-center relative h-[100vh]"></div>
  
</section>
    </div>
  <div className="bg-[#534334] z-20 md:w-1/2 md:h-full  text-3xl text-semibold p-5 ">
    <div className="items-center relative top-28 md:top-32 justify-center ">
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
    items-center relative  justify-center flex mx-auto h-[30vh] lg:h-full " width="400px" height="400px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
    </div>
      <h1 className=" text-2xl lg:text-5xl text-center py-3 justify-center items-center flex h-full pt-28 md:pt-64 ">
      Get the body you always wanted!
      </h1>
      <p className=" text-2xl lg:text-4xl text-center py-3  px-4 md:px-16 justify-center items-center flex h-full my-auto mx-auto lg:leading-normal">
    
    Nothing is free in life, YOU have to work for everything. The personal trainers in our gym will ensure that you get the results
    and the body you always desired  
      </p>
    </div>
    </div>
  </div>

  <div className="bg-[#796046]  text-white font-serif">
            <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className=" md:w-1/2 h-[80vh] md:h-full ">
  <section id="firsttry">
  <div className="bg flex items-center justify-center relative h-[100vh]"></div>
  
</section>
    </div>
  <div className="bg-[#796046] z-20 md:w-1/2 md:h-full  text-3xl text-semibold p-5 ">
    <div className="items-center relative top-28 md:top-32 justify-center ">
       <svg className="[stroke:white;]
                [stroke-width:0.8px;]
                [stroke-dasharray:1100px;]
                  [stroke-dashoffset:-1100px;]
                  animate-dashnegthree
                    hover:[stroke:white;]
                    hover:[stroke-width:0.8px;]
                   
                    
                    
                     hover:animate-dashnegtwo

    items-center relative transition-all duration-300 justify-center flex mx-auto h-[30vh] lg:h-full rotate-90" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="400px" height="400px"
	 viewBox="0 0 181.115 181.115">
<path id="svg" d="M11.688,181.115c-0.641,0-1.281-0.245-1.768-0.732l-9.188-9.188c-0.943-0.943-0.979-2.459-0.084-3.447l13.332-14.699
	l-9.001-9.001c-2.364-2.364-2.364-6.21,0-8.574l7.404-7.404c0.255-0.255,0.527-0.484,0.816-0.687l-4.397-4.397
	c-2.363-2.364-2.363-6.209-0.001-8.573l10.66-10.659c1.146-1.146,2.668-1.776,4.287-1.776s3.142,0.631,4.287,1.776l17.536,17.536
	l75.716-75.716l-17.536-17.536c-1.146-1.145-1.776-2.667-1.776-4.287s0.631-3.142,1.776-4.287l10.659-10.659
	c1.146-1.146,2.668-1.776,4.287-1.776c1.618,0,3.141,0.63,4.286,1.775l4.398,4.399c0.201-0.288,0.43-0.562,0.686-0.818l7.404-7.404
	c1.146-1.146,2.668-1.776,4.287-1.776s3.143,0.631,4.287,1.777l9.001,9l14.699-13.332c0.988-0.895,2.506-0.859,3.447,0.084
	l9.188,9.188c0.943,0.943,0.979,2.459,0.084,3.447l-13.332,14.699l9.001,9.001c2.364,2.364,2.364,6.21,0,8.574l-7.404,7.404
	c-0.255,0.255-0.527,0.484-0.816,0.687l4.397,4.397c2.363,2.364,2.363,6.209,0.001,8.573l-10.66,10.659
	c-1.146,1.146-2.668,1.776-4.287,1.776s-3.142-0.631-4.287-1.776l-17.536-17.536l-75.716,75.716l17.536,17.536
	c1.146,1.145,1.776,2.667,1.776,4.287s-0.631,3.142-1.776,4.287l-10.659,10.659c-1.146,1.146-2.668,1.776-4.287,1.776
	c-1.618,0-3.141-0.63-4.286-1.775l-4.398-4.399c-0.201,0.288-0.43,0.562-0.686,0.818l-7.404,7.404
	c-1.146,1.146-2.668,1.776-4.287,1.776s-3.143-0.631-4.287-1.777l-9.001-9l-14.699,13.332
	C12.891,180.9,12.289,181.115,11.688,181.115z M5.951,169.342l5.821,5.821l12.755-11.568l-7.008-7.008L5.951,169.342z
	 M16.671,131.292c-0.164,0-0.48,0.04-0.752,0.311l-7.404,7.404c-0.414,0.415-0.414,1.089,0,1.503l32.09,32.089
	c0.271,0.271,0.587,0.312,0.751,0.312s0.48-0.041,0.752-0.312l7.404-7.405c0.411-0.412,0.414-1.083,0.006-1.497l-32.096-32.096
	C17.15,131.332,16.835,131.292,16.671,131.292z M42.103,149.214l19.563,19.563c0.271,0.271,0.587,0.311,0.751,0.311
	c0.165,0,0.481-0.041,0.752-0.312l10.659-10.659c0.271-0.271,0.312-0.587,0.312-0.751s-0.041-0.48-0.312-0.751L24.5,107.287
	c-0.271-0.271-0.587-0.311-0.751-0.311c-0.165,0-0.481,0.041-0.752,0.312l-10.659,10.659c-0.414,0.414-0.414,1.088,0.001,1.503
	L42.103,149.214z M49.107,124.823l7.185,7.185l75.716-75.716l-7.185-7.185L49.107,124.823z M118.698,12.027
	c-0.165,0-0.481,0.041-0.752,0.312l-10.659,10.659c-0.271,0.271-0.312,0.587-0.312,0.751s0.041,0.48,0.312,0.751l49.328,49.328
	c0.271,0.271,0.587,0.311,0.751,0.311c0.165,0,0.481-0.041,0.752-0.312l10.659-10.659c0.414-0.414,0.414-1.088-0.001-1.503
	l-49.327-49.328C119.179,12.068,118.862,12.027,118.698,12.027z M142.547,28.365l21.146,21.146c0.271,0.271,0.587,0.312,0.751,0.312
	s0.48-0.041,0.752-0.312l7.404-7.404c0.414-0.415,0.414-1.089,0-1.503l-32.09-32.089c-0.271-0.271-0.587-0.312-0.751-0.312
	s-0.48,0.041-0.752,0.312l-7.404,7.405c-0.411,0.412-0.414,1.083-0.006,1.497L142.547,28.365z M156.588,17.52l7.008,7.008
	l11.568-12.755l-5.821-5.821L156.588,17.52z"/>

</svg>










    </div>
      <h1 className=" text-2xl lg:text-5xl text-center py-4 justify-center items-center flex h-full pt-28 md:pt-52  ">
      What do we offer at GO-FIT?
      </h1>
      <p className=" text-2xl lg:text-4xl text-center py-2  px-4 md:px-8 justify-center items-center flex h-full my-auto mx-auto lg:leading-normal">
    <ul>
      <li>Individual functional training sessions ( 1 on 1 )</li>
      <li>Semiindividual functional training sessions ( 2 on 1 )</li>
      <li>Functional training sessions in small groups ( 6 on 1 )</li>
      <li>Group training sessions at 3 timeslots 3 times a week</li>
      <li>A healthy meal ( oatmeal ) rich with nutritious ingrediends</li>
    </ul>
      </p>
    </div>
    </div>
  </div>
            
  <div className="bg-[#534334] text-white font-serif">
            <div className="grid-cols-2 flex flex-col md:flex-row mx-auto align-middle justify-center">
  <div className=" md:w-1/2 h-[80vh] md:h-full ">
  <section id="firsttry">
  <div className="bg flex items-center justify-center relative h-[100vh]"></div>
  
</section>
    </div>
  <div className="bg-[#534334] z-20 md:w-1/2 md:h-full  text-3xl text-semibold p-5 ">
    <div className="items-center relative top-28 md:top-32 justify-center ">
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
    items-center relative  justify-center flex mx-auto h-[30vh] lg:h-full " width="400px" height="400px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path class="cls-1" d="M32,53.55A17,17,0,0,1,17.45,27.86a15.49,15.49,0,0,1-.23-2.63,14.78,14.78,0,0,1,29.56,0,15.49,15.49,0,0,1-.23,2.63A17,17,0,0,1,32,53.55Zm0-41.1a12.79,12.79,0,0,0-12.51,15.4,1,1,0,0,1-.14.74,15,15,0,1,0,25.3,0,1,1,0,0,1-.14-.74A12.79,12.79,0,0,0,32,12.45ZM42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M42.77,25.8a1,1,0,0,1-.68-.26,14.95,14.95,0,0,0-20.18,0,1,1,0,0,1-1.68-.78,11.78,11.78,0,0,1,23.54,0,1,1,0,0,1-.58.95A1,1,0,0,1,42.77,25.8ZM32,19.62a16.88,16.88,0,0,1,9.38,2.83,9.78,9.78,0,0,0-18.76,0A16.88,16.88,0,0,1,32,19.62Z"/><path class="cls-1" d="M32.93,49.16h-.06C20.88,48.47,20,37.4,20,37.29a1,1,0,1,1,2-.12h0c0,.38.76,9.41,11,10a1,1,0,0,1-.06,2Z"/></svg>
    </div>
      <h1 className=" text-2xl lg:text-5xl text-center py-3 justify-center items-center flex h-full pt-28 md:pt-56 ">
      Self-defense training
      </h1>
      <p className=" text-2xl lg:text-4xl text-center py-3  px-4 md:px-16 justify-center items-center flex h-full my-auto mx-auto lg:leading-normal">
     
    Our newest addition is the GO-FIT self-defense training program for men and women. It was specially designed to introduce you to
    the basic concepts of personal physical defense and to teach you techniques of self-defense which you can use in your every-day life
      </p>
    </div>
    </div>
  </div>
           



  


        </div>
    )
}

export default Parallaxtry
