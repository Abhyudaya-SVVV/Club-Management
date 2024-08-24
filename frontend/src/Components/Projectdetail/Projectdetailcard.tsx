import React from 'react'
import { IoMdFlag } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";

const Projectdetailcard = () => {
    return (
        <>
            <div className="w-[30%] h-[300px] m-5 shadow-lg rounded-[8px] overflow-y-auto">
                <h1 className='pt-4 pl-4 text-xl'>Club Management</h1>
                <div className='p-5'>
                    <p><small className='text-zinc-600 flex items-center gap-1'><IoMdFlag style={{ opacity: '0.6' }} /> Deadline april 5</small></p>
                    <p><small className='text-zinc-600'>Track club member website for managing task and improve Productivity.</small></p>
                    <div className='mt-7'>
                        <div className='flex justify-between mb-2'>
                            <p>Project Progress</p>
                            <p>32%</p>
                        </div>
                        <ProgressBar completed={32} bgColor='green' height='6px' customLabel='⠀' />
                    </div>

                    <div className='flex items-center justify-between mt-6'>
                        <div className='flex items-center gap-3'>
                        <img src="https://images.pexels.com/photos/3760858/pexels-photo-3760858.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-10 h-10 rounded-full object-cover' />
                        <h2 className='text-zinc-800'>Yashraj</h2>
                        </div>
                    <p><small className='text-zinc-500 pl-3'>Team Lead</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projectdetailcard