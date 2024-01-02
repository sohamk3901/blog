'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import {  Oswald } from 'next/font/google';


const Oswald_font = Oswald({
  subsets: ['latin'],
  weight: '700',
  variable:'--font-sans'
});

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};
  
const Second = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState('countdown');
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className='w-full mb-8 bg-slate-100 top-0'> 
      <div className='container mx-auto'>
        <div className='flex w-full mx-auto px-8  py-4 justify-center items-center'>
            <div className=' md:float-left md:contents '>
                <Link href='/'>
                    <span className={`${Oswald_font.className} md:float-right align-middle text-slate-950 mx-2 md:mx-4 px-4 py-2 font-semibold cursor-pointer text-lg md:text-xl  border-slate-900 ${active === 'blog' ? 'border-2' : 'border md:border-2'} `}>
                        BLOG
                    </span>
                </Link>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className={`${Oswald_font.className} hidden md:block md:float-right align-middle text-slate-950 mx-2 md:mx-4 px-4 py-2 font-semibold cursor-pointer text-lg md:text-xl border-slate-900 ${active === category.name.toLowerCase() ? 'border-2' : 'border md:border-2'}`}>
                            <u className={`no-underline`}>{category.name.toUpperCase()}</u>
                        </span>
                    </Link>
                ))}
                <Link href='/countdown'>
                    <span className={`${Oswald_font.className} md:float-right align-middle text-slate-950 mx-2 md:mx-4 px-4 py-2 font-semibold cursor-pointer text-lg md:text-xl  border-slate-900 ${active === 'blog' ? 'border-2' : 'border md:border-2'} `}>
                        COUNTDOWN
                    </span>
                </Link>
                
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Second;