import React from 'react'

const Member = () => {
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
            <div className="w-[30%] h-[300px] m-5 shadow-lg rounded-[8px] overflow-y-auto">
                {membername.map((member) => (
                    <div className="flex items-center justify-between px-8 py-4 hover:bg-blue-100 hover:border-l-2 hover:border-blue-400">
                        <div className='flex items-center gap-3'>
                            <img src={member.img} alt="" className='w-10 h-10 rounded-full object-cover' />
                            <h1>{member.name}</h1>
                        </div>
                        <small><p className='text-zinc-800'>{member.status}</p></small>
                    </div>
                ))}
            </div></>
    )
}

export default Member