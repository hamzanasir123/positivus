import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProposalSection() {
  return (
    <>
    <div className='sm:h-[394px] w-full'>
        <div className='grid sm:grid-cols-2 sm:m-10 m-5 bg-slate-100 rounded-2xl'>
            <div className='sm:m-20 m-4'>
                <p className='font-semibold text-2xl '>Lets make things happen</p>
                <br/>
                <p>Lets make things happen
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                Get your free proposal</p>
                <br/>
                <br/>
                <br/>
                <Link
                href={""}
                className='sm:w-[264px] bg-black text-white px-[35px] py-[20px] rounded-lg'
                >Get your free proposal</Link>
            </div>
            <div className='hidden md:block'>
                <Image
                src={"/Illustration (7).png"}
                width={359}
                height={394}
                alt='Pic'
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default ProposalSection