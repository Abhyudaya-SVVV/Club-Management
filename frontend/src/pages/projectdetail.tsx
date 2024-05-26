import Deadline from '@/Components/Projectdetail/Deadline'
import Details from '@/Components/Projectdetail/Details'
import Feedback from '@/Components/Projectdetail/Feedback'
import FileAttachment from '@/Components/Projectdetail/FileAttachment'
import Member from '@/Components/Projectdetail/Member'
import Progress from '@/Components/Projectdetail/Progress'
import Projectdetailcard from '@/Components/Projectdetail/Projectdetailcard'
import Teamlead from '@/Components/Projectdetail/Teamlead'
import React from 'react'

const projectdetail = () => {
  return (
    <>
    <div className='flex flex-wrap'>
        <Projectdetailcard/>
    <Member/>
    <Feedback/>
    <Deadline/>
    <Teamlead/>
    <Details/>
    <FileAttachment/>
    <Progress/>
    </div>
    </>
  )
}

export default projectdetail