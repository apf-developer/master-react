import React from 'react'
import { useState } from 'react'

export const EstadoComponente = () => {

    const [ nombre, setNombre ] = useState("Adiel")

    const cambiarNombre = (e, nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    const actualizaNombre = (e, nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    return (
        <div>
            <h3>Componente mi primer estado</h3>

            <button onClick={ e => cambiarNombre(e, "Isaí") }>Cambiar nombre</button>
            <p>Nombre: { nombre }</p>

            <input onChange={ e => actualizaNombre(e, e.target.value) } type='text' placeholder='Escribe el nuevo nombre'></input>
        </div>
    )
}
