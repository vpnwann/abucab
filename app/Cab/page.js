"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import LocationForm from '../component/Location';


export default function page() {
    const [activeContent, setActiveContent] = useState('content1');
    const handleButtonClick = (contentId) => {
        setActiveContent(contentId);
      };
      

      
  return (
    <div>
    <div class="flex flex-wrap">
    <div class="w-full sm:w-8/12 mb-20">
      <div class="container mx-auto h-full  bg-white sm:p-10">
        <nav class="flex px-4  mt-0   text-center justify-between items-center">
          <div class="text-4xl text-center  text-black font-bold">
            ABU CABS<span class="text-green-700">.</span>
          </div>
          <div>
            
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8"/>
            
          </div>
          
        </nav>
        <header class="container px-4 lg:flex mt-3  items-center h-full lg:mt-0">
          <div class="w-full   grid grid-cols-3 gap-x-0 ">
          <button
          className="filter-btn  text-black px-4 py-2 m-1 rounded"
          onClick={() => handleButtonClick('content1')}
          
        > Night Ride
            
         
        </button>
        <button
          className="filter-btn text-black px-4 py-2 m-2 rounded"
          onClick={() => handleButtonClick('content2')}
        >
          Rentals
        </button>
        <button
          className="filter-btn  text-black px-4 py-2 m-2 rounded"
          onClick={() => handleButtonClick('content3')}
        >
          Outstations
        </button>
          </div>
          <br/>

          <div className={`content ${activeContent === 'content1' ? 'block' : 'hidden'} bg-white  rounded shadow-md`}>
          <LocationForm/>
        
      </div>

      <div className={`content ${activeContent === 'content2' ? 'block' : 'hidden'} bg-white p-6 rounded shadow-md`}>
        <h2 className="text-xl font-bold mb-4">Content 2</h2>
        <p>Coming Soon</p>
      </div>

      <div className={`content ${activeContent === 'content3' ? 'block' : 'hidden'} bg-white p-6 rounded shadow-md`}>
        <h2 className="text-xl font-bold mb-4">Content 3</h2>
        <p>Coming Soon</p>
      </div>
          
        </header>
        
        
      </div>
    </div>
    
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Findian-man-driving-luxury-taxi-picture-id921039506%3Fk%3D6%26m%3D921039506%26s%3D170667a%26w%3D0%26h%3DX__QFLuJ7tnJ18KvIX701QuPDHAlbwVm94Jg2hPU_1s%3D&f=1&nofb=1&ipt=77a4818d2dea08f111ebd3e7131a14466be9204b483df4f2277e7ff9f81dd555&ipo=images" alt="Leafs" class="w-full h-48 object-cover lg:h-screen sm:h-screen sm:w-4/12"/>
  </div>

  <section class="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">We are just
                getting started!</h2>
            <p class="mb-4">We are creating a tool that helps you be more productive and efficient when building
                websites and webapps</p>

        </div>
        <div
            class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Realtime Collaboration</h3>
                        <p class="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a
                            project. See what othe editors are doing and edit even a simple text together</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">History of Edits</h3>
                    <p class="mt-6 text-base text-gray-600">Go back and forth your history of changes and
                        restore your designs to any point in time</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Integrations</h3>
                        <p class="mt-6 text-base text-gray-600">Step up your designs and workflow with
                            integrations with your favourite tools such as mailchimp, slack, jira etc</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Publish webpage online</h3>
                    <p class="mt-6 text-base text-gray-600">Effortlessly publish your webpages online and make
                        it available to the world with a click of a button</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Forms and Data Collection
                        </h3>
                        <p class="mt-6 text-base text-gray-600">Collect data and information from users with
                            forms built on windframe and sort through them in a nice interface</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Custom Domains</h3>
                    <p class="mt-6 text-base text-gray-600">Attach your own custom domain to your published
                        projects or website on windframe</p>
                </div>
            </div>
        </div>
    </div>
</section>

  
  </div>
  )
}
