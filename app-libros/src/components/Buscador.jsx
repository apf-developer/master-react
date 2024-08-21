import React from 'react'
import { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [busqueda, setBusqueda] = useState("")
    const [noEncontrado, setNoEncontrado] = useState(false)

    const buscarLibro = e => {
        // Actualiza estado
        setBusqueda(e.target.value)

        // Filtrar para buscar coincidencias
        let librosEncontrados = listadoState.filter(libro => {
            return libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
        })

        if (busqueda.length <= 1 || librosEncontrados.length <= 0) {
            librosEncontrados = JSON.parse(localStorage.getItem("libros"))

            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }

        // Actualiza estado del listado principal
        setListadoState(librosEncontrados)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>

            {
                (noEncontrado && busqueda.length > 1) === true && (
                    <span className='no-encontrado'>No se han encontrado coincidencias...</span>
                )
            }

            <form>
                <input type="text"
                       id="search_field"
                       name='busqueda'
                       placeholder='Ingrese el nombre del libro...'
                       onChange={ buscarLibro }
                       />

                <button id="search">Buscar</button>
            </form>
        </div>
    )
}
