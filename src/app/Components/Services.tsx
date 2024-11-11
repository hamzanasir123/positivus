import Link from 'next/link'
import React from 'react'

interface ServiceProps {
  title: string;
  msg: string;
  link: string;
}

function Services({title,msg,link}: ServiceProps): JSX.Element {
  return (
    <>
    <div id='Services' className=' flex flex-wrap sm:w-full sm:m-10 sm:mt-40 mt-10 text-center sm:text-left'>
        <div>
            <Link
            href={link}
            className='sm:text-2xl text-lg  bg-[#B9FF66] sm:py-5 py-2 pt-1 sm:pt-[3px] px-10 font-semibold rounded-lg sm:ml-10 ml-20'
            >
            {title}
            </Link>
        </div>
        <div>
            <p
            className='sm:w-[500px] sm:ml-10 m-5 sm:m-0'
            >{msg}</p>
        </div>
    </div>
    </>
  )
}

export default Services