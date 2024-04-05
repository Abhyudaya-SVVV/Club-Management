import React from 'react';
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="mt-2 w-full flex justify-evenly items-center rounded-[4px] p-4 shadow-lg">
      <div className="ml-4 text-blue-500 font-bold">
        <span className="bg-blue-500 py-1 px-2 text-white rounded-full mr-1">T</span>
        TASK
      </div>
      <div className="flex items-center bg-black/5 h-8 w-full rounded-3xl px-8 gap-2 mx-8">
        <div><FiSearch /></div>
        <input
          type="text"
          placeholder="search anything"
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="mr-4">
        <ul className="flex gap-8">
          <li className="text-blue-500 font-medium relative">
            <a href="#">Dashboard</a>
            <div className="absolute top-full left-0 bg-white shadow-md text-sm hidden group-hover:block">
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Logout</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Security</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Notification update</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Language Prefrences</a>
            </div>
          </li>
          <li className="text-blue-500 font-medium relative">
            <a href="#">Settings</a>
            <div className="absolute top-full left-0 bg-white shadow-md text-sm hidden group-hover:block">
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Contact Admin</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">FAQ</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Feedback</a>
            </div>
          </li>
          <li className="text-blue-500 font-medium">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;