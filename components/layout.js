import React from 'react'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>My awesome test project</title>
      </Head>
      <header>
        <h1>Cool Company 😎</h1>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        Copyright 2021 Cool Company Ltd.
      </footer>
    </>
  )
}

export default Layout;