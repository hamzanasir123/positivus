"use client"
import Image from 'next/image'
import React from 'react'
import cardsData from "@/Data/data.json"
import { useState } from 'react'

interface CardProps  {
    id: number;
  title: string;
  description: string;
}

function Card() {
  const data = cardsData.data.filter(
    (data:CardProps) => data.id
)

const [toggledItems, setToggledItems] = useState<{ [key: number]: boolean }>({});

function toggleItem(id: number) {
  setToggledItems((prevState) => ({
    ...prevState,
    [id]: !prevState[id], 
  }));
}


  return (
    <>
        <div id='Cards'>
        {data.map((dataa:CardProps) => (
            <div key={dataa.id} className={`sm:m-20 m-5 rounded-[45px] shadow-black sm:shadow-2xl shadow-lg
            ${toggledItems[dataa.id] ? 'h-[279px] bg-[#B9FF66]' : 'sm:h-[159px] bg-[#F3F3F3]'}`}>
            <div className='sm:m-[50px] m-2 inline-flex '>
            <span className='sm:text-3xl text-xl p-5 sm:p-0 font-black'>{toggledItems[dataa.id] ? `0${dataa.id}.` : `0${dataa.id}.`}</span>
            <span className='sm:text-3xl text-md p-2 sm:p-0 font-semibold inline-flex'>{dataa.title}</span>
            </div>
            <button onClick={() => toggleItem(dataa.id)}>
          <Image
          src={toggledItems[dataa.id] ?  "/Property 1=Minus.png" : "/Property 1=Plus.png"}
          alt='Toggle'
          height={58}
          width={58}
          className={toggledItems[dataa.id] ? 'sm:ml-[450px] mb-3 sm:mb-0 ml-[230px] h-[30px] sm:h-[58px] w-[30px] sm:w-[58px] ' : 'sm:ml-[460px] mb-3 sm:mb-0 ml-[230px] h-[30px] sm:h-[58px] w-[30px] sm:w-[58px] '}
          />
          </button>
          <div>
            {toggledItems[dataa.id] && (
            <div>
              <hr />
              <p className="sm:m-10 m-2 font-medium text-xs sm:text-base">{dataa.description}</p>
            </div>
          )}
          </div>
          </div>
          
        ))}
    </div>
    </>
  )
}

export default Card