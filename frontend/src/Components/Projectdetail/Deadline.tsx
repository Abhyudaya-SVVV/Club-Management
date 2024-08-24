import React from 'react'
import { SlCalender } from "react-icons/sl";

const Deadline = () => {
  return (
    <>
    <div className="w-[30%] h-[200px] m-5 shadow-lg rounded-[8px] overflow-y-auto">
                <h1 className='pt-4 pl-4 text-xl'>Deadline</h1>
                <div className='flex items-center justify-center text-xl gap-10 mt-5'>
                  <div>
                  <div className='flex gap-2 items-center'><SlCalender color='#A2C3FB'/>From date</div>
                  <h1 className='text-blue-500'>12 April 2024</h1>
                  </div>

                  <div>
                  <div className='flex gap-2 items-center'><SlCalender/>To date</div>
                  <h1>15 April 2024</h1>
                  </div>
                </div>
                </div>
    </>
  )
}

export default Deadline