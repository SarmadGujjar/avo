import React from 'react'
import Image from 'next/image'
import bg2 from '@/app/asset/bg2.webp'
import Footer from '../components/Footer'
import { MdNavigateNext } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";




const page = () => {
  return (
    <div className='bg-white'>
      <div>
        <main>
          <Image className='w-full h-[550px]' alt='img' width={1000} height={900} src={bg2} />
        </main>

        <main className='absolute flex flex-col gap-3 text-white top-0 left-0 pt-72 px-10 md:pl-56'>
          <div className='flex gap-5'>
            <span className='flex'>HOME   <span className='text-2xl text-red-600 font-bold flex'>< MdNavigateNext /></span></span>
            <span className='flex'>CONTACT   <span className='text-2xl text-red-600 font-bold flex'>< MdNavigateNext /></span></span>
          </div>
          <div className='font-bold text-3xl md:text-4xl'>CONTACT</div>
        </main>
      </div>

      <main className='flex flex-col p-20 justify-center  gap-5 text-center'>
        <span className='text-red-500'>CONTACT US</span>
        <h2 className='text-4xl font-bold'>
          HAVE A PROJECT?
        </h2>
        <span className='text-gray-500'>
          Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia
        </span>
      </main>

      <main className='flex md:flex-row flex-col md:mx-72 px-2 gap-5'>
        <div className='bg-gray-100 w-full rounded-lg'>
          <main className='flex  flex-col px-7 py-12 gap-5'>
            <div className='flex md:flex-row flex-col gap-5'>
              <input className='px-5 py-3 outline-none' placeholder='Your Name' />
              <input className='px-5 py-3 outline-none' placeholder='Your Email' />
            </div>
            <input className='px-5 py-3 outline-none' placeholder='Subject' />
            <input className='px-5 py-3 pb-36 outline-none text-start' placeholder='Message' />
            <a href='/contact' className='flex items-start'>
              <button className='text-white px-5 py-3 bg-pink-700 flex'>Send Message</button>
            </a>
          </main>
        </div>
        <div className='flex flex-col md:p-0 px-5 py-5 gap-16'>
          <main className='flex gap-2 items-start'>
            <span className='text-xl bg-pink-700 rounded-full p-2 text-white'><IoLocationSharp /></span>
            <div className='flex gap-1 flex-col'>
              <span>Address:</span>
              <span className='text-gray-500'>198 West 21th Street Suite 721 New York NY 10016</span>
            </div>
          </main>

          <main className='flex gap-2 items-start'>
            <span className='text-xl bg-pink-700 rounded-full p-2 text-white '><IoLocationSharp /></span>
            <div className='flex gap-1 flex-col'>
              <span>Phone:</span>
              <span className='text-red-500'>+1235 2355 98</span>
            </div>
          </main>

          <main className='flex gap-2 items-start'>
            <span className='text-xl bg-pink-700 rounded-full p-2 text-white '><IoLocationSharp /></span>
            <div className='flex gap-1 flex-col'>
              <span>Email:</span>
              <span className='text-red-500'>info@yoursite.com</span>
            </div>
          </main>

          <main className='flex gap-2 items-start'>
            <span className='text-xl bg-pink-700 rounded-full p-2 text-white'><IoLocationSharp /></span>
            <div className='flex gap-1 flex-col'>
              <span>Website:</span>
              <span className='text-red-500'>yoursite.com</span>
            </div>
          </main>
        </div>
      </main>
      <main>
        <div className='bg-gray-200 px-16 py-40 mx-72  flex text-center gap-6 justify-center items-center flex-col'>
          <i className='text-white bg-gray-400 rounded-full p-2 text-2xl items-center flex'><MdErrorOutline />
          </i>
          <h2 className='text-2xl font-medium'>Sorry! Something went wrong.</h2>
          <span className='font-light'>This page did not load Google Maps correctly. See the JavaScript console for technical details.</span>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page