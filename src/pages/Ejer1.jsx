import React, { useEffect, useState } from 'react'
import Card from '../componentes/Card';

const Ejer1 = () => {
    const [productos, setProductos] = useState([]);
    const [palabra, setPalabra] = useState("");
    let guardarPalabra = (palabra) => setPalabra(palabra.toLowerCase());
    useEffect(() => {
      fetch("https://dummyjson.com/products")
      .then(respuesta => respuesta.json())
      .then(productos => setProductos(productos.products))
    }, [])
   
    
  return (
    <>
    <form action="" method="post">
        <input onChange={(e) => guardarPalabra(e.target.value)} type="text" name="buscador" id="buscador" placeholder='Buscador' />
    </form>
        <Card palabra={palabra} productos={productos}/>
    </>
  )
}

export default Ejer1