import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const LaunchCard = ({launch}) => {
  return (
    <div className='bg-slate-100 shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8'>
      <div className="relative overflow-hidden shadow-md pt-5 pb-80 mb-6 ">
        <img src={launch.featuredImage.url} height={launch.featuredImage.height} alt="" className="object-top absolute h-auto w-full object-cover border-white shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <div className='pl-4 text-blue-800'>
        {launch.companies.map((category, index) => (
            <span key={index} className={`text-slatee-950  block inline  pb-3 mb-3`}>{category.name}  . </span>
        ))}
        {launch.categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span className={`cursor-pointer text-slatee-950 inline block  pb-3 mb-3`}>{category.name}  . </span>
          </Link>
        ))}
      </div>
      <div>
        <h1 className='transition duration-700 text pl-4 text-slate-950 mb-4 cursor-pointer hover:text-amber-800 text-3xl font-semibold'>
            <Link href={`/countdown/${launch.slug}`}>
              {launch.missionTitle}
            </Link>
        </h1>
        <span className="relative align-middle items-right mb-4 px-4 py-4 text-lime-800">{moment(launch.dateAndTime).fromNow()}</span>
      </div>
      
      <div className='block lg:flex text-center items-center pl-4 mt-4 mb-8 w-full'>
        <div className='flex  items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
        <Image
          unoptimized
          alt={launch.launcher.name}
          height={30}
          width={30}
          className="align-middle drop-shadow-lg rounded-full"
          src={launch.launcher.logo.url}
        />
            <p className="inline align-middle text-slate-950 pl-2 ml-2 text-lg">{launch.launcher.name}</p>
        </div>
        <div className="font-medium text-slate-950 text-left">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  inline mr-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(launch.dateAndTime).format('DD MMM, YYYY, h:mm:ss a')}</span>
        </div>  
        
      </div>
      <p className=" text-lg text-slate-700 font-normal px-4 mb-8">
      {launch.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/countdown/${launch.slug}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-indigo-950 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Read more</span>
        </Link>
      </div>
    </div>
  )
}

export default LaunchCard;