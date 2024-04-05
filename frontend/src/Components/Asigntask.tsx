import React from 'react'
import styles from "@/styles/Asigntask.module.css"
import { FaUserAlt } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Asigntask = () => {
    const membername = [
        {
            name: "Nawadha",
            img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: "2 task in progress"
        },
        {
            name: "Pragya",
            img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: "1 task in progress"
        },
    ]
    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.asigntaskto}>
                    <FaUserAlt />
                    <h1>Assign task to</h1>
                    <FaCaretDown />
                </div>
                <div className={styles.membername}>
                    <div className={styles.search}>
                        <div><FiSearch /></div>
                        <input type="text" placeholder='search ' />
                    </div>
                    {
                        membername.map((member)=><div className={styles.member}>
                        <div className='flex items-center gap-3'>
                            <img src={member.img} alt="" className='w-10 h-10 rounded-full object-cover' />
                            <h1>{member.name}</h1>
                        </div>
                        <small><p className='text-zinc-800'>{member.status}</p></small>
                    </div>)
                    }

                </div>
            </div>
        </>
    )
}

export default Asigntask