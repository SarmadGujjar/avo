import Image from 'next/image'
import React from 'react'
import prsn1 from '@/app/asset/prsn1.webp'
import prsn2 from '@/app/asset/prsn2.webp'
import clientbg from '@/app/asset/clientbg.webp'
import bg2 from '@/app/asset/bg2.webp'

const Client = () => {
    return (
        <div>
            <main className='flex justify-center my-20'>
                <h1 className='md:text-4xl text-2xl font-bold'>Clients Says About Us?</h1>
            </main>
            <main className='flex md:flex-row flex-col px-2 justify-center gap-10'>
                <div className='bg-gray-100 p-5'>
                    <p className='text-gray-500 w-full md:w-[250px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <main className='flex gap-3 mt-5'>
                        <Image width={70} height={70} alt='img' className='rounded-full' src={prsn1} />
                        <div className='flex flex-col pt-2'>
                            <span className='font-semibold  text-xl'>Roger Scott</span>
                            <span className='text-gray-500'>Marketing Manager</span>
                        </div>
                    </main>
                </div>

                <div className='bg-gray-100 p-5'>
                    <p className='text-gray-500 w-[250px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <main className='flex gap-3 mt-5'>
                        <Image width={70} height={70} alt='img' className='rounded-full' src={prsn2} />
                        <div className='flex flex-col pt-2'>
                            <span className='font-semibold  text-xl'>Roger Scott</span>
                            <span className='text-gray-500'>Marketing Manager</span>
                        </div>
                    </main>
                </div>

                <div className='bg-gray-100 p-5'>
                    <p className='text-gray-500 w-[250px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <main className='flex gap-3 mt-5'>
                        <Image width={70} height={70} alt='img' className='rounded-full' src={prsn1} />
                        <div className='flex flex-col pt-2'>
                            <span className='font-semibold  text-xl'>Roger Scott</span>
                            <span className='text-gray-500'>Marketing Manager</span>
                        </div>
                    </main>
                </div>
            </main>
            <main className='flex my-20'>
                <div className='justify-center flex'>
                    <Image className='absolute h-[350px]  w-full flex items-center' alt='img' height={550} width={900} src={clientbg} />
                </div>
                <div className='relative top-0 pt-20 pl-10'>
                    <span className='text-red-600'>Get started</span>
                    <h2 className='text-2xl font-semibold my-2 text-white w-full md:w-[300px]'>Fill in the brief and get the project estimate</h2>
                    <p className='text-gray-500 w-full md:w-[400px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className='bg-red-600 my-2 rounded-md text-lg text-white px-2 py-1'>Get Started</button>
                </div>
            </main>
        </div>
    )
}

export default Client