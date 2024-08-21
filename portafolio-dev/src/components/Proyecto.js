import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Proyecto = () => {

    const {id} = useParams()
    const [proyecto, setProyecto] = useState({})

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === id)
        setProyecto(proyecto[0])
        // eslint-disable-next-line
    }, [])
    

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img className='img-fluid' alt='proyecto' src={'/img/'+proyecto.id+'.jpg'} />
            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={'https://'+proyecto.url} rel="noreferrer noopener" target='_blank'>Ir al proyecto</a>
        </div>
    )
}
