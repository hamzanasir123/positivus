import Image from 'next/image'
import React from 'react'

function ContactUs() {
  return (
    <>
    <div id='ContactUs' className='grid sm:grid-cols-2 sm:m-20 mx-5 rounded-[45px] sm:h-[773px] bg-[#acabab]'>
        <div className='sm:m-20 mx-10'>
            <div className='flex mb-10'>
            <span><label className='flex items-center space-x-2 mt-5'><input className='h-5 w-5 text-blue-600 rounded-full focus:ring-2 focus:ring-blue-500' type='checkbox' /> Say Hi</label></span>
            <span><label className='flex items-center space-x-2 ml-10 mt-5'><input className='h-5 w-5 text-blue-600 rounded-full focus:ring-2 focus:ring-blue-500' type='checkbox' />Get a Quote</label></span>
            </div>
            <label className='font-semibold text-lg'>Name:</label>
            <br/>
            <input type='text' placeholder=' Write Your Name' className='sm:w-[550px] w-[200px] h-10 rounded-md '/>
            <br/>
            <br/>
            <br/>
            <br/>
            <label className='font-semibold text-lg'>Email:</label>
            <br/>
            <input type='text' placeholder=' Write Your Email' className='sm:w-[550px] w-[200px] h-10 rounded-md '/>
            <br/>
            <br/>
            <br/>
            <br/>
            <label className=' hidden md:block font-semibold text-lg mr-5'>Message:</label>
            <textarea placeholder=' Write Your Message....' className='sm:w-[550px] w-[200px]  rounded-md'
            rows={5}
            ></textarea>
            <button className='sm:w-[356px] w-[210px] mb-5  h-[58px] mt-9 rounded-xl text-white sm:ml-[85px] bg-[#191A23]'>Send Message</button>
        </div>
        <div className='hidden md:block'>
            <div>
                <Image
                src={"/Illustration (8).png"}
                alt='PIc'
                height={648}
                width={691}
                className='mt-28 ml-[269px]'
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs