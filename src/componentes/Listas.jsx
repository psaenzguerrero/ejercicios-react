import React from 'react'

const Listas = ({agregar, cambio}) => {
    let palabra="";   
    let guardar=(e)=>{
        palabra=e.target.value;
        cambio(false);
    }
    let agregarPalabra = ()=>{
        agregar(palabra);
        cambio(true);
    }

  return (
    <>
            <input onChange={guardar} type="text" />
            <button onClick={agregarPalabra}>Agregar</button>
    </>
  )
}

export default Listas