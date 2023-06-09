import React from 'react'

import img1980 from '../images/WWClientImg/1980..png'
import vectorUnderline from '../images/WWClientImg/Vector.png'
import rightImg from '../images/WWClientImg/photo-1.png.png'
import firstOnField from '../images/WWClientImg/firstOnField.png'
import EasytoReach from '../images/WWClientImg/EasytoReach.png'
import WWServices from '../images/WWClientImg/WWServices.png'
import support from '../images/WWClientImg/Support.png'
import signature from '../images/WWClientImg/div.signature.png'

const WWClient = () => {
   return (
      <>

         <section className='pb-24 dark:bg-slate-900 dark:text-white'>
            <div className="containerall container mx-auto p-5">
               <div className="ww_div flex flex-col items-center justify-between gap-6
               md:flex-row">
                  {/* text side start */}
                  <div>
                     <div>
                        <p className='mb-5 text-[#09AFF4] text-base font-semibold leading-6 uppercase'>● About Us ●</p>
                     </div>

                     <div className='mb-12'>
                        <h1 className='text-3xl capitalize mb-6
                        lg:text-[56px]
                        md:text-4xl
                        '>Trusted by Worldwide
                           <div className='flex items-center gap-5'>
                              Clients since
                              <div className='md:mt-5'>
                                 <img className='mb-2' src={img1980} alt="" />
                                 <img src={vectorUnderline} alt="" />
                              </div>
                           </div>
                        </h1>
                        <p className='text-lg leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aliquam est! rerum inventore animi at iusto totam sunt accusamus quia</p>
                     </div>

                     {/* ww cards start */}
                     <div className='grid grid-cols-1 justify-between gap-6
                     sm:grid-cols-2'>
                        {/* card */}
                        <div className='flex gap-5 items-start'>
                           <img src={firstOnField} alt="" />
                           <div>
                              <h3 className='text-2xl font-bold mb-3'>First On Field</h3>
                              <p className='text-[#060922] dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                           </div>
                        </div>
                        {/* card */}
                        <div className='flex gap-5 items-start'>
                           <img src={EasytoReach} alt="" />
                           <div>
                              <h3 className='text-2xl font-bold mb-3'>Easy To Reach</h3>
                              <p className='text-[#060922] dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                           </div>
                        </div>
                        {/* card */}
                        <div className='flex gap-5 items-start'>
                           <img src={WWServices} alt="" />
                           <div>
                              <h3 className='text-2xl font-bold mb-3'>Worldwide Services</h3>
                              <p className='text-[#060922] dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                           </div>
                        </div>
                        {/* card */}
                        <div className='flex gap-5 items-start'>
                           <img src={support} alt="" />
                           <div>
                              <h3 className='text-2xl font-bold mb-3'>24/7 Support</h3>
                              <p className='text-[#060922] dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                           </div>
                        </div>

                        {/* signature start */}
                        <div>
                           <button className='text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white'>Get in Touch</button>
                        </div>

                        <div className='flex justify-end'>
                           <img src={signature} alt="" />
                        </div>
                        {/* signature end */}

                     </div>
                     {/* ww cards end */}
                  </div>
                  {/* text side end */}

                  {/* image start */}
                  <div>
                     <img className='w-full' src={rightImg} alt="" />
                  </div>
                  {/* image end */}
               </div>
            </div>
         </section>

      </>
   )
}

export default WWClient