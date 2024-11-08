import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardSection() {
  return (
    <>
    <div className='flex flex-wrap w-full'>
        <div className=' grid sm:grid-cols-2 w-[580px] h-[310px] m-10 sm:ml-16 rounded-3xl bg-[#F3F3F3] shadow-2xl shadow-black'>
            <div className='sm:m-8 mx-8 mt-3'>
                <p className='bg-[#B9FF66] sm:text-3xl text-xl p-1 rounded-md font-semibold'>Search engine optimization</p>
                <Link href={""}>
                <Image
                src={"/Icon (1).png"}
                alt='Button'
                height={41}
                width={41}
                className='sm:mt-32 mt-4 sm:ml-5 h-[20px] w-[20px] sm:h-[41px] sm:w-[41px]'
                />
                <span className='font-semibold  text-sm  sm:text-base'>Learn More</span>
                </Link>
            </div>
            <div className='sm:m-8 sm:mt-16 '>
            <Image
                src={"/Illustration (1).png"}
                alt='Button'
                height={170}
                width={210}
                className='h-[129px] w-[165px] sm:h-[170] sm:w-[210] ml-8 sm:ml-0 '
                />
            </div>
        </div>
        <div className='grid sm:grid-cols-2 w-[580px] h-[310px] m-10  rounded-3xl bg-[#B9FF66] shadow-2xl shadow-black'>
        <div className='sm:m-8 mx-8 mt-3'>
                <p className='bg-white sm:text-3xl text-xl p-1 rounded-md font-semibold'>Pay-per-click advertising</p>
                <Link href={""}>
                <Image
                src={"/Icon (1).png"}
                alt='Button'
                height={41}
                width={41}
                className='sm:mt-32 mt-4 sm:ml-5 h-[20px] w-[20px] sm:h-[41px] sm:w-[41px]'
                />
                <span className='font-semibold text-sm  sm:text-base'>Learn More</span>
                </Link>
            </div>
            <div className='sm:m-8 sm:mt-16'>
            <Image
                src={"/Illustration (2).png"}
                alt='Button'
                height={147}
                width={210}
                className='h-[129px] w-[165px] sm:h-[170] sm:w-[210] ml-8 sm:ml-0'
                />
            </div>
        </div>
    </div>
    <div className='flex flex-wrap w-full'>
    <div className=' grid sm:grid-cols-2 w-[580px] h-[310px] m-10 sm:ml-16 rounded-3xl bg-black shadow-2xl shadow-black'>
            <div className='sm:m-8 mx-8 mt-3'>
                <p className='bg-white sm:text-3xl text-xl p-1 rounded-md font-semibold'>Social Media Marketing</p>
                <Link href={""}>
                <Image
                src={"/Icon (2).png"}
                alt='Button'
                height={41}
                width={41}
                className='sm:mt-32 mt-4 sm:ml-5 h-[20px] w-[20px] sm:h-[41px] sm:w-[41px]'
                />
                <span className='font-semibold text-white text-sm  sm:text-base'>Learn More</span>
                </Link>
            </div>
            <div className='sm:m-8 sm:mt-16'>
            <Image
                src={"/Illustration (3).png"}
                alt='Button'
                height={170}
                width={210}
                className='h-[129px] w-[165px] sm:h-[170] sm:w-[210] ml-8 sm:ml-0'
                />
            </div>
        </div>
        <div className='grid sm:grid-cols-2 w-[580px] h-[310px] m-10 rounded-3xl bg-[#F3F3F3] shadow-2xl shadow-black'>
        <div className='sm:m-8 mx-8 mt-3'>
                <p className='bg-[#B9FF66] sm:text-3xl text-xl p-1 rounded-md font-semibold'>Email <br/> Marketing</p>
                <Link href={""}>
                <Image
                src={"/Icon (1).png"}
                alt='Button'
                height={41}
                width={41}
                className='sm:mt-32 mt-4 sm:ml-5 h-[20px] w-[20px] sm:h-[41px] sm:w-[41px]'
                />
                <span className='font-semibold text-sm  sm:text-base'>Learn More</span>
                </Link>
            </div>
            <div className='sm:m-8 sm:mt-20'>
            <Image
                src={"/Illustration (4).png"}
                alt='Button'
                height={147}
                width={210}
                className='h-[129px] w-[165px] sm:h-[170] sm:w-[210] ml-8 sm:ml-0'
                />
            </div>
        </div>
    </div>
    <div className='flex flex-wrap w-full '>
    <div className=' grid sm:grid-cols-2 w-[580px] h-[310px] m-10 sm:ml-16 rounded-3xl bg-[#B9FF66] shadow-2xl shadow-black'>
            <div className='sm:m-8 mx-8 mt-3'>
                <p className='bg-white sm:text-3xl text-xl p-1 rounded-md font-semibold'>Content Creation</p>
                <Link href={""}>
                <Image
                src={"/Icon (1).png"}
                alt='Button'
                height={41}
                width={41}
                className='sm:mt-32 mt-4 sm:ml-5 h-[20px] w-[20px] sm:h-[41px] sm:w-[41px]'
                />
                <span className='font-semibold'>Learn More</span>
                </Link>
            </div>
            <div className='sm:m-8 sm:mt-16'>
            <Image
                src={"/Illustration (5).png"}
                alt='Button'
                height={170}
                width={210}
                className='h-[129px] w-[165px] sm:h-[170] sm:w-[210] ml-8 sm:ml-0'
                />
            </div>
        </div>
        <div className='grid sm:grid-cols-2 w-[580px] h-[310px] m-10 rounded-3xl bg-black shadow-2xl shadow-black'>
        <div className='sm:m-8 mx-8 mt-3'>
                <p className='bg-[#B9FF66] sm:text-3xl text-xl p-1 rounded-md font-semibold'>Pay-per-click advertising</p>
                <Link href={""}>
                <Image
                src={"/Icon (2).png"}
                alt='Button'
                height={41}
                width={41}
                className='sm:mt-32 mt-4 sm:ml-5 h-[20px] w-[20px] sm:h-[41px] sm:w-[41px]'
                />
                <span className='font-semibold text-white'>Learn More</span>
                </Link>
            </div>
            <div className='sm:m-8 sm:mt-16'>
            <Image
                src={"/Illustration (6).png"}
                alt='Button'
                height={147}
                width={210}
                className='h-[129px] w-[165px] sm:h-[170] sm:w-[210] ml-8 sm:ml-0'
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default CardSection