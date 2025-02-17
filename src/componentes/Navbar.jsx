import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
        <nav>
            <ul>
                <Link to="/"><li>Ejer1</li></Link>
                <Link to="/Ejer2"><li>Ejer2</li></Link>
                <Link to="/Ejer3"><li>Ejer3</li></Link>
            </ul>
        </nav>

    </>
  )
}

export default Navbar