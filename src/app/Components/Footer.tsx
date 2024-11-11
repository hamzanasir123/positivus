import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <>
    <div className='sm:h-[514px] bg-[#191A23] mt-16 sm:mt-0 sm:rounded-t-[45px] sm:mx-20'>
        <div className=''>
        <div className="flex flex-wrap sm:h-[68px] sm:w-full bg-transparent">
      <div className="flex flex-wrap sm:flex-nowrap sm:h-[56px] p-5">
        <Image
        src={"/Icon (4).png"}
        height={36}
        width={36}
        alt="Icoon"
        className="h-9 w-9 ml-16 "
        />
        <h1
        className="font-black text-3xl text-white"
        >Positivus</h1>
        <div className="sm:flex text-center sm:w-[811px] sm:h-[68px] sm:ml-[100px] ml-[60px]">
          <h1 className="font-medium p-2 text-white text-xl mr-4">Home</h1>
          <h1 className="font-medium p-2 text-xl text-white mr-4">Services</h1>
          <h1 className="font-medium p-2 text-xl text-white mr-4">Working Process</h1>
          <h1 className="font-medium p-2 text-xl text-white mr-4">Team</h1>
          <h1 className="font-medium p-2 text-xl text-white mr-4">Feedback</h1>
        </div>
        <div className='flex gap-4'>
            <Link href={"https://www.linkedin.com/in/hamza-nasir-bb02142b5/"} target='_blank'>
            <Image
            src={"/Social icon (1).png"}
            height={30}
            width={30}
            alt='LinkedIn'
            className='ml-[80px] sm:ml-0'
            />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100013306129157&mibextid=kFxxJD"} target='_blank'>
            <Image
            src={"/Social icon (2).png"}
            height={30}
            width={30}
            alt='Facebook'
            />
            </Link>
            <Link href={"https://www.instagram.com/hamzaking9531/profilecard/?igsh=NDU1ZHo0M3I4NDg="} target='_blank'>
            <Image
            src={"/Social icon (3).png"}
            height={30}
            width={30}
            alt='Twitter'
            />
            </Link>
        </div>
      </div>
    </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='grid sm:grid-cols-3 sm:m-10 sm:h-[185px]'>
            <div className='col-span-1 sm:mx-10 text-center sm:text-left ml-16'>
                <Link href={"#ContactU"} className='bg-[#B9FF66] p-1 px-5  rounded-md'>
                    Contact Us:
                </Link>
                <br/>
                <br/>
                <p className='text-white'><span>Email : </span><Link href={"mailto:hk435981@gmail.com"} target='_blank'>hk435981@gmail.com</Link></p>
                <br/>
                <p className='text-white'><span>Number : </span><Link href={"tel:+923122449908"} target='_blank'>03122449908</Link></p>
                <br/>
                <p className='text-white'><span>Address : Karachi Pakistan</span></p>
            </div>
            <div className='col-span-2 '>
                    <div className='sm:h-[184px] h-[150px] bg-[#292A32] ml-1 rounded-lg'>
                        <div className='flex flex-wrap'>
                        <input type='email' placeholder=' Write Your Email' className='sm:w-[350px] mt-3 w-[250px] ml-16 h-10 rounded-md sm:m-16 '/>
                        <span><button className=' bg-[#B9FF66] px-4 py-2 rounded-md sm:mt-[63px] mt-[30px] ml-28 sm:ml-10'>Subscribe to news</button></span>
                        </div>
                    </div>
            </div>
        </div>
        <br/>
        <hr/>
        <br/>
        <p className='text-white sm:ml-10 ml-5'>© 2024 Hamza Nasir. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer