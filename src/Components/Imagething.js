<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useEffect, useState } from "react";
>>>>>>> Stashed changes
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image8 from './img/gym9.jpg'

<<<<<<< Updated upstream
gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo("#test2", {opacity:1, scale: 1  
              }, { opacity: 0, scale: 8, display:"none", scrollTrigger: {onUpdate: self => console.log("progress:", self.progress),
                scrub: true, start: "500 500" ,end:"400 1" }} )
                

const Imagething = () => {
    
    
        
    return (
        <div>  
                  <div  id="hero" className="hero h-48 ">
                  <svg id="test2" className="test3 transition-all duration-700 block h-48 mx-auto " xmlns="http://www.w3.org/2000/svg"  width="200" height="200" viewBox="0 0 1280 1280">
=======

    

const Imagething = () => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
    gsap.fromTo("#test2", { transform: 'scale3d(1, 1, 1)' 
}, { opacity: 0,  transform: 'scale3d(4, 4, 1)' , display:"none", scrollTrigger: {onUpdate: self => console.log("progress:", self.progress),
  scrub: true, start: "500 500" ,end:"400 1" }} )
});

        
    return (
        <div>  
                  <div  id="hero" className="hero ">
                  <svg id="test2" className="test3  block  mx-auto " xmlns="http://www.w3.org/2000/svg"  width="400px" height="400px" viewBox="0 0 1280 1280">
>>>>>>> Stashed changes
                      <defs>
                      </defs>
                             <path id="Color_Fill_1" data-name="Color Fill 1" class="cls-1" d="M1098,781v28h-58c-3.63,6.059-3,16.785-3,27v54c-4.25,6.367-2.76,25.656-6,34-8.1,20.88-19.22,36.865-38,47-10.4,5.612-22.2,8.087-35,11H918c-8.321,1.867-21.009,1-31,1H457v-1c3.909-5.2,2.133-20.418,2-29H924c24.721,0,44.11.054,58-10,31.37-22.709,23.25-76.361,23-129-3.4-2.124-4.68-3.06-11-3-3.22-2.133-12-1-17-1-14.092,0-29.4-.6-42-1V781a43.671,43.671,0,0,0,13-2h54c2.12-3.4,3.06-4.679,3-11-3.94-4.657-1.51-18.525-4-25-6.1-15.887-11.355-33.249-18-48-1.6-3.541-.361-5.486-2-9-26.92-57.7-66.556-105.587-116-141-8.639-6.188-17.576-14.758-27-20a581.358,581.358,0,0,0-57-28c-17.347-7.276-37.293-9.53-55-16h-9c-3.813-1.161-14.08-2.929-18-4H682c-30.872-7.633-94.3,1.18-117,10-4.982,1.936-8.046.008-13,2-13.448,5.409-29.613,9.733-43,16-37.915,17.749-87.3,49.363-111,81-6.985,9.323-18.061,16.436-25,26-8.515,11.737-14.934,23.654-23,36a376.7,376.7,0,0,0-25,46c-1.632,3.523-.4,5.456-2,9-3.429,7.61-8.392,16.607-10,26-13.638,2.012-21.9,13.865-32,20v-5c3.382-3.993,2.071-10.308,4-16,2.773-8.182,6.753-18.229,10-26v-5c0.5-1.187,3.461-4.816,4-6v-4c12.284-27.013,26.123-53.322,42-77,5.506-8.211,20.832-20.358,22-31-7.811-6-12.736-16.389-18-25l-4-3c-2.543-3.575-3.46-7.423-6-11l-4-3c-9.181-15.01-18.779-27.877-28-43-1.232-2.021-4.607-3.923-6-6a267.012,267.012,0,0,1-20-36c-1.723-3.771-.32-5.966-2-10-0.474-1.138-3.527-4.862-4-6v-5l-2-1v-6l-2-1v-7l-2-1c-2.313-6.369-.1-13.221-2-20-10.945-38.994,2.638-89.758,14-117v-5c1.039-2.487,4.969-7.776,6-10,2.129-4.594,1.694-7.786,4-12,24.013-43.876,62.5-78.563,109-100,21.155-9.753,47.954-12.278,72-19H761c41.281,0,80-.56,109,11,4.514,1.8,7.535.107,12,2,67.1,28.45,108.429,68.107,137,135v5c0.13,0.326,3.87,6.676,4,7v5c0.67,0.333,1.33.667,2,1v6c6.68,20.622,13.12,59.629,6,86v12c-3.86,12.671-7.24,26.968-12,38-1.62,3.765-.31,6.271-2,10-14.13,31.224-34.875,54.976-52,83l-4,3c-6.019,8.465-10.22,17.361-16,26-1.227,1.835-5.179,4.176-6,6v7c13.341,10.337,24.923,30.057,34,45,1.761,2.9,6.261,6.091,8,9,4.92,8.23,7.258,16.338,12,25,5.611,10.249,13.2,21.9,18,33v5c3.81,9.026,8.26,20.416,12,30v6c5.37,13.778,9.85,29.395,10,48,1.48,1.106,2.55,4.313,4,5h61ZM476,239c-5.053,3.842-15.678,1.483-22,4a176.45,176.45,0,0,0-40,22c-22.161,16.519-54.5,67.955-45,109v12c0.648,2.1,3.275,7.907,4,10v5c8.546,20.613,22.326,37.51,34,55,7.656,11.47,14.759,22.087,22,34l4,3c3.748,6.274,5.083,16.039,14,17,11.233-11.287,31-17.185,46-25,14.158-7.376,31.332-13.576,47-20h5c9.939-3.483,23.673-6.194,34-10h10c9.134-2.8,24.211-3.278,34-6h28c25.151-.006,49.03.08,68,6h10c5.412,2,14.482,4.159,20,6h6c20.119,7.925,41.562,12.939,61,22,9.964,4.644,27.7,19.232,39,20,20.273-33.362,47.619-62.351,64-99,1.809-4.047.51-6.567,2-11l2-2v-9c10.928-40.293-10.452-76.109-26-97-16.4-22.029-36.631-33.7-65-44H821c-6.92-1.873-18.178-2-28-2H476ZM899,675c0.243,10.274.021,18.975,0,30H829c-11.356,0-25.531-1.6-34,2-17.486,7.428-29.4,21.514-36,40v31c11.158,6.7,51.353,3.116,69,3,0.975,8.992.634,18.661,1,28H762c-3.934,6.576-3,19.128-3,30v66c-1.525,2.357-.234,5.836,0,10H729V795c0-16.525-2.79-43.157,2-56,8.068-21.631,19.9-41.578,39-52C799.748,670.769,853.176,674.841,899,675Zm-28,70h28c-0.072,56.142-2.591,115.586,1,170H871V745Zm-519,1c53.64-.575,75,27.706,89,67v12c0.4,7.287,2.978,19.329,1,28-0.426,1.865-1.689,6.586-1,10,2.027,10.05,2.185,50.262-2,61-19.773,50.738-48.709,61.356-119,61-1.691,2.72-2.577,2.491-3,7,3.4,2.834,3.726,6.881,6,11,4.135,7.49,9.339,15.3,14,23l4,3c5.859,9.65,11.456,17.99,18,27q4.5,4.005,9,8c7.114,9.51,18.755,24.1,28,31,22.41,16.72,43.88,36.26,69,50,26.048,14.25,54.637,22.81,84,34h7c13.782,5.15,31.727,5.85,47,10h16c22.6,5.1,63.454,1.97,83-4,6.847-2.09,14.49.41,21-2,4.809-1.78,12.968-4.34,18-6h6c24.4-9.56,49.77-17.84,72-30,6.811-3.73,13.357-10.3,20-14,28.284-15.75,59.153-40.82,78-66,3.215-4.29,8.778-7.66,12-12,5.857-7.89,10.242-15.9,16-24,2.1-2.95,6.183-5.72,8-9,4.035-7.28,4.28-16.34,15-17,3.092-2.68,6.261-.23,11-2,6.509-2.43,13.728-6.274,20-9v3c-5.391,4.5-6.7,13.3-10,20-2.145,4.35-7.573,8.92-10,13v3c-1.285,2.28-4.713,4.72-6,7v3c-2.215,3.7-7.951,7.22-10,11v4c-2,1.67-4,3.33-6,5-4.267,5.74-7.753,11.33-12,17q-4,3.495-8,7c-15.938,21.27-37.906,39.91-61,54-3.8,2.32-7.353,7.4-11,10-13.768,9.83-28.573,15.61-44,24-1.112.61-2.875,3.45-4,4-29.55,14.4-62.283,21.73-96,32-8.007,2.44-13.625-.24-22,2-44.082,11.8-124.617,3.73-160-10h-6c-3.795-1.49-10.1-4.63-14-6h-5c-11.186-4.63-24.223-10.99-35-16h-4c-54.679-25.48-106.18-66.33-140-113-2-1.67-4-3.33-6-5-5.413-7.47-9.127-14.94-14-23l-4-3c-7.825-13.15-12.9-25.91-20-40-2.011-3.989-6.129-8.955-8-13-4.4-9.522-5.341-20.226-10-29h96c3.421-3.715,11.4-3.473,16-6,7.963-4.377,22.988-19.952,24-31-9.911-5.969-41.309-3.122-57-3-5.2-3.987-20.213-3.078-27-6-9.317-4.011-31.114-20.054-36-28-8.8-14.313-23.285-46.973-14-72,3.666-9.881,8.911-19.013,14-27l1-4c1.735-2.533,14.6-15.551,17-17a150.664,150.664,0,0,1,32-14C343.3,745.7,348.91,747.987,352,746Zm189,0c14.517-.2,31.5.5,42,5,24.086,10.319,58.965,47.73,50,87v12c-1.648,5.37-3.295,13.6-6,19-9.84,19.639-27.789,35.754-49,44h-6c-2.715.786-9.44,3.238-12,4-12.492,3.721-33.049-2.926-40-6-29.049-12.847-41.788-24.507-53-55v-8c-1.658-6.074-4.73-23.025-2-32,0.633-2.082,3.319-7.924,4-10v-6c7.51-18.56,22.858-36.043,40-45,6.448-3.369,17.15-5.871,24-8C536,746.068,539.015,747.3,541,746ZM346,775c-3.468,3.773-11.433,3.312-16,6-7.1,4.181-17.011,13.678-21,21-21.387,39.257,6.124,73.453,38,83h63c6.459-10.745,3.118-48,3-65-3.434-3.135-5.233-15.377-8-20l-4-3C388.829,780.44,375.606,774.806,346,775Zm193,0c-4.013,3.507-11.13,3.339-16,6-11.692,6.39-23.929,21.225-28,35-8.073,27.316,10.517,56.038,27,65,4.591,2.5,7.632,1.89,13,4,4.309,1.694,20.77,4.678,28,2,16.332-6.051,30.39-17.295,38-32,3.66-7.073,6.1-18.9,4-28v-9c-7.082-22.322-22.4-36.134-45-43H539Z"/>
                        </svg>
                  </div>
                  
        </div>

    )
}

export default Imagething
