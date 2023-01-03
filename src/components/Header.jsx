import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Inventory from "./Inventory";

function Header() {
  return (
    <div className="sticky bg-primary max-w-[1640px] mx-auto flex justify-between md:justify-around items-center p-4">
      <div>
        <h1 className="text-1xl font-bold uppercase p-1 text-white border-b border-gray-100 cursor-pointer">
          Invent<span className="text-red-900">ory</span>
        </h1>
      </div>
      <div>
        <Inventory />
      </div>
      <div className="">
        <button
          className="text-secondary font-semiBold w-24 h-10 border text-center py-2 border-primary rounded-md
        bg-red-900 transition duration-300 hover:text-secondary cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;

// <nav className="flex justify-between">
//   <h1 className="bg-secondary flex text-2xl font-bold uppercase p-4 text-white border-b border-gray-100 cursor-pointer">
//     Inventory
//   </h1>
//   <div>
//     <Inventory />
//   </div>
// </nav>
