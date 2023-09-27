//1 .import area
import React from 'react'
import Header from './header'
import Footer from './footer'
import Aside from './aside'
import Aside2 from './aside2'

//2. defination area
function commonlayout({children}) {
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
//3 export area

export default commonlayout;