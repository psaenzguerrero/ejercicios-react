import React, { useEffect, useState } from 'react'
import Card from '../componentes/Card';

const Ejer3 = () => {
  const [productos, setProductos] = useState([]);
  const [palabra, setPalabra] = useState("");
  let guardarPalabra = (palabra) => setPalabra(palabra.toLowerCase());
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(respuesta => respuesta.json())
    .then(productos => setProductos(productos.products.slice(0,10)))
  }, [10])


  return (
    <>
      <form action="" method="post" className='pl-20 text-blue-600'>
        <input onChange={(e) => guardarPalabra(e.target.value)} type="text" name="buscador" id="buscador" placeholder='Buscador' className='my-10 px-10 py-5  border-blue-600 rounded-4xl' />
      </form>
        <Card palabra={palabra} productos={productos}/>
    </>
  )
}

export default Ejer3