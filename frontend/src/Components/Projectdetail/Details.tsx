import React from 'react'

const Details = () => {
    return (
        <>
            <div className="w-[30%] h-[300px] m-5 shadow-lg rounded-[8px] overflow-y-auto">
            <h1 className='pt-4 pl-4 text-xl'>Details</h1>
                <div className='flex items-center gap-3 mx-6 mt-5'>
                    <img src="https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-10 h-10 rounded-full object-cover' />
                    <h1>Pragya Patidar</h1>
                </div>

                <div className='mt-4 mx-5 bg-blue-50 p-3 rounded-[10px]'>
                    <h1 className='text-xl font-light'>Meeting Attendence | <span className='text-sm text-zinc-400'>This Month</span></h1>
                    <div className='flex justify-start pl-3 gap-[3rem] mt-4 items-center text-center'>
                        <div className='text-xl text-blue-600'>Present <br /><span className='font-semibold text-green-600'>75%</span></div>
                        <div className='text-xl text-blue-600'>Absent <br /><span className='font-semibold text-red-600'>25%</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details