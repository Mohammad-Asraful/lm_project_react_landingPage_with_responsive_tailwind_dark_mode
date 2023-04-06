import React from 'react'
import logoImg from '../images/heroImg/logo.png'
import searchIcon from '../images/heroImg/SearchIcon.png'
import darkMode from '../images/heroImg/DarkMode.png'
import Nav2 from './Nav2'

const Navbar = () => {


   return (
      <>

         <header className='sticky top-0 bg-[#0C264B] bg-opacity-70'>
            <div className="containerall container mx-auto px-4">
               <div className="
               flex justify-between items-center
               lg:flex lg:justify-between lg:items-center
               ">
                  <div>
                     <img src={logoImg} alt="Logo img" />
                  </div>

                  <div>
                     <ul className='hidden justify-between items-center gap-8
                     lg:flex lg:justify-between lg:items-center
                     '>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">Home</a></li>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">Service</a></li>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">About</a></li>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">Portfolio</a></li>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">Pricing</a></li>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">Testimonial</a></li>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">FAQ</a></li>
                        <li><a className='text-base text-white font-medium leading-[90px] capitalize' href="@">Contact Us</a></li>
                     </ul>
                  </div>

                  <div className='flex items-center gap-4'>
                     <img src={searchIcon} alt="Search Icon" />
                     <div className='h-9 w-9 bg-black rounded-full flex justify-center items-center'>
                        <img src={darkMode} alt="Dark mode icon" />
                     </div>
                     <Nav2 />
                  </div>

               </div>
            </div>
         </header>

      </>
   )
}

export default Navbar