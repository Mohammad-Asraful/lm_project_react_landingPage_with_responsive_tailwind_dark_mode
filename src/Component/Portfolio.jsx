import React from 'react'

import porfolio from '../images/PortfolioImg/div.item.png'
import porfolio1 from '../images/PortfolioImg/div.item (1).png'
import porfolio2 from '../images/PortfolioImg/div.item (2).png'
import porfolio3 from '../images/PortfolioImg/div.item (3).png'
import porfolio4 from '../images/PortfolioImg/div.item (4).png'
import porfolio5 from '../images/PortfolioImg/div.item (5).png'

const Portfolio = () => {
   return (
      <>

         <section className='py-[80px] dark:text-white dark:bg-slate-900'>
            <div className="containerall container mx-auto p-4">
               <div className="portfolio">
                  {/* header start */}
                  <div className='flex flex-col justify-between md:items-center
                  md:flex-row'>
                     <div>
                        <p className='text-[#09AFF4] text-base font-semibold leading-6 uppercase'>● Portfolio ●</p>
                        <h3 className='text-5xl font-medium leading-[62px] tracking-[1.5px]'>Awesome Portfolio</h3>
                     </div>
                     <div>
                        <button className='text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white'>See More &rarr;</button>
                     </div>
                  </div>
                  {/* header end */}

                  {/* images start */}
                  <div>
                     {/* Options */}
                     <div className='mb-4 mt-12'>
                        <ul className='flex justify-start items-center gap-6'>
                           <li><a className='active:text-[#09AFF4]' href="@">All</a></li>
                           <li><a className='active:text-[#09AFF4]' href="@">Mobile</a></li>
                           <li><a className='active:text-[#09AFF4]' href="@">Web Apps</a></li>
                           <li><a className='active:text-[#09AFF4]' href="@">Data Analysis</a></li>
                           <li><a className='active:text-[#09AFF4]' href="@">Hosting</a></li>
                        </ul>
                     </div>
                     {/* Options */}


                     {/* images start */}
                     <div className='grid grid-cols-1 gap-2
                     sm:grid-cols-2
                     md:grid-cols-3

                     '>
                        <img src={porfolio} alt="" />
                        <img src={porfolio1} alt="" />
                        <img src={porfolio2} alt="" />
                        <img src={porfolio3} alt="" />
                        <img src={porfolio4} alt="" />
                        <img src={porfolio5} alt="" />
                     </div>
                     {/* images end */}
                  </div>
                  {/* images end */}
               </div>
            </div>
         </section>

      </>
   )
}

export default Portfolio