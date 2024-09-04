import Image from 'next/image'
import React from 'react'
import work1 from '@/app/asset/work1.webp'
import work2 from '@/app/asset/work2.webp'
import work3 from '@/app/asset/work3.webp'
import work4 from '@/app/asset/work4.webp'
import work5 from '@/app/asset/work5.webp'
import work6 from '@/app/asset/work6.webp'
import prsn1 from '@/app/asset/prsn1.webp'
import prsn2 from '@/app/asset/prsn2.webp'

const Work = () => {
    return (
        <div className='bg-gray-100 my-20 pb-20'>
            <div className='md:flex flex-col hidden'>


                <main className='py-20 flex justify-center'>
                    <h1 className='text-4xl font-bold'>OUR WORKS</h1>
                </main>
                <main className='flex justify-center items-center gap-10'>
                    <Image alt='img' height={750} width={400} src={work1} />
                    <div className='gap-5 flex flex-col'>
                        <span>Web Design</span>
                        <h2 className='text-4xl font-semibold'><a>Cassette tape</a></h2>
                        <p className='text-gray-500 w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn1} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex justify-center items-center gap-10'>
                    <div className='gap-5 flex flex-col text-end'>
                        <span>Application</span>
                        <h2 className='text-4xl font-semibold'><a>Miniwall Clock</a></h2>
                        <p className='text-gray-500 w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn2} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                    <Image alt='img' height={600} width={400} src={work2} />
                </main>

                <main className='flex justify-center items-center gap-10'>
                    <Image alt='img' height={750} width={400} src={work3} />
                    <div className='gap-5 flex flex-col'>
                        <span>UI/Ux Design</span>
                        <h2 className='text-4xl font-semibold'><a>Avo Portfolio Agency</a></h2>
                        <p className='text-gray-500 w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn1} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex justify-center items-center gap-10'>
                    <div className='gap-5 flex flex-col text-end'>
                        <span>Web Development</span>
                        <h2 className='text-4xl font-semibold'><a>Hand Writing</a></h2>
                        <p className='text-gray-500 w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn2} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                    <Image alt='img' height={750} width={400} src={work4} />
                </main>

                <main className='flex justify-center items-center gap-10'>
                    <Image alt='img' height={750} width={400} src={work5} />
                    <div className='gap-5 flex flex-col'>
                        <span>Illustration</span>
                        <h2 className='text-4xl font-semibold'><a>Keyboard</a></h2>
                        <p className='text-gray-500 w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn1} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex justify-center items-center gap-10'>
                    <div className='gap-5 flex flex-col text-end'>
                        <span>Web Development</span>
                        <h2 className='text-4xl font-semibold'><a>Spiral</a></h2>
                        <p className='text-gray-500 w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn2} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                    <Image alt='img' height={750} width={400} src={work6} />
                </main>

            </div>


            {/*  */}

            <div className='flex flex-col md:hidden gap-16'>
                <main className='py-20 flex justify-center'>
                    <h1 className='text-4xl font-bold'>OUR WORKS</h1>
                </main>
                <main className='flex flex-col px-2 justify-center items-center gap-7'>
                    <Image alt='img' height={750} width={400} src={work1} />
                    <div className='gap-5 flex  flex-col px-2'>
                        <span>Web Design</span>
                        <h2 className='text-4xl font-semibold'><a>Cassette tape</a></h2>
                        <p className='text-gray-500 w-full md:w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn1} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex flex-col px-2 justify-center items-center gap-7'>
                    <Image alt='img' height={600} width={400} src={work2} />
                    <div className='gap-5  flex flex-col px-2'>
                        <span>Application</span>
                        <h2 className='text-4xl font-semibold'><a>Miniwall Clock</a></h2>
                        <p className='text-gray-500 w-full md:w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn2} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex flex-col px-2 justify-center items-center gap-7'>
                    <Image alt='img' height={750} width={400} src={work3} />
                    <div className='gap-5 flex flex-col px-2'>
                        <span>UI/Ux Design</span>
                        <h2 className='text-4xl font-semibold'><a>Avo Portfolio Agency</a></h2>
                        <p className='text-gray-500 w-full md:w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn1} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex flex-col px-2 justify-center items-center gap-7'>
                    <Image alt='img' height={750} width={400} src={work4} />
                    <div className='gap-5 flex flex-col px-2'>
                        <span>Web Development</span>
                        <h2 className='text-4xl font-semibold'><a>Hand Writing</a></h2>
                        <p className='text-gray-500 w-full md:w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn2} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex flex-col px-2 justify-center items-center gap-7'>
                    <Image alt='img' height={750} width={400} src={work5} />
                    <div className='gap-5 flex flex-col px-2'>
                        <span>Illustration</span>
                        <h2 className='text-4xl font-semibold'><a>Keyboard</a></h2>
                        <p className='text-gray-500 w-full md:w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn1} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

                <main className='flex flex-col px-2 justify-center items-center gap-7'>
                    <Image alt='img' height={750} width={400} src={work6} />
                    <div className='gap-5 flex flex-col px-2'>
                        <span>Web Development</span>
                        <h2 className='text-4xl font-semibold'><a>Spiral</a></h2>
                        <p className='text-gray-500 w-full md:w-[500px]'>Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <main className='flex items-center gap-2'>
                            <Image className='rounded-full' alt='img' height={80} width={80} src={prsn2} />
                            <div className='flex flex-col'>
                                <span>Jamie Jhonson</span>
                                <span className='text-gray-500'>avo.com</span>
                            </div>
                        </main>
                        <a><button className='bg-gray-100 border-2 border-black px-2 py-1'>V i e w    P o r t f o l i o</button></a>
                    </div>
                </main>

            </div>

        </div>
    )
}

export default Work