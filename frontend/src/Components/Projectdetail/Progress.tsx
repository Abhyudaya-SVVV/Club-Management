import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
    const percentage = 75;
  return (
    <>
    <div className="w-[30%] h-[auto] m-5 shadow-lg rounded-[8px] overflow-y-auto">
    <h1 className='pt-4 pl-4 text-xl'>Weekly Progress</h1>
    <h2 className='pt-1 pl-4 text-l text-zinc-600'>Start from April 1-7, 2024</h2>
    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
            trailColor: '#d6d6d6',
            pathColor:"#46BD84",
            textColor:"#46BD84",
    })} className='w-[50%] h-[50%] mt-8'/>
    
    </div>
    </>
  )
}

export default Progress