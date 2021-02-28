import React from 'react'
import Head from 'next/head'

import LoginButton from './loginButton'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>My awesome test project</title>
      </Head>
      <div class="flex flex-col h-screen">
        <header class="py-5 px-5 bg-blue-500 flex justify-between">
          <h1 class="text-2xl font-bold text-white">TweetyPie</h1>
          <LoginButton></LoginButton>
        </header>
        <main class="p-5 flex-1">
          {props.children}
        </main>
        <footer class="bg-blue-100 p-5 text-center">
          Copyright TweetyPie Ltd
        </footer>
      </div>
    </>
  )
}

export default Layout;