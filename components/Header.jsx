'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
  
const Header = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-cyan-200 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className={`${roboto.className} cursor-pointer font-bold text-6xl text-white`}>
                        stellar insights
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents '>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer text-xl'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header