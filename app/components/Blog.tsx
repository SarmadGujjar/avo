import Image from 'next/image'
import React from 'react'
import work1 from '@/app/asset/work1.webp'
import work3 from '@/app/asset/work3.webp'
import work4 from '@/app/asset/work4.webp'

const Blog = () => {
  return (
    <div className='bg-gray-100 mt-20 w-full py-24'>
        <main className='flex justify-center py-20'>
            <h1 className='md:text-4xl text-2xl font-bold'>RECENT BLOG</h1>
        </main>
        <main className='flex md:flex-row flex-col px-2 items-center justify-center gap-14 md:gap-9'>
            <div className='flex flex-col gap-5 px-2'>
                <a className='text-xl font-medium w-full md:w-56' href='#'>Amplify your blockchain team</a>
                <Image className='h-[285px] w-full md:w-[230px]' alt='img' width={420} height={200} src={work1} />
                <span className=''>June 21, 2023</span>
                <p className='text-gray-500 w-full md:w-56'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>

            <div className='flex flex-col gap-5 px-2'>
                <a className='text-xl font-medium w-full md:w-56' href='#'>Amplify your blockchain team</a>
                <Image className='w-full md:w-[230px]' alt='img' width={420} height={200} src={work4} />
                <span className=''>June 21, 2023</span>
                <p className='text-gray-500 w-full md:w-56'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>

            <div className='flex flex-col gap-5 px-2'>
                <a className='text-xl font-medium w-full md:w-56' href='#'>Amplify your blockchain team</a>
                <Image className='w-full md:w-[230px]' alt='img' width={420} height={200} src={work3} />
                <span className=''>June 21, 2023</span>
                <p className='text-gray-500 w-full md:w-56'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>

            <div className='flex flex-col gap-5 px-2'>
                <a className='text-xl font-medium w-full md:w-56' href='#'>Amplify your blockchain team</a>
                <Image className='w-full md:w-[230px]' alt='img' width={420} height={200} src={work4} />
                <span className=''>June 21, 2023</span>
                <p className='text-gray-500 w-full md:w-56'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>
        </main>
    </div>
  )
}

export default Blog