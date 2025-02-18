import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Ejer2 = () => {
  const {id}= useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(respuesta => respuesta.json())
      .then(productos => setProducto(productos))
  }, [])
  
  return (
    <section>          
      <div className='border-2 border-black text-center pb-10' key={producto.id}>
          <img src={producto.images} alt="" className='mx-auto h-[300px]'/>
          <h3 className='font-bold'>{producto.title}</h3>
          <p className='m-5'>{producto.description}</p>
          {/* <Link to={`Ejer2/${producto.id}`} className='boton'>Más detalles</Link> */}
      </div>
    </section>
  )
}

export default Ejer2