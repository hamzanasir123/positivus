import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
    <div className=' grid sm:grid-cols-2  sm:h-[515px] w-full '>
        <div className='sm:h-[481px] sm:w-[531px] sm:m-10 '>
            <div>
                <h1
                className='text-left font-semibold sm:text-5xl text-3xl p-8'
                >Navigating the digital landscape for success.</h1>
            </div>
            <div className='block md:hidden'>
            <Image
            src={"/Illustration.png"}
            alt='Pic'
            width={593}
            height={515}
            className='p-6'
            />
            </div>
            <div>
                <p
                className='px-8 text-left pb-10'
                >Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            </div>
            <div className='text-center sm:text-left'>
                <Link
                href={""}
                className='w-[264px]  bg-black text-white sm:px-[35px] px-[70px] py-[20px] sm:ml-8  rounded-lg'
                >Book a consultation</Link>
            </div>
        </div>
        <div className='hidden md:block'>
            <Image
            src={"/Illustration.png"}
            alt='Pic'
            width={593}
            height={515}
            className='p-6'
            />
        </div>
    </div>
    </>
  )
}

export default Hero