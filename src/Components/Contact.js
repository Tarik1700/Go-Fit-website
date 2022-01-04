import React from 'react'
import Parallaximage from './Parallaximage'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import image17 from './img/gymlong2.jpg'
const Contact = () => {
    return (
        <ParallaxProvider>
        <div>
            
            <Parallaximage imgsrc={image17} height="100%" width="100%" amount="0.9" tagOuter="figure1"  opacity=".5"> 

            <div className="relative z-20  font-serif flex items-top justify-start min-h-screen  w-[100%] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60  sm:items-center sm:pt-0">
        <div className="justify-start w-full mx-auto sm:px-6 lg:px-8 ">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="  mr-2 pl-2 md:pl-0  sm:rounded-lg h-[50vh]">

               
                <iframe className="rounded-lg shadow-xl border-4  border-yellow-700 hidden md:inline " width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=GOFIT+(GO-FIT)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <iframe className="rounded-lg shadow-xl border-4 z-30 border-yellow-700  inline md:hidden " width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=GOFIT+(GO-FIT)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                
                </div>
                    

                    <form className="p-6  flex flex-col justify-end text-2xl font-serif">
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
