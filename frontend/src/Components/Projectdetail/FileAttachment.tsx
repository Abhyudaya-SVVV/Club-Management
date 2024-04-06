import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";

const FileAttachment = () => {
    return (
        <>
            <div className="w-[30%] h-[300px] m-5 shadow-lg rounded-[8px] overflow-y-auto">
                <h1 className='pt-4 pl-4 text-xl'>File Attachment</h1>
                <div className='flex items-center justify-between px-8 pt-5'>
                    <FaFilePdf className='opacity-80' size={35}/>
                    <p className='text-xs font-semibold'>Project SRS.pdf</p>
                    <p className='text-xs font-light'>4.5MB</p>
                    <button className='text-xs text-zinc-600'>Cancel</button>
                </div>

                <div className='flex items-center justify-between px-8 pt-5'>
                    <FaFilePdf className='opacity-80' size={35}/>
                    <p className='text-xs font-semibold'>Project SRS.pdf</p>
                    <p className='text-xs font-light'>4.5MB</p>
                    <button className='text-xs text-violet-500'>Download</button>
                </div>

                <button className='flex items-center gap-1 font text-xs shadow-lg px-4 py-2 rounded-[10px] m-auto mt-4' ><MdOutlineFileUpload/> Click here to Upload</button>
            </div>
        </>
    )
}

export default FileAttachment