import React from 'react';
import Image from 'next/image';


const Author = ( {author }) => {
  return (
    <div className=' mt-20 mb-8 p-12 relative rounded-lg bg-cyan-800 bg-opacity-70 items-center'>
      <div className='absolute left-10 right-0 -top-14'>
         <Image
              alt={author.name}
              unoptimized
              height={100}
              width={100}
              className='align-middle rounded-full'
              src={author.photo.url}
          />
      </div>
      {/* Future social integrations */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <h3 className='text-white mt-12 text-3xl font-bold'>{author.name}</h3>
        <h2 className='text-white mt-12 text-3xl font-bold'>Twitter</h2>
      </div> */}
      <h3 className='text-white mt-12 text-3xl font-bold mb-4'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author