import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Taskprogress = () => {
    const task = [
        {
            name:"College Jagat",
            progress:"37",
            color:"pink"
        },
        {
            name:"Inventory Management",
            progress:"63",
            color:"blue"
        },
        {
            name:"Bus Tracking System",
            progress:"13",
            color:"green"
        }
    ]
    return (
        <>
            <div className='w-[30%] h-[300px] m-5 shadow-lg rounded-[8px] overflow-y-auto'>
                <h1 className='p-4 text-xl mb-1'>Task Progress</h1>
                {
                    task.map((e)=><div className='px-5 mb-3'>
                    <div className='flex justify-between mb-1'>
                        <p><small>{e.name}</small></p>
                        <p><small className='text-zinc-600'>{e.progress}%</small></p>
                    </div>
                        <ProgressBar completed={e.progress} bgColor={e.color} height='10px' customLabel='⠀' />
                    </div>)
                }
            </div>
        </>
    )
}

export default Taskprogress