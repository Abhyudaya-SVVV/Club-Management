import React from 'react'
import styles from "@/styles/Tasks.module.css"

const Tasks = () => {
    const tasks = [
        {
            name: "Frontend",
            date: '23 Nov 24',
            img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
            name: "Backend",
            date: '12 Dec 24',
            img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
            name: "College Jagat",
            date: '28 Apr 24',
            img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        }
    ]
    return (
        <>
            <div className={styles.maindiv}>
                <h1 className='p-4 text-xl '>Tasks</h1>
                {
                    tasks.map((e)=><div className={styles.taskdiv}>
                    <div className='flex items-center gap-3'>
                        <input type="checkbox" className={styles.checkbox} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h2 style={{ lineHeight: '10px' }}>{e.name}</h2>
                            <p><small className='text-zinc-600'>{e.date}</small></p>
                        </div>
                    </div>

                    <div className='flex items-center gap-1'>
                        <img src={e.img} alt="" className='w-8 h-8 rounded-full object-cover' />
                        <h2>+</h2>
                    </div>

                </div>)
                }
            </div>
        </>
    )
}

export default Tasks

