"use client"
import Link from 'next/link'
import React from 'react'
import teamData from "@/Data/teamsData.json"
import Image from 'next/image';
import { useState } from 'react';
import Services from './Services';


function Team() {
    const [showAll, setShowAll] = useState(false);

    const data = showAll ? teamData.teamsData : teamData.teamsData.slice(0,6);
  return (
    <>
    <Services link='#Team' title='Team' msg='Meet the skilled and experienced team behind our successful digital marketing strategies'/>
    <div id='Team' className='flex flex-wrap'>
            {data.map((teamCard) => (
                <div key={teamCard.id} className='grid grid-rows-3 sm:h-[331px] w-[387px] bg-white sm:mt-12 m-3 sm:ml-10 rounded-[45px] shadow-black shadow-md border-black border-2'>
                  <div className=' flex sm:py-[35px] py-[10px] px-[40px]'>
                  <Image
                    src={teamCard.img}
                    alt='Pic'
                    height={50}
                    width={50}
                    className='h-[80px] w-[80px]'
                    />
                    <p className='ml-4 text-xl font-bold'>{teamCard.name}</p>
                    <Link href={"https://www.linkedin.com/in/hamza-nasir-bb02142b5/"} target='_blank' className='sm:ml-[60px] ml-[10px]'>
                    <Image
                    src={"/Social icon.png"}
                    alt='Linkedin'
                    height={34}
                    width={34}
                    />
                    </Link>
                  </div>
                  <div className='px-[40px]'>
                    <p className=' text-2xl sm:mt-10'>{teamCard.designatin}</p>
                    <hr/>
                  </div>
                  <div className='mx-10'>
                    <p>{teamCard.experience}</p>
                  </div>
                </div>
            ))}
    </div>
    <br/>
    <br/>
    <br/>
    <div className='m-10 sm:text-right text-center'>
      <button 
      onClick={() => setShowAll(!showAll)}
      className='w-[269px] h-[68px] bg-[#191A23] text-white px-[35px] py-[20px] rounded-[14px]'>{showAll ? 'Cancel' : 'See all team'}</button>
    </div>
    </>
  )
}

export default Team