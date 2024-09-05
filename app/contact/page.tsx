import React from 'react'
import Image from 'next/image'
import bg2 from '@/app/asset/bg2.webp'
import Footer from '../components/Footer'
import { MdNavigateNext } from "react-icons/md";


const page = () => {
  return (
    <div>
         <div className=''>
        <main className=''>
          <Image className='w-full h-[550px]' alt='img' width={1000} height={900} src={bg2} />
        </main>
        
        <main className='absolute flex flex-col gap-3 text-white top-0 left-0 pt-72 pl-56'>
        <div className='flex gap-5'>
            <span className='flex'>HOME   <span className='text-2xl text-red-600 font-bold flex'>< MdNavigateNext/></span></span>
            <span className='flex'>CONTACT   <span className='text-2xl text-red-600 font-bold flex'>< MdNavigateNext/></span></span>
          </div>
          <div className='font-bold text-4xl'>CONTACT</div>
        </main>
      </div>

      <main className='flex flex-col p-20 justify-center gap-5 text-center'>
        <span className='text-red-500'>CONTACT US</span>
        <h2 className='text-4xl font-bold'>
        HAVE A PROJECT?
        </h2>
        <span className='text-gray-500'>  
                  Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia
        </span>
      </main>
        <Footer />
    </div>
  )
}

export default page