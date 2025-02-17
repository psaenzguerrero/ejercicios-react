import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import { Outlet } from 'react-router-dom'

const Plantilla = () => {
  return (
    <>
        <Header/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
    </>
  )
}

export default Plantilla