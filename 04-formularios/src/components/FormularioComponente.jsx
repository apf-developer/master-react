import React, { useState } from 'react'

export const FormularioComponente = () => {

    const [usuario, setUsuario] = useState({})

    const getFormulario = e => {
        e.preventDefault()

        let datos = e.target
        let nuevoUsuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            sexo: datos.sexo.value
        }

        setUsuario(nuevoUsuario)

        console.log(usuario)
    }

    const cambiarDatos = e => {
        let {name, value} = e.target

        setUsuario(estado_previo => {
            return {
                ...estado_previo,
                [name]: value,
            }
        })
    }

    return (
        <div>
            <h3>Formularios con React</h3>

            <form onSubmit={ getFormulario }>
                <input type='text'
                       name='nombre'
                       placeholder='Nombre'
                       onChange={ cambiarDatos }
                />
                <input type='text'
                       name='apellido'
                       placeholder='Apellido'
                       onChange={ cambiarDatos }
                />
                <select name='sexo' onChange={ cambiarDatos }>
                    <option value='hombre'>Hombre</option>
                    <option value='mujer'>Mujer</option>
                </select>
                <button type='submit'>Enviar</button>
            </form><br />

            <div className='info-usuario'>
                { JSON.stringify(usuario) }
            </div>
        </div>
    )
}
