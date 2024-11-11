import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutSection() {
  return (
    <>
    <div id='#About' className='w-full mb-20'>
        <div className='grid sm:grid-cols-3 sm:m-20  bg-black rounded-[45px]'>
            <div className=' m-10 text-white'>
               <p className='mb-16'>
               For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
               </p>
               <span className='text-[#B9FF66]'>Learn more</span>
               <Link
               href={""}
               >
               <Image
               src={"/Icon (3).png"}
               width={27}
               height={20}
               alt='Arrow'
               className='inline ml-2'
               />
               </Link>
            </div>
            <div className=' m-10 text-white'>
            <p className='mb-16'>
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
               </p>
               <span className='text-[#B9FF66]'>Learn more</span>
               <Link
               href={""}
               >
               <Image
               src={"/Icon (3).png"}
               width={27}
               height={20}
               alt='Arrow'
               className='inline ml-2'
               />
               </Link>
            </div>
            <div className=' m-10 text-white'>
            <p className='mb-16'>
            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
               </p>
               <span className='text-[#B9FF66]'>Learn more</span>
               <Link
               href={""}
               >
               <Image
               src={"/Icon (3).png"}
               width={27}
               height={20}
               alt='Arrow'
               className='inline ml-2'
               />
               </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutSection