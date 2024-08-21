import React from 'react'
import { useState } from 'react'
import { guardarEnLocalStorage } from '../helpers/GuardarEnStorage'

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir libro"

    const [libros, setLibros] = useState({
        titulo: '',
        descripcion: ''
    })

    const {titulo, descripcion} = libros

    const getFormulario = e => {
        e.preventDefault()

        let target = e.target

        let nuevoLibro = {
            id: new Date().getTime(),
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Guardamos nuevo libro en el estado
        setLibros(nuevoLibro)

        // Actualizamos el el local storage
        guardarEnLocalStorage("libros", nuevoLibro)

        // Actualiza listado del listado principal
        setListadoState(elementos => {
            return [...elementos, nuevoLibro]
        })
    }

    return (
        <div className="add">
            <h3 className="title">{ tituloComponente }</h3>

            <span className='mensaje-crear'>{ (titulo && descripcion) && "Has creado el libro: " + titulo }</span>

            <form onSubmit={ getFormulario }>
                <input type="text"
                       id="titulo"
                       placeholder="Titulo"
                       name='titulo'
                       required="required"/>

                <textarea id="descripcion"
                          placeholder="Descripción"
                          name='descripcion'
                          required="required"></textarea>

                <input type="submit"
                       id="save"
                       value="Guardar"/>
            </form>
        </div>
    )
}
