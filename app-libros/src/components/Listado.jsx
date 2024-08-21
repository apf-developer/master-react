import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Editar } from './Editar'

export const Listado = ({listadoState, setListadoState}) => {

    const [editar, setEditarState] = useState(0)

    useEffect(() => {
        getLibros()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getLibros = () => {
        let libros = JSON.parse(localStorage.getItem("libros"))

        setListadoState(libros)

        return libros
    }
    
    const eliminarLibro = id => {
        // Filtramos los libros que no seran eliminados
        let nuevoListado = listadoState.filter(elemento => elemento.id !== id)

        // Actualizamos estado del listado principal
        setListadoState(nuevoListado)

        // Sobrescribimos el localStorage
        localStorage.setItem("libros", JSON.stringify(nuevoListado))
    }

    return (
        <>
            {/** Aqui van los libros */}
            { 
                listadoState !== null && listadoState.length !== 0
                ? (
                    listadoState.map(libro => {
                        return (
                            <article className="peli-item" key={ libro.id }>
                                <h3 className="title">{ libro.titulo }</h3>
                                <p className="description">{ libro.descripcion }</p>

                                <button className="edit" onClick={() => setEditarState(libro.id)}>Editar</button>
                                <button className="delete" onClick={ () => eliminarLibro(libro.id) }>Borrar</button>

                                {/** Formulario para editar */}
                                {
                                    editar === libro.id && (
                                        <Editar libro={ libro }
                                                getLibros={ getLibros }
                                                setListadoState={ setListadoState }
                                                setEditarState={ setEditarState }
                                        />
                                    )
                                }
                            </article>
                        )
                    })
                ) : (
                    <span>No existen libros....</span>
                )
            }
        </>
    )
}
