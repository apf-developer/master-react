import React from 'react'

export const MiComponente = () => {

    let usuario = {
        nombre: 'Adiel',
        apellido1: 'Palominos',
        apellido2: 'Fuentealba'
    }

    return (
        <div className='mi-componente'>
            <h2>Mi primer componente</h2>
            <p>{ usuario.nombre } { usuario.apellido1 } { usuario.apellido2 }</p>

            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
                <li>Elemento 4</li>
                <li>Elemento 5</li>
            </ul>
        </div>

    )
}
