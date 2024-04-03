import React from 'react'
import Head from 'next/head'
import Addtask from '@/Components/Addtask'
import Asigntask from '@/Components/Asigntask'

const index = () => {
  return (
    <>
      <Head>
          <title>Club Management System</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="Your website description" />
          <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main style={{display:'flex'}}>
        <Addtask/>
        <Asigntask/>
      </main>
    </>
  )
}

export default index