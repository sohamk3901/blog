'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import { Qwitcher_Grypen } from 'next/font/google';


const qwitcher_grypen = Qwitcher_Grypen({
  subsets: ['latin'],
  weight: '700',
  variable:'--font-sans'
})
  
const Second = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className='w-full mb-8 bg-black top-0'> 
      <div className='container mx-auto'>
        <div className='flex w-full mx-auto px-8 inline-block border-white py-10 justify-center items-center'>
            <div className='hidden md:float-left md:contents '>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer text-sm'>
                                <u>{category.name.toUpperCase()}</u>
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Second;