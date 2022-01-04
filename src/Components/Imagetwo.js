<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useEffect, useState } from "react";
>>>>>>> Stashed changes
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from './img/gym1.jpg'
import image2 from './img/gym2.jpg'
import image3 from './img/gym3.jpg'
import image4 from './img/gymbannwif.png'
import image5 from './img/gym4.jpg'
import image6 from './img/gym5.jpg'
import image7 from './img/gym6.jpg'
import image8 from './img/gym7.jpg'
<<<<<<< Updated upstream

gsap.registerPlugin(ScrollTrigger);

let sectionsone = gsap.utils.toArray(".imgmoveone");
gsap.fromTo(sectionsone, {x: 1680,   
}, {  x: "-640px",  scrollTrigger: { trigger:".trigger",
  scrub: 2,  start: "top 51%" ,end:"800 0%" }} )


                let sectionstwo = gsap.utils.toArray(".imgmove");
                gsap.fromTo(sectionstwo, {x: -1680,   
                }, {  x: "640px",  scrollTrigger: { trigger:".trigger2",
                  scrub: 2,  start: "top 100%" ,end:"800 0%" }} )
         
                  let sectionsthree = gsap.utils.toArray(".imgmovethree");
gsap.fromTo(sectionsthree, {x: 1680,  
}, {  x: "-640px",  scrollTrigger: { trigger:".trigger3",
  scrub: 2,  start: "top 100%" ,end:"800 0%" }} )

  let sectionstry = gsap.utils.toArray(".trigger");
  gsap.fromTo(sectionstry, {x: -1680,   color:"rgb(0,0,0)",
  }, {  x: "640px", color:"rgb(255,255,255)", scrollTrigger: { trigger:".trigger",
    scrub: 0.5,  start: "top 100%" ,end:"800 0%" }} )
  
    

    let sectionstry2 = gsap.utils.toArray(".triggertextlast");
    gsap.fromTo(sectionstry2, {x: -1680,  color:"rgb(0,0,0)",
    }, {  x: "640px", color:"rgb(255,255,255)", scrollTrigger: { trigger:".triggertextlast",
      scrub: 0.5,  start: "top 99%" ,end:"800 0%" }} )

=======
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
>>>>>>> Stashed changes

                  document.querySelectorAll("img").forEach(img => {
                    if (img.complete) {
                      ScrollTrigger.refresh();
                    } else {
                      img.addEventListener('load', imgLoaded => ScrollTrigger.refresh());
                    }
                  });

       
