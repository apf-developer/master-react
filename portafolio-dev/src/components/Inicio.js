import React from 'react'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
    return (
        <div className="container">
            {/** Algunos proyectos */}
            <div className="section-title mt-5">
                <span>Algunos de mis proyectos</span>
                <h1>Algunos de mis proyectos</h1>
                <p>Estos son algunos de mis trabajos de desarrollo web.</p>
            </div>

            <section className="mt-4">
                <ListadoTrabajos limite={3} />
            </section>
        </div>
    )
}
