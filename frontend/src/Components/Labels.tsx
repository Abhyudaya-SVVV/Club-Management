import React from 'react'
import styles from "@/styles/Labels.module.css"
import { FaTag } from "react-icons/fa6";

const Labels = () => {
    const label = [
        {
            name:"Copywriting"
        },
        {
            name:"Ui Design"
        }
    ]
  return (
    <>
    <div className={styles.maindiv}>
    <h1 className='p-4 text-xl'>Labels</h1>
    {label.map((e)=><div className={styles.label}>
        <div className='flex gap-2 items-center'>
            <FaTag size={22}/>
            <h2>{e.name}</h2>
        </div>
        <input type="checkbox" className={styles.checkbox} name="" id="" />
    </div>)}
    </div>
    </>
  )
}

export default Labels