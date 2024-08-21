import React from 'react'

export const SegundoComponente = () => {

    const libros = ['Libro 1', 'Libro 2'];


    return (
        <div className='segundo-componente'>
            <h2>Segundo componente</h2>

            { libros.length > 0
                ? (
                    <ul>
                        {
                            libros.map((libro, indice) => {
                                return <li key={indice}>{ libro }</li>
                            })
                        }
                    </ul>
                ) : <p>No hay libros</p>
            }
        </div>
    )
}
