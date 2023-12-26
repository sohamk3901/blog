'use client';
import Link from 'next/link'
import React from 'react';
import { Qwitcher_Grypen } from 'next/font/google';
import { Second } from '.';

const qwitcher_grypen = Qwitcher_Grypen({
  subsets: ['latin'],
  weight: '700',
  variable:'--font-sans'
})
  
const Header = () => {

  return (
    <div className='w-full bg-slate-100'> 
      <div className='container mx-auto'>
        <div className='flex w-full mx-auto px-8 inline-block py-6 justify-center items-center'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className={`${qwitcher_grypen.className} cursor-pointer font-bold text-6xl font-bold text-slate-950 `}>
                        Stellar Insights
                    </span>
                </Link>
            </div>
        </div>
        <Second/>
      </div>  
    </div>
  )
}

export default Header