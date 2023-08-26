'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';


import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);
  
  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8 bg-black">
      <h3 className="text-xl text-white mb-8 font-semibold border-b pb-4 border-white ">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.slice(0).reverse().map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-white font-xs">{moment(post.createdAt).format('DD MMM, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md text-white" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;