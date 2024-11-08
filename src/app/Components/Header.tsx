"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  
      const [isClick, setIsClick] = useState(false);

      const toggleNavbar = () => {
        setIsClick(!isClick)
      }
  return (
    <>
    <nav className='bg-transparent'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex">
          <Image
        src={"/Icon.png"}
        height={36}
        width={36}
        alt="Icoon"
        className="h-9 w-9 sm:ml-2"
        />
        <h1
        className="font-black text-3xl"
        >Positivus</h1>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-2 flex items-center space-x-4">
            <Link href={"/"} className=' hover:bg-black hover:text-white rounded-lg p-2 font-semibold'>
            Home
            </Link>
            <Link href={"#Services"} className=' hover:bg-black hover:text-white rounded-lg p-2 font-semibold'>
            Services
            </Link>
            <Link href={"#Cards"} className=' hover:bg-black hover:text-white rounded-lg p-2 font-semibold'>
            Working Process
            </Link>
            <Link href={"#Team"} className=' hover:bg-black hover:text-white rounded-lg p-2 font-semibold'>
            Team
            </Link>
            <Link href={"#Feedback"} className=' hover:bg-black hover:text-white rounded-lg p-2 font-semibold'>
            Feedback
            </Link>
            <Link
          href={"#ContactUs"}
          className=" px-5 pt-2 hover:bg-[#B9FF66] font-semibold text-md sm:ml-7 border border-black h-12 rounded-lg"
          >Contact Us</Link>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          onClick={toggleNavbar}> 
          {isClick ? (
            <svg  className="h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"/>
</svg>
          ) : (
            <svg  className="h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
          )}
          </button>
        </div>
      </div>
    </div>
    {isClick && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link href={"/"} className=' hover:bg-[#B9FF66]  block hover:text-black rounded-lg p-2 font-semibold'>
            Home
            </Link>
            <Link href={"#Services"} className=' hover:bg-[#B9FF66] block hover:text-black rounded-lg p-2 font-semibold'>
            Services
            </Link>
            <Link href={"#Cards"} className=' hover:bg-[#B9FF66] block hover:text-black rounded-lg p-2 font-semibold'>
            Working Process
            </Link>
            <Link href={"#Team"} className=' hover:bg-[#B9FF66] block hover:text-black rounded-lg p-2 font-semibold'>
            Team
            </Link>
            <Link href={"#Feedback"} className=' hover:bg-[#B9FF66] block hover:text-black rounded-lg p-2 font-semibold'>
            Feedback
            </Link>
        </div>
      </div>
    )}
    </nav>
    </>
  )
}

export default Header