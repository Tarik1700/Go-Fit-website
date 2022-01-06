import React from 'react'
import Parallaximage from './Parallaximage'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import image17 from './img/gymlong2.jpg'
const Contact = () => {
    return (
        <ParallaxProvider>
        <div>
            
            <Parallaximage imgsrc={image17} height="100%" width="100%" amount="0.9" tagOuter="figure1"  opacity=".5"> 

            <div id="contact" className="relative z-20  font-serif flex items-top justify-start min-h-screen  w-[100%] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60  sm:items-center sm:pt-0">
        <div className="justify-start w-full h-full mx-auto sm:px-6 lg:px-8 ">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="  mr-2 pl-2 md:pl-0  sm:rounded-lg h-[70vh]">

               
                <iframe className="rounded-lg shadow-xl border-4  border-yellow-700 hidden z-0 absolute md:inline " width="96%" height="70%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=GOFIT+(GO-FIT)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <iframe className="rounded-lg shadow-xl border-4 z-30 border-yellow-700  inline md:hidden " width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=GOFIT+(GO-FIT)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                
                </div >
                    <div className=" pl-2 z-20 font-serif md:w-[45rem] pt-8 pb-5  md:h-[50vh] md:ml-32 md:pt-32  ">
                    <div class="p-6 mr-2 z-20 bg-gray-900 sm:rounded-lg h-[50vh] bg-clip-padding rounded-lg backdrop-filter backdrop-blur-md bg-opacity-60">
                        <h1 class="text-3xl md:text-4xl text-gray-50 text-center tracking-tight">
                            Get in touch
                        </h1>
                        <p class=" text-xl font-medium text-gray-100 text-center pt-3 mt-2 lg:text-2xl">
                            Call us at any of our working hours, or write to us on our social media!
                        </p>

                        <div class="flex   mx-auto items-center mt-8 text-gray-100 ">
                            <svg className="text-gray-50 h-8 md:h-16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div class="ml-4 text-3xl md:text-4xl tracking-wide font-serif w-96">
                                
                            Hasana Brkića 30, Sarajevo 71000
                            </div>
                        </div>

                        <div class="flex items-center mt-4 pt-3 text-gray-100 ">
                            <svg className="text-gray-100 h-8 md:h-16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-3xl md:text-4xltracking-wide font-serif w-96">
                                +387-61-111-222
                            </div>
                        </div>

                        <div class="flex items-center mt-2 pt-3 text-gray-100 ">
                            <svg className="text-gray-100 h-8 md:h-16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-3xl md:text-4xl tracking-wide font-semibold w-96">
                                info@gofit.com
                            </div>
                        </div>
                    </div>
                    </div>

                    <form className="p-6  hidden flex flex-col justify-end text-2xl font-serif">
                        <div className="flex flex-col">
                            <label for="name" className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-100 font-semibold focus:border-[#796046] focus:outline-none"></input>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-100 font-semibold focus:border-[#796046] focus:outline-none"></input>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="tel" className="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-100 font-semibold focus:border-[#796046] focus:outline-none"></input>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="message" className="hidden">Message</label>
                          <textarea id="message" name="message" rows="4" placeholder="Message" class="w-100 h-48 mt-2 py-3 px-3 text-xl rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-100 font-semibold focus:border-[#796046] focus:outline-none"></textarea>
                 
                        </div>
                        <button type="submit" className="md:w-38 bg-[#796046] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#867059] transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </Parallaximage>


        </div>
        </ParallaxProvider>
    )
}

export default Contact
