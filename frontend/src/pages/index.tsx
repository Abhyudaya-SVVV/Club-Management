import React from 'react'
import Head from 'next/head'
import Addtask from '@/Components/Addtask'
import Asigntask from '@/Components/Asigntask'
import Tasks from '@/Components/Tasks'
import Labels from '@/Components/Labels'
import Projectcard from '@/Components/Projectcard'

const index = () => {
  return (
    <>
      <Head>
          <title>Club Management System</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="Your website description" />
          <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main style={{display:'flex',flexWrap:'wrap',alignContent:'center',justifyContent:"flex-start"}}>
        <Addtask/>
        <Asigntask/>
        <Tasks/>
        <Labels/>
        <Projectcard/>
      </main>
    </>
  )
}

export default index