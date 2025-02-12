import React from 'react'

export const Opciones = ({valor}) => {
  return (
    <>
        <select name="" id="" onChange={(e) => valor(e.target.value)}>
            <option value="1">hola1</option>
            <option value="2">hola2</option>
            <option value="3">hola3</option>
            <option value="4">hola4</option>
            <option value="5">hola5</option>
        </select>
    </>
  )
}
