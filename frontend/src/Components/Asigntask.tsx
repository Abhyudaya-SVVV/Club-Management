import React from 'react'
import { FaUserAlt, FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Asigntask = () => {
  const membername = [
    {
      name: "Nawadha",
      img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      status: "2 task in progress"
    },
    {
      name: "Pragya",
      img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      status: "1 task in progress"
    },
  ]

  return (
    <>
      <div className="w-[30%] h-[400px] m-5">
        <div className="flex items-center justify-evenly rounded-[8px] shadow-lg p-4">
          <FaUserAlt />
          <h1>Assign task to</h1>
          <FaCaretDown />
        </div>
        <div className="mt-4 rounded-[5px] shadow-lg p-2 min-h-[360px] max-h-[380px] overflow-y-auto">
          <div className="flex items-center bg-gray-200 h-8 w-[80%] rounded-[10px] px-8 gap-3 mx-5 mt-4 mb-5 mx-auto">
            <FiSearch />
            <input type="text" placeholder='search' className="w-[80%] bg-transparent outline-none" />
          </div>
          {membername.map((member) => (
            <div className="flex items-center justify-between px-8 py-4 hover:bg-blue-100 hover:border-l-2 hover:border-blue-400">
              <div className='flex items-center gap-3'>
                <img src={member.img} alt="" className='w-10 h-10 rounded-full object-cover' />
                <h1>{member.name}</h1>
              </div>
              <small><p className='text-zinc-800'>{member.status}</p></small>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Asigntask