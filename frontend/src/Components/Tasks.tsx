import React, { useState } from 'react'

const Tasks = () => {
  const [checkedTasks, setCheckedTasks] = useState([]);

  const tasks = [
    {
      id: 1,
      name: "Frontend",
      date: '23 Nov 24',
      img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Backend",
      date: '12 Dec 24',
      img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "College Jagat",
      date: '28 Apr 24',
      img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    }
  ]

  return (
    <>
      <div className="w-[30%] h-[400px] m-5 shadow-lg rounded-[8px] overflow-y-auto">
        <h1 className='p-4 text-xl mb-2'>Tasks</h1>
        {tasks.map((e) => (
          <div key={e.id} className="flex items-center justify-between mx-8 mb-4 pb-4 border-b border-gray-300">
            <div className='flex items-center gap-3'>
              <div className="">
                <input
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div>
                <h2 className='leading-[12px]'>{e.name}</h2>
                <p><small className='text-zinc-600'>{e.date}</small></p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <img src={e.img} alt="" className='w-8 h-8 rounded-full object-cover' />
              <h2>+</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tasks