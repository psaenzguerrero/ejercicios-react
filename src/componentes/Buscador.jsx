import React from 'react'

export const Buscador = ({guardar}) => {
  return (
    <>
        <input type="search" onChange={(e) => guardar(e.target.value)} />
    </>
  )
}
