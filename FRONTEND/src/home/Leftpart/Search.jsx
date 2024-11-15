import React from 'react';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
   <div className='h-[10vh]'>
     <div className="flex justify-center items-center p-4">
      <form action="" className="w-full max-w-md">
        <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-black">
          <IoSearch className="text-gray-400" />
          <input
            type="text"
            className="grow outline-none bg-slate-900 text-white placeholder-gray-500"
            placeholder="Search"
          />
        </label>
      </form>
    </div>
   </div>
  );
};

export default Search;
