import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({productos, palabra}) => {
  return (
    <>
        <div className='grid grid-cols-3 gap-3 max-w-[1200px] mx-auto'>
            {
                productos?.map((producto) => (
                    producto.title.toLowerCase().includes(palabra) ? 
                    <div className='border-2 border-black text-center pb-10' key={producto.id}>
                        <img src={producto.images[0]} alt="" className='mx-auto h-[500px]'/>
                        <h3 className='font-bold'>{producto.title}</h3>
                        <p className='m-5'>{producto.description}</p>
                        <Link to={`${producto.id}`} className='boton'>Más detalles</Link>
                    </div>
                    : null
                ))
            }
        </div>
    </>
  )
}

export default Card