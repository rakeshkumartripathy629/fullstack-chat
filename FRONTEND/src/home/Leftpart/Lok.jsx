

import React from 'react'

const Lok = () => {
  return (
   <div>
     <div className="flex items-center gap-4 p-4 hover:bg-slate-400 duration-300 cursor-pointer">
         <div className="avatar online">
        <div className="w-14 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User Avatar"
          />
        </div>
      </div>
      <div>
        <h2 className='font-bold'>Mohan Majhi</h2>
        <span>mohan1@hmail.com</span>
      </div>
    </div>
   </div>
  )
}

export default Lok


