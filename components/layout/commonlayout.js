import React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Aside from '../components/layout/aside'
import Aside2 from '../components/layout/aside2'

export default function commonlayout({children}) {
  return (
    <>
         <div className="container p-0 k_tbdr">
            <Header/>
            <main>
            <div className="row h-100 m-0"> 
                <Aside/>
                {children}
                <Aside2/>
            </div>
            </main>
            <Footer/>
        </div>
    </>
  )
}
