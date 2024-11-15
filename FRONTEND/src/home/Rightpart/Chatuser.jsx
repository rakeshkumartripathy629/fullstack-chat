// import React from 'react'

// const Chatuser = () => {
//   return (
//     <>
// <div>
// <div className="avatar online">
//   <div className="w-16 rounded-full">
//     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//   </div>
// </div>
// </div>
   
//    <div>
//     <h1>Rakesh Tripathy</h1>
//     <span>Online</span>
//    </div>
//     </>
//   )
// }

// export default Chatuser


import React from 'react'

const Chatuser = () => {
  return (
    <div className="flex items-center  h-[8vh] gap-4 p-4 rounded-lg cursor-pointer">
      {/* Avatar Section */}
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
        </div>
      </div>

      {/* User Info Section */}
      <div>
        <h1 className="font-semibold text-xl">Rakesh Tripathy</h1>
        <span className="text-green-500">Online</span>
      </div>
    </div>
  )
}

export default Chatuser
