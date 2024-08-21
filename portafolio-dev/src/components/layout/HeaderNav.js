import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'

export const HeaderNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><i className="bi bi-code-slash"></i></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                                    to="/inicio"
                                >Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                                    to="/portafolio"
                                >Portafolio</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                                    to="/servicios"
                                >Servicios</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                                    to="/curriculum"
                                >Curriculum</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                                    to="/contacto"
                                >Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/** Presentación */}
            <div className="welcome" id="fondo">
                <div className="container text-welcome">
                    <Parallax translateY={[-50, 110]}>
                        <h1>Nombre y apellidos</h1>
                        <h2>
                            Soy un <strong>desarrollador web</strong> apasionado de ****.
                            <Link className="btn btn-primary" to="/contacto">Contáctame</Link>
                        </h2>
                        <div className="social-links">
                            <Link to="" className="gmail"><i className="bi bi-envelope-at-fill"></i></Link>
                            <Link to="" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                        </div>
                    </Parallax>
                </div>
            </div>
        </>
    )
}
