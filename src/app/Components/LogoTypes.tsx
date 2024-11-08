import Image from 'next/image'
import React from 'react'

function LogoTypes() {
  return (
    <>
    <div className='flex flex-wrap mt-20 sm:mt-0 sm:w-full'>
    <Image
    alt='Amazon'
    src={"/Amazon.png"}
    height={19}
    width={124}
    className='sm:ml-20 ml-6  sm:mb-0  mb-5'
    />
    <Image
    alt='Amazon'
    src={"/Vector.png"}
    height={19}
    width={124}
    className='sm:ml-24 ml-6 sm:mb-0 mb-5'
    />
    <Image
    alt='Amazon'
    src={"/Vector (1).png"}
    height={19}
    width={124}
    className='sm:ml-24 ml-6 sm:mb-0 mb-5'
    />
    <Image
    alt='Amazon'
    src={"/Vector (2).png"}
    height={19}
    width={124}
    className='sm:ml-24 ml-6 sm:mb-0 mb-5'
    />
    <Image
    alt='Amazon'
    src={"/Vector (3).png"}
    height={19}
    width={124}
    className='sm:ml-24 ml-6 sm:mb-0 mb-5'
    />
    <Image
    alt='Amazon'
    src={"/Vector (4).png"}
    height={19}
    width={124}
    className='sm:ml-24 ml-6 sm:mb-0 mb-5'
    />
    </div>
    </>
  )
}

export default LogoTypes