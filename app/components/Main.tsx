import Image from 'next/image'
import clientbg from '@/app/asset/clientbg.webp'
import React from 'react';
import AutoCounter from './AutoCounter';
import { IoMdPlay } from "react-icons/io";



const Main = () => {
    return (
        <div className=''>
            <main className=''>
                <Image className='w-full h-[700px]' alt='img' width={1000} height={900} src={clientbg} />
            </main>

            <main className='absolute top-0 left-0 pt-56 pl-4 md:pl-56 pr-8'>
                <h2 className='md:text-4xl text-2xl font-bold w-full md:w-[350px] text-white '>WE CREATE MODERN & MINIMAL WEBSITE</h2>
                <p className='text-gray-400 w-full md:w-96 my-5 md:px-0 px-2'>A small river name Duden flows by their place and supplies it with the necessary regelialia</p>
                <button className='bg-red-600 rounded-md px-4 md:mx-0 mx-2 py-3 text-white'>Start Projects</button>
            </main>
            <div className='text-white absolute md:pt-56 pt-96 top-0 right-0 pr-8 md:pr-72'>
                <AutoCounter />
            </div>
            <div className='absolute bottom-0 items-start flex  mb-10 right-0 bg-red-600 mr-20 md:mr-[550px] rounded-full'>
                <i className='text-3xl p-4'><IoMdPlay /></i>
            </div>
        </div>
    )
}

export default Main