import React from 'react'
import styles from "@/styles/Project.module.css"
import { IoMdFlag } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";

const Projectcard = () => {
    return (
        <>
            <div className={styles.maindiv}>
                <h1 className='pt-4 pl-4 text-xl'>Club Management</h1>
                <div className='p-5'>
                    <p><small className='text-zinc-600 flex items-center gap-1'><IoMdFlag style={{ opacity: '0.6' }} /> Deadline april 5</small></p>
                    <p><small className='text-zinc-600'>Track club member website for managing task and improve Productivity.</small></p>

                    <div className={`${styles.progress} mt-7`}>
                        <div className='flex justify-between mb-2'>
                            <p>Project Progress</p>
                            <p>32%</p>
                        </div>
                        <ProgressBar completed={32} bgColor='green' height='10px' customLabel='⠀' />
                    </div>
                    <div className={styles.imgdiv}>
                        <div style={{border:'1px solid grey',borderRadius:'100%',transform:"translateX(50%)",zIndex:'2'}}>
                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-10 h-10 rounded-full object-cover'/>
                        </div>

                        <div style={{border:'1px solid grey',borderRadius:'100%',transform:"translateX(25%)"}}>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-10 h-10 rounded-full object-cover' />
                        </div>
                        <div style={{border:'1px solid grey',borderRadius:'100%'}}>
                        <img src="https://images.pexels.com/photos/3760858/pexels-photo-3760858.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-10 h-10 rounded-full object-cover' />
                        </div>
                        <p><small className='text-zinc-600 pl-3'>+7 people</small></p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projectcard