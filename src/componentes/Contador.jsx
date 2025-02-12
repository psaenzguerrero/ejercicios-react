import React, { useState } from 'react'

const Contador = () => {


    const [palabra, setPalabra] = useState("")
    let [contador, setContador] = useState(10)
    let [contador2, setContador2] = useState(0)
    const [tema, setTema] = useState();
    
    
    let cambiar=(e)=>{
        setPalabra(e.target.value);
        setContador2(e.target.value.length);
    }

  return (
    <>
        <p>Te quedan: {contador-contador2} caracteres.</p>
        <input onChange={cambiar} type="text" />
    </>
  )
}

export default Contador