import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bg2 from '@/app/asset/bg2.webp'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
         <div className=''>
        <main className=''>
          <Image className='w-full h-[550px]' alt='img' width={1000} height={900} src={bg2} />
        </main>
        <main className='absolute justify-between w-full flex px-56 top-0  pt-10'>
          <span className='flex text-white text-xl font-old'>avo</span>
          <ul className='flex gap-10 pt-3 text-white'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='about'>About</Link></li>
            <li><Link href='work'>Work</Link></li>
            <li><Link href='blog'>Blog</Link></li>
            <li><Link href='contact'>Contact</Link></li>
          </ul>
        </main>
        <main className='absolute flex flex-col gap-3 text-white top-0 left-0 pt-72 pl-56'>
          <div className='flex gap-5'>
            <span>HOME</span>
            <span>CONTACT</span>
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