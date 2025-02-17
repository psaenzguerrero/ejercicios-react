import React from 'react'

const Card = ({productos, palabra}) => {
  return (
    <>
        <div className='grid'>
            {
                productos.map((producto) => (
                    producto.title.toLowerCase().includes(palabra) ? 
                    <div key={producto.id}>
                        <h3>{producto.title}</h3>
                        <p>{producto.description}</p>
                        <img src={producto.images[0]} alt="" />
                        <p>{producto.price}</p>
                    </div>
                    : null
                ))
            }
        </div>
        

    </>
  )
}

export default Card