import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <>   
        <img src="../assets/react.svg" alt="" />
        <nav className='flex'>           
            <Link to="/"><li className='list-none mx-10 text-2xl font-bold'>Ejer1</li></Link>
            <Link to="/Ejer2"><li className='list-none mx-10 text-2xl font-bold'>Ejer2</li></Link>
            <Link to="/Ejer3"><li className='list-none mx-10 text-2xl font-bold'>Ejer3</li></Link>
        </nav>
    </>
  )
}

export default Navbar