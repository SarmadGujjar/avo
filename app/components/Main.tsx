import Image from 'next/image'
import clientbg from '@/app/asset/clientbg.webp'
import Link from 'next/link'
import { CgDetailsMore } from "react-icons/cg";


const Main = () => {
    return (
        <div className=''>
            <main className=''>
                <Image className='w-full h-[700px] md:px-0 px-2' alt='img' width={1000} height={900} src={clientbg} />
            </main>
            <main className='fixed md:flex hidden bg-gray-200 shadow-2xl pb-3 justify-between w-full  px-56 top-0  pt-5'>
                <span className='flex text-black text-xl font-old'>avo</span>
                <ul className='flex gap-10 pt-2 text-black'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='about'>About</Link></li>
                    <li><Link href='work'>Work</Link></li>
                    <li><Link href='blog'>Blog</Link></li>
                    <li><Link href='contact'>Contact</Link></li>
                </ul>
            </main>
            <main className='fixed bg-gray-200 md:hidden shadow-2xl pb-3 justify-between w-full flex px-10 top-0  pt-5'>
                <span className='flex text-black text-xl font-old'>avo</span>
                <ul className='flex pt-1 text-2xl text-black'>
                    <li><i className='text-2xl flex'><CgDetailsMore />
                    </i></li>
                </ul>
            </main>
            <main className='absolute top-0 left-0 pt-56 pl-4 md:pl-56 pr-8'>
                <h2 className='md:text-4xl text-2xl font-bold w-full md:w-[350px] text-white '>WE CREATE MODERN & MINIMAL WEBSITE</h2>
                <p className='text-gray-400 w-full md:w-96 my-5 md:px-0 px-2'>A small river name Duden flows by their place and supplies it with the necessary regelialia</p>
                <button className='bg-red-600 px-4 md:mx-0 mx-2 py-3 text-white'>Start Projects</button>
            </main>
        </div>
    )
}

export default Main