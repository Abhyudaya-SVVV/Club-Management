import React from 'react'
import Head from 'next/head'
import Addtask from '@/Components/Addtask'

const index = () => {
  return (
    <>
      <Head>
          <title>Club Management System</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="Your website description" />
          <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main>
        <Addtask/>
      </main>
    </>
  )
}

export default index