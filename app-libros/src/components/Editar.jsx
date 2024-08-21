import React from 'react'

export const Editar = ({libro, getLibros, setListadoState, setEditarState}) => {


    const guardarEdicion = (e, id) => {
        e.preventDefault()

        let target = e.target

        // Traemos el indice del objeto a actualizar
        const librosAlmacenados = getLibros()
        const indice = librosAlmacenados.findIndex(elemento => elemento.id === id)

        // Crear objeto actualizado
        let libro = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar el elemento con ese indice
        librosAlmacenados[indice] = libro

        // Guardar el nuevo objeto en el local storage
        localStorage.setItem("libros", JSON.stringify(librosAlmacenados))

        // Actualizar estados
        setListadoState(librosAlmacenados)
        setEditarState(0)
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>Editar libro</h3>

            <form onSubmit={ e => guardarEdicion(e, libro.id) }>
                <input type='text'
                       name='titulo'
                       className='titulo-editado'
                       defaultValue={libro.titulo}
                />
                <textarea type='text'
                       name='descripcion'
                       className='descripcion-editada'
                       defaultValue={libro.descripcion}
                />
                <button className='editar'>Actualizar</button>
            </form>
        </div>
    )
}
