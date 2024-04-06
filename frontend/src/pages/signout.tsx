import { Link } from 'lucide-react'
import React from 'react'

const signout = () => {
  return (
    <>
    <div className="flex justify-end w-full h-full mt-5 pr-10">
      <div className="w-[30%] shadow-lg py-8 px-6">
        <p className='text-sm font-semibold'>Welcome to <span className='text-blue-500'>Abhyudaya Club Management site</span></p>
        <h1 className='text-[3rem] pl-2 font-[500]'>Sign up</h1>

        <div className='mt-5'>
          <p className='text-sm'>Enter your username or email address</p>
          <input type="text" placeholder='Username or email address'  className='w-full outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2'/>
        </div>

        <div className='mt-5 flex justify-between'>
          <div>
          <p className='text-sm'>User name</p>
          <input type="text" placeholder='User name'  className='outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2 w-[95%]'/>
          </div>
          <div>
          <p className='text-sm'>Contact Number</p>
          <input type="text" placeholder='Contact Number'  className='outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2 w-[100%]'/>
          </div>
        </div>

        <div className='mt-5'>
          <p className='text-m'>Enter your Password</p>
          <input type="password" placeholder='Password'  className='w-full outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2'/>
          <a href="#" className='text-xs text-blue-500 flex justify-end'>Forgot Password</a>
        </div>
        <div className='flex justify-evenly my-6'>
          <button className='text-m bg-blue-500 outline-none py-3 px-12 rounded-[8px] text-white'>Sign up</button>
          <button className='text-m bg-blue-500 outline-none py-3 px-12 rounded-[8px] text-white'>Sign in</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default signout