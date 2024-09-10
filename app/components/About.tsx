import React from 'react'
import { BiVector } from "react-icons/bi";
import { LiaSearchDollarSolid } from "react-icons/lia";
import { FaMobileRetro } from "react-icons/fa6";
import { SiVorondesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg"
import Image from 'next/image';
import about from '@/app/asset/about.jpg.webp'



const About = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <main className='flex flex-col py-20 items-center gap-16'>
        <h1 className='text-4xl font-bold'>ABOUT US</h1>
        <div className='flex md:flex-row flex-col gap-14'>
          <div className='flex flex-col text-xl gap-5 text-black items-center'>
            <i className='text-4xl'><BiVector /></i>
            <span>UI/UX Design</span>
          </div>

          <div className='flex flex-col text-xl gap-5 text-black items-center'>
            <i className='text-4xl'><CgWebsite /></i>
            <span>Web Development</span>
          </div>

          <div className='flex flex-col gap-5 text-xl text-black items-center'>
            <i className='text-4xl'><FaMobileRetro /></i>
            <span>Mobile Apps</span>
          </div>

          <div className='flex flex-col text-xl gap-5 text-black items-center'>
            <i className='text-4xl'><SiVorondesign  /></i>
            <span>Product Design</span>
          </div>

          <div className='flex flex-col text-xl gap-5 text-black items-center'>
            <i className='text-4xl'><LiaSearchDollarSolid /></i>
            <span>SEO</span>
          </div>
        </div>
      </main>
      <main className='flex md:flex-row flex-col items-center gap-10'>
        <div className='flex flex-col md:items-end px-3 md:px-0'>
          <h2 className='text-2xl md:text-end font-semibold w-full md:w-[220px]'>Welcome to AVO A Personal Porfolio Web Agency</h2>
          <p className='text-gray-500 md:text-end w-[300px]'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies
            it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div><Image className='md:h-[320px] px-2 w-full md:w-[280px]' height={500} width={700} alt='img' src={about} /></div>
        <div className='flex flex-col gap-5 items-start md:px-0 px-3'>
          <p className='text-gray-500 w-full md:w-[300px]'>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
            right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place
            and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <button className='bg-red-600 rounded-md px-3 py-2 text-white'>View all projects </button>
        </div>
      </main>
      <main className='flex md:flex-row flex-col justify-center gap-5 pt-12'>
      <div className='flex gap-3'>
        <main className='text-4xl text-red-500'>01</main>
          <main className='flex flex-col'>
            <span className='text-2xl w-[200px]'>Search Engine Optimization</span>
            <span className='text-gray-500 w-[300px] md:text-lg'>Far far away, behind the word mountains</span>
            </main>
        </div>
        <div className='flex gap-3'>
        <main className='text-4xl text-red-500'>02</main>
          <main className='flex flex-col'>
            <span className='text-2xl w-[200px]'>Search Engine Optimization</span>
            <span className='text-gray-500 w-[300px] md:text-lg'>Far far away, behind the word mountains</span>
            </main>
        </div>
        <div className='flex gap-3'>
        <main className='text-4xl text-red-500'>03</main>
          <main className='flex flex-col'>
            <span className='text-2xl w-[200px]'>Search Engine Optimization</span>
            <span className='text-gray-500 w-[300px] md:text-lg'>Far far away, behind the word mountains</span>
            </main>
        </div>
      </main>
    </div>
  )
}

export default About