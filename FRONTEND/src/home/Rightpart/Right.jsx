// import React from 'react';
// import Chatuser from './Chatuser';
// import Messages from './Messages';
// import Typesend from './Typesend';

// const Right = () => {
//   return (
//     <>
//     <div className="h-screen p-4 bg-slate-950 text-gray-300 w-[70%] bg-black text-gray-300"> {/* Set background color and padding */}
//       <Chatuser />
//       <div className='' style={{maxHeight:"calc(92vh -8vh)"}}>
//       <Messages />
//       <div/>
//       <Typesend />
//     </div>
//     </>

//   );
// };

// export default Right;


import React from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Typesend from './Typesend';

const Right = () => {
  return (
    <div className="h-screen p-4 bg-slate-950 text-gray-300 w-[70%] bg-black text-gray-300">
      {/* Chatuser Component */}
      <Chatuser />
      
      {/* Messages Section with max height */}
      <div style={{ maxHeight: "calc(92vh - 8vh)" }} className="overflow-y-auto">
        <Messages />
      </div>
      
      {/* Typesend Component */}
      <Typesend />
    </div>
  );
};

export default Right;
