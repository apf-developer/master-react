import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
import { Parallax } from 'react-scroll-parallax'

export const ListadoTrabajos = ({ limite = 5 }) => {
    return (
        <section className="row">
            {
                trabajos.slice(0, limite).map((trabajo) => {
                    return (
                        <div key={trabajo.id} className="col col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                            <Parallax translateY={[20, -20]}>
                                <div className="card rounded-0 shadow">
                                    <Link to={'/proyecto/' + trabajo.id}>
                                        <img className="card-img-top img-work rounded-0" alt="img-trabajo" src={'/img/' + trabajo.id + '.jpg'}></img>
                                    </Link>
                                    <div className="card-body">
                                        <p className="card-text text-muted">{trabajo.categorias}</p>
                                        <h5 className="card-title"><Link to={'/proyecto/' + trabajo.id}>{trabajo.nombre}</Link></h5>
                                        <p className="lead"><small>{trabajo.tecnologias}</small></p>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    )
                })
            }
        </section>
    )
}
