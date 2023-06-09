import React from 'react'

import clientCard from '../images/ClientCard/div.client-logo.png'
import clientCard1 from '../images/ClientCard/div.client-logo (1).png'
import clientCard2 from '../images/ClientCard/div.client-logo (2).png'
import clientCard3 from '../images/ClientCard/div.client-logo (3).png'
import clientCard4 from '../images/ClientCard/div.client-logo (4).png'
import clientCard5 from '../images/ClientCard/div.client-logo (5).png'

const ClientCard = () => {
   return (
      <>

         <section className='bg-[#09AFF4] py-20 dark:bg-slate-900'>
            <div className="containerall container mx-auto px-5">
               <div className="client_card">
                  <p className='text-md text-white dark:text-white leading-9 tracking-[1.5px] capitalize text-center
                  sm:text-3xl 
                  '>trusted by over 500 clients around the world.</p>

                  {/* client cards start */}
                  <div className='pt-[58px] 
                  grid grid-cols-[repeat(2,_auto)] justify-center items-center gap-3 
                  xl:flex 
                  sm:grid sm:grid-cols-[repeat(3,_auto)]
                  '>
                     <img src={clientCard} alt="Client companies Card" />
                     <img src={clientCard1} alt="Client companies Card" />
                     <img src={clientCard2} alt="Client companies Card" />
                     <img src={clientCard3} alt="Client companies Card" />
                     <img src={clientCard4} alt="Client companies Card" />
                     <img src={clientCard5} alt="Client companies Card" />
                  </div>
                  {/* client cards end */}
               </div>
            </div>
         </section>

      </>
   )
}

export default ClientCard