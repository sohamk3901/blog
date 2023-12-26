'use client';
import Link from 'next/link'
import React from 'react';

import { Qwitcher_Grypen } from 'next/font/google';


const qwitcher_grypen = Qwitcher_Grypen({
  subsets: ['latin'],
  weight: '700',
  variable:'--font-sans'
})
  
const Footer = () => {

  return (
    <div className='w-full bg-slate-100'> 
      <div className='container mx-auto'>
        <div className='flex w-full mx-auto px-8 inline-block border-slate-900 py-10 justify-center items-center mb-0'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className={`${qwitcher_grypen.className} cursor-pointer font-bold text-6xl text-slate-950 `}>
                        Thank You!
                    </span>
                </Link>
            </div>
        </div>
        {/* <div>
            <div className='hidden md:float-left md:contents '>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer text-xl'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div> */}
      </div>  
    </div>
  )
}

export default Footer;