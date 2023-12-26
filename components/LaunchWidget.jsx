'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';


import { getUpcomingLaunches } from '../services';

const LaunchWidget = () => {
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);

  useEffect(() => {
      getUpcomingLaunches().then((result) => {
        setUpcomingLaunches(result);
      });
    }
  , []);
  
  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8 bg-slate-100 ">
      <h3 className="text-xl text-slate-950 mb-8 font-semibold border-b pb-4 border-slate-900 ">Upcoming Launches</h3>
      {upcomingLaunches.slice().length > 0 && upcomingLaunches.slice(0).filter((launch, index) => index < 4).map((launch, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={launch.missionTitle}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={launch.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-lime-800 font-xs">{moment(launch.dateAndTime).fromNow()} {launch.launched === false}</p>
            <Link href={`/countdown/${launch.slug}`} className="text-md text-slate-950" key={index}>{launch.missionTitle}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaunchWidget;