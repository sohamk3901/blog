'use client';
import Link from 'next/link'
import React from 'react';
import { Qwitcher_Grypen } from 'next/font/google';


const qwitcher_grypen = Qwitcher_Grypen({
  subsets: ['latin'],
  weight: '700',
  variable:'--font-sans'
})
  
const Header = () => {

  return (
    <div className='w-full bg-black'> 
      <div className='container mx-auto'>
        <div className='flex w-full mx-auto px-8 inline-block mb-12 py-10 justify-center items-center'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className={`${qwitcher_grypen.className} cursor-pointer font-bold text-6xl text-white `}>
                        Stellar Insights
                    </span>
                </Link>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Header