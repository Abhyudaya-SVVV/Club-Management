import React, { useState } from 'react'
import { FaTag } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

const Usercard = () => {
  const [state, setState] = useState({
    name: "Pragya",
    img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    work:"Ui Design",
    projectname: "Club Management",
    projectwork: "Handling UI designing part on the club management & Inventory management project",
    tasks: [{
      taskname: "Club Management",
      progress: "90",
      color: "#00A3AF",
    },

    {
      taskname: "Inventory Management",
      progress: "70",
      color: "#CC00AF"
    },
    {
      taskname: "Inventory Management",
      progress: "70",
      color: "yellow"
    }]
  });

  return (
    <>
      <div className="w-[30%] min-h-[300px] max-h-[400px] m-5 shadow-lg rounded-[8px] overflow-y-auto">
        <div className='flex items-center justify-between mt-3 pb-3 mx-6 border-b border-gray-300'>
          <div className='flex items-center gap-3'>
            <img className='w-10 h-10 rounded-full object-cover' src={state.img} alt="img" />
            <h2>{state.name}</h2>
          </div>
          <div className='flex items-center gap-1'>
            <FaTag className='opacity-75' />
            <p><small className='text-zinc-800'>{state.work}</small></p>
            <input type="checkbox" className="form-checkbox h-5 w-5 ml-3" />
          </div>
        </div>
        <h2 className='mt-3 pb-1 border-b border-gray-300 mx-6'>{state.projectname}</h2>
        <p className='mt-2 pb-2 border-b border-gray-300 text-zinc-600 mx-6'>{state.projectwork}</p>
        <div className='mt-4'>
          {state.tasks.map((task, index) => (
            <div className='px-5 mb-3' key={index}>
              <div className='flex justify-between mb-1'>
                <p><small>{task.taskname}</small></p>
                <p><small className='text-zinc-600'>{task.progress}%</small></p>
              </div>
              <ProgressBar completed={task.progress} bgColor={task.color} height='10px' customLabel='⠀' />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Usercard