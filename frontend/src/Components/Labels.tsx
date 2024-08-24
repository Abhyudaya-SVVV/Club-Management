import React, { useState } from 'react'
import { FaTag } from "react-icons/fa";

const Labels = () => {
  const [checkedLabels, setCheckedLabels] = useState<number[]>([]);

  const label = [
    {
      id: 1,
      name: "Copywriting"
    },
    {
      id: 2,
      name: "Ui Design"
    }
  ]

  const handleCheckboxChange = (labelId:number) => {
    setCheckedLabels((prevCheckedLabels) => {
      if (prevCheckedLabels.includes(labelId)) {
        return prevCheckedLabels.filter((id) => id !== labelId);
      } else {
        return [...prevCheckedLabels, labelId];
      }
    });
  };

  return (
    <>
    <div className="w-[30%] h-[300px] m-5 shadow-lg rounded-lg overflow-y-auto">
      <h1 className='p-4 text-xl mb-2'>Labels</h1>
      {label.map((e) => (
        <div key={e.id} className="flex items-center justify-between mx-8 mb-4 pb-4 border-b border-gray-300">
          <div className='flex gap-2 items-center'>
            <FaTag size={22} className='opacity-80'/>
            <h2>{e.name}</h2>
          </div>
          <div className="w-5 h-5 rounded-full border-2 relative">
            <input
              type="checkbox"
              className="opacity-0 absolute inset-0 cursor-pointer"
              checked={checkedLabels.includes(e.id)}
              onChange={() => handleCheckboxChange(e.id)}
            />
            <div className={`w-full h-full rounded-full flex items-center justify-center ${checkedLabels.includes(e.id) ? 'bg-blue-500' : 'bg-transparent'}`}>
              {checkedLabels.includes(e.id) && <span className="text-white">&#10003;</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default Labels