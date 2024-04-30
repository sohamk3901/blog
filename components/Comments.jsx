// import React, { useEffect, useState } from 'react';
// import moment from 'moment';
// import parse from 'html-react-parser';

// import { getComments } from '../services';

// const Comments = ({ slug }) => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     getComments(slug).then((result) => {
//       setComments(result);
//     });
//   }, []);

//   return (
//     <>
//       {comments.length > 0 && (
//         <div className="bg-slate-100 shadow-lg rounded-lg p-8 pb-12 mb-8">
//           <h3 className="text-2xl mb-8 font-semibold text-slate-950 border-b border-slate-900 pb-4">
//             {comments.length}
//             {' '}
//             {comments.length > 1 ? 'Comments' : 'Comment'}
//           </h3>
//             {comments.map((comment, index) => (
//               <div key={index} className="border-b border-slate-900 border-dashed mb-4 pb-4 text-slate-950">
//                 <p className="mb-4">
//                   <span className="font-semibold text-xl">{comment.name}</span>
//                   {' '}
//                   on
//                   {' '}
//                   {moment(comment.createdAt).format('DD MMM, YYYY')}
//                 </p>
//                 <p className="whitespace-pre-line text-slate-950 w-full">{parse(comment.comment)}</p>
//               </div>
//             ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Comments;