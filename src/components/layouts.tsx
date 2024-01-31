'use client'
import Image from 'next/image'
import MyIcon from '../../public/zenguard.png'
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useState } from 'react';


export default function Layouts({ children }: {children: React.ReactNode}) {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
    <body className={'dark:bg-zinc-900 bg-orange-50 dark:text-slate-100 text-zinc-950 font-Silkscreen md:container md:mx-auto p-4 transition-colors duration-1000'}>
        <section>
          <nav className='flex py-10 justify-between'>
            <Image src={MyIcon} alt='myicon' width={60} height={60} priority={true}/>
            <ul className='flex items-center gap-5'>
              <li>
                { 
                  darkMode ? 
                  ( <BsSun className='cursor-pointer' onClick={() => setDarkMode(!darkMode)} size={20}/> ) 
                  :
                  ( <BsFillMoonStarsFill className='cursor-pointer' onClick={() => setDarkMode(!darkMode)} size={18} color={'#000 '}/> ) 
                }
              </li>
              <li>
                <a className='bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-50 px-4 py-2 rounded-md font-Silkscreen select-none' href="/erfan_ezizi_cv.pdf" download>Download CV</a>
              </li>
            </ul>
          </nav>
        </section>
      {children}
    </body>
    </html>
  )
}