<<<<<<< Updated upstream
const Imagetwo = () => {
   
    return (
        <div className="relative container text-black">
            <div className='trigger h-5 text-[8rem] w-full font-semibold'> GOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFIT</div>
            <div id="testing" className="  flex pt-48 px-2 mx-auto gap-x-4  ">
<div className="imgmoveone flex gap-x-3">
<div className="testimg2">
    <img src={image5} alt="try1" height="700" width="700" className="  "></img>
    
</div>


<div className="testimg23">
<img src={image6} alt="try1" height="700" width="700" className="  "></img>
    
</div>


<div className="testimg23">
<img src={image7} alt="try1" height="700" width="700" className="  "></img>
  
</div>
</div>



</div>

<div className='trigger2 h-5'></div>
<div id="testing" className=" flex  px-2 mx-auto gap-x-4  ">
<div className="imgmove flex gap-x-3">
<div className="testimg2">
<img src={image1} alt="try1" height="700" width="700" className="  "></img>
    
</div>


<div className="testimg23">
<img src={image2} alt="try1" height="700" width="700" className="  "></img>
    
</div>


<div className="testimg23">
<img src={image3} alt="try1" height="700" width="700" className="  "></img>
  
</div>
=======


                


const Imagetwo = () => {
   
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
    let sectionsone = gsap.utils.toArray(".imgmoveone");
    gsap.fromTo(sectionsone, {x: 1680,   
    }, {  x: "-1880px",  scrollTrigger: { trigger:".trigger",
      scrub: 2,  start: "top 51%" ,end:"800 0%" }} )
    
    
    
                    let sectionstwo = gsap.utils.toArray(".imgmove");
                    gsap.fromTo(sectionstwo, {x: -1680,   
                    }, {  x: "640px",  scrollTrigger: { trigger:".trigger2",
                      scrub: 2,  start: "top 100%" ,end:"800 0%" }} )
             
                      let sectionsthree = gsap.utils.toArray(".imgmovethree");
    gsap.fromTo(sectionsthree, {x: 1680,  
    }, {  x: "-1640px",  scrollTrigger: { trigger:".trigger3",
      scrub: 2,  start: "top 100%" ,end:"800 0%" }} )
    
      let sectionstry = gsap.utils.toArray(".trigger");
      gsap.fromTo(sectionstry, {x: -1680,   color:"rgb(0,0,0)",
      }, {  x: "640px", color:"rgb(255,255,255)", scrollTrigger: { trigger:".trigger",
        scrub: 0.5,  start: "top 100%" ,end:"800 0%" }} )
      
        
    
        let sectionstry2 = gsap.utils.toArray(".triggertextlast");
        gsap.fromTo(sectionstry2, {x: -1680,  color:"rgb(0,0,0)",
        }, {  x: "640px", color:"rgb(255,255,255)", scrollTrigger: { trigger:".triggertextlast",
          scrub: 0.5,  start: "top 99%" ,end:"800 0%" }} )
        });


        const onInit = () => {
          console.log('lightGallery has been initialized');
      };

      

        
    return (
        <div className="relative md:container md:h-full  text-black">
            <div className='trigger h-5 text-[8rem] w-full font-semibold'> GOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFIT</div>
            <div id="testing" className="  flex pt-48 px-2 mx-auto gap-x-4  w-[140rem] h-[23rem] md:w-[140rem] md:h-[34rem]">
           
<div id="gallery-container" className="imgmoveone gap-x-3 grid grid-cols-4 md:h-full z-20 md:w-full h-[50%] w-[50%]">
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >

 <a href={image5}  > <img src={image5} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300   "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
 <a href={image6}  > <img src={image6} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
<a href={image7}  > <img src={image7} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
<a href={image8}  > <img src={image8} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>

</div>



</div>

<div className='trigger2 h-5'></div>
<div id="testing" className=" flex  px-2 mx-auto gap-x-4  w-[140rem]  h-[11rem] md:w-[140rem] md:h-[22rem] ">
<div className="imgmove grid grid-cols-4 gap-x-3 md:h-full md:w-full z-20 h-[50%] w-[50%]">
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >

 <a href={image1}  > <img src={image1} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
 <a href={image2}  > <img src={image2} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
<a href={image3}  > <img src={image3} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
<a href={image4}  > <img src={image4} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
>>>>>>> Stashed changes
</div>



</div>


<div className='trigger3 h-5'></div>
<<<<<<< Updated upstream
<div id="testing" className=" flex  px-2 mx-auto gap-x-4  ">
<div className="imgmovethree flex gap-x-3">
<div className="testimg3">
<img src={image1} alt="try1" height="700" width="700" className="  "></img>
    
</div>


<div className="testimg23">
<img src={image2} alt="try1" height="700" width="700" className="  "></img>
    
</div>


<div className="testimg23">
<img src={image3} alt="try1" height="700" width="700" className="  "></img>
  
</div>
=======
<div id="testing" className=" flex  px-2 mx-auto gap-x-4 w-[140rem] h-[10rem] md:w-[140rem] md:h-[23rem] ">
<div className="imgmovethree grid grid-cols-4 gap-x-3 md:h-full z-20 md:w-full h-[50%] w-[50%]">
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >

 <a href={image1}  > <img src={image1} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
 <a href={image2}  > <img src={image2} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
<a href={image3}  > <img src={image3} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
<LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]} >
<a href={image4}  > <img src={image4} alt="try1" height="100%" width="100%" className=" hover:opacity-80 transition-all duration-300  "></img>
</a>
</LightGallery>
>>>>>>> Stashed changes
</div>



</div>
<div className='triggertextlast h-10 text-[8rem] w-full font-semibold'> GOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFITGOFIT</div>
<<<<<<< Updated upstream
<div className="h-96">
=======
<div className="h-48">
>>>>>>> Stashed changes

</div>

        </div>
<<<<<<< Updated upstream
=======
        
>>>>>>> Stashed changes
    )
}

export default Imagetwo
