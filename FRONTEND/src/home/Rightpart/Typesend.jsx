// import React from 'react'
// import { IoSendSharp } from "react-icons/io5";

// const Typesend = () => {
//   return (
   
//       <>
//     <div className='flex space-x-3 h-[8vh] text-center'>
//     <div className='w-[50%]'>
//       <input type="text"
//        placeholder="Type here"
//         className="input input-bordered w-full max-w-xs grow outline-none bg-slate-900 " />
//         </div>

//         <button className='text-3xl'>
//           <IoSendSharp/>
//         </button>

//     </div>
//       </>
   
//   )
// }

// export default Typesend

import React from 'react';
import { IoSendSharp } from "react-icons/io5";

const Typesend = () => {
  return (
    <div className="fixed bottom-0 right-0 w-full max-w-2xl bg-slate-900 p-4 flex items-center justify-between">
      {/* Input Field */}
      <div className="w-[85%]">
        <input
          type="text"
          placeholder="Type here"
          className="w-full p-3 bg-slate-800 text-white rounded-lg focus:outline-none placeholder-gray-500 border-2 border-gray-600"
        />
      </div>

      {/* Send Button */}
      <button className="p-3 text-3xl text-white hover:text-blue-500 border-2 border-gray-600 rounded-full flex items-center justify-center">
        <IoSendSharp />
      </button>
    </div>
  );
};

export default Typesend;
