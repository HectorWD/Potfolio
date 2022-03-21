import Head from 'next/head'
import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../section/Footer'

const Main = ({children}) => {
  return (
    <>
    <main>
        <Head>
            <meta
            name='viewport' content='initial-scale=1'
            />
            <title>
                Hector Wong - Portfolio
            </title>
        </Head>
        <NavBar/>
        <div className=''>
            {children}
        </div>
    </main>
    <footer className='sm:mt-64'>
       <Footer/> 
    </footer>
    </>
  
  )
}

export default Main