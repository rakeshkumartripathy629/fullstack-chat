import React from 'react';
import { CiLogout } from "react-icons/ci";

const Logout = () => {
  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
  };

  return (
    <div className="w-[5%] bg-slate-950 text-white flex flex-col justify-end">
      <button 
        onClick={handleLogout} // Corrected onClick event syntax
        className="p-3 align-bottom"
      >
        <CiLogout className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" /> {/* Fixed className */}
      </button>
    </div>
  );
};

export default Logout;
