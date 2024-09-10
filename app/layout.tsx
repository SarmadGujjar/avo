"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [open, setOpen] = useState<any>();
  const path = usePathname();
  return (
    <html lang="en">
      <body className="bg-white">
        <main>
          <main className='fixed bg-gray-200 md:hidden shadow-2xl pb-3 justify-between w-full flex px-10 top-0  pt-5'>
            <span className='flex text-black text-xl font-old'>avo</span>
            <div className='flex pt-1 text-2xl text-black'>
              <button onClick={() => setOpen(true)} className='text-xl flex'>MENU</button>
            </div>
            {open ? (
              <div>
                <button onClick={() => setOpen(false)} className='text-xl flex'>MEnu</button>
                <ul className='flex bg-red-500 flex-col left-0 h-[100%] top-0 p-4 w-full gap-4 pt-2 text-white'>
                  <li className={`hover:text-red-600 ${path === '/' && 'text-red-600'}`}><Link href='/'>Home</Link></li>
                  <li className={`hover:text-red-600 ${path === 'about' && 'text-red-600'}`}><Link href='about'>About</Link></li>
                  <li className={`hover:text-red-600 ${path === 'work' && 'text-red-600'}`}><Link href='work'>Work</Link></li>
                  <li className={`hover:text-red-600 ${path === 'blog' && 'text-red-600'}`}><Link href='blog'>Blog</Link></li>
                  <li className={`hover:text-red-600 ${path === 'contact' && 'text-red-600'}`}><Link href='contact'>Contact</Link></li>
                </ul>
              </div>
            ) : null}
          </main>

          {/* SCREEN */}
          <main className='fixed md:flex hidden bg-gray-200 shadow-2xl pb-3 justify-between w-full  px-56 top-0  pt-5'>
            <span className='flex text-black text-xl font-old'>avo</span>
            <ul className='flex gap-10 pt-2 text-black'>
              <li className={`hover:text-red-600 ${path === '/' && 'text-red-600'}`}><Link href='/'>Home</Link></li>
              <li className={`hover:text-red-600 ${path === '/about' && 'text-red-600'}`}><Link href='/about'>About</Link></li>
              <li className={`hover:text-red-600 ${path === '/work' && 'text-red-600'}`}><Link href='/work'>Work</Link></li>
              <li className={`hover:text-red-600 ${path === '/blog' && 'text-red-600'}`}><Link href='/blog'>Blog</Link></li>
              <li className={`hover:text-red-600 ${path === '/contact' && 'text-red-600'}`}><Link href='/contact'>Contact</Link></li>
            </ul>
          </main>
        </main>
        {children}
      </body>
    </html>
  );
}
