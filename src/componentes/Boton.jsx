import React from 'react'

const Boton = ({variable}) => {
    
  return (
    <> 
        <button onClick={()=> variable(true)}>Sumar</button>
        <button onClick={()=> variable(false)}>Restar</button>
    </>
  )
}

export default Boton