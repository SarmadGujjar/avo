import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bg2 from '@/app/asset/bg2.webp'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import { MdNavigateNext } from "react-icons/md";




const Page = () => {
  return (
    <div>

      <div className=''>
        <main className=''>
          <Image className='w-full h-[550px]' alt='img' width={1000} height={900} src={bg2} />
        </main>
        
        <main className='absolute flex flex-col gap-3 text-white top-0 left-0 pt-72 pl-56'>
          <div className='flex gap-5'>
            <span className='flex'>HOME   <span className='text-2xl text-red-600 font-bold flex'>< MdNavigateNext/></span></span>
            <span className='flex'>BLOG   <span className='text-2xl text-red-600 font-bold flex'>< MdNavigateNext/></span></span>
          </div>
          <div className='font-bold text-4xl'>BLOG</div>
        </main>
      </div>
      <Blog />

      {/*  */}

      <Blog />
      {/*  */}
      <Footer />
    </div>
  )
}

export default Page