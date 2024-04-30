// import React from 'react';
// import Image from 'next/image';
// import moment from 'moment';

// const LaunchDetail = ({ launch }) => {
//   const getContentFragment = (index, text, obj, type) => {
//     let modifiedText = text;

//     if (obj) {
//       if (obj.bold) {
//         modifiedText = (<b key={index}>{text}</b>);
//       }

//       if (obj.italic) {
//         modifiedText = (<em key={index}>{text}</em>);
//       }

//       if (obj.underline) {
//         modifiedText = (<u key={index}>{text}</u>);
//       }
//     }

//     switch (type) {
//       case 'heading-three':
//         return <h3 key={index} className="text-3xl text-slate-950 font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
//       case 'paragraph':
//         return <p key={index} className="mb-8 text-slate-950 text-lg">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
//       case 'heading-four':
//         return <h4 key={index} className="text-2xl text-slate-950 font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
//       case 'image':
//         return (
//           <center className='m-10'>
//             <br></br>
//             <img
//               key={index}
//               alt={obj.title}
//               height={obj.height}
//               width={obj.width}
//               src={obj.src}
//             />
//             <br></br>
//           </center>
//         );
//       default:
//         return modifiedText;
//     }
//   };

//   return (
//     <>
//       <div className="bg-slate-100 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
//         <div className="relative overflow-hidden shadow-md mb-6">
//           <img src={launch.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
//         </div>
//         <div className="px-4 lg:px-0">
//           <div className="flex items-center mb-8 w-full border-b pb-6 border-slate-900">
//             <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
//               <Image
//                 unoptimized
//                 alt={launch.launcher.name}
//                 height={30}
//                 width={30}
//                 className="align-middle drop-shadow-lg rounded-full"
//                 src={launch.launcher.logo.url}
//               />
//               <p className="inline align-middle text-slate-950 ml-2 font-medium text-lg">{launch.launcher.name}</p>
//             </div>
//             <div className="font-medium text-slate-950">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               <span className="align-middle text-slate-950">{moment(launch.dateAndTime).format('DD MMM, YYYY, h:mm:ss a')} ... {moment(launch.dateAndTime).fromNow()}</span>
//             </div>
//           </div>
//           <h1 className="mb-8 text-3xl text-slate-950 font-semibold">{launch.missionTitle}</h1>
//           {launch.content.raw.children.map((typeObj, index) => {
//             const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

//             return getContentFragment(index, children, typeObj, typeObj.type);
//           })}
//         </div>
//       </div>

//     </>
//   );
// };

// export default LaunchDetail;