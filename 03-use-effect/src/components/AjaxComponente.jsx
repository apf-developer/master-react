import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


export const AjaxComponente = () => {
    
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores]   = useState("");

    /**
     * Tres formas de consumir una API REST con AJAX
     */
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
        ])
    }

    const getUsuariosAjaxPromesas = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultadoFinal => {
                setUsuarios(resultadoFinal.data)
            },
            error => {
                console.log(error)
            }
        )
    }

    const getUsuariosAjaxAW = () => {
        setTimeout(async() => { // Usarmos setTimeOut para visualizar el efecto de carga
            try {                
                const peticion = await fetch("https://reqres.in/api/users?page=1")
                const {data} = await peticion.json();
        
                setUsuarios(data)
                setCargando(false)
            } catch (error) {
                setErrores('Error: ' + error.message)
            }
        }, 2000)
    }

    useEffect(() => {
        // getUsuariosEstaticos()
        // getUsuariosAjaxPromesas()
        getUsuariosAjaxAW()
    }, [])

    if (errores !== "") {
        return (
            <div className='errores'>
                { errores }
            </div>
        )
    } else if (cargando === true) {        
        // Cargando el contenido
        return (
            <div className='cargando'>
                Cargando información...
            </div>
        )
    } else if (cargando === false && errores === "") {
        // Cuando todo ha ido bien
        return (
            <div>                
                <h5>Listado de usuarios vía AJAX</h5>
    
                <ul className='listado-usuarios'>
                    {
                        usuarios.map(usuario => {
                            return (
                                <li key={ usuario.id }>
                                    <img className='avatar' type='image' alt='' src={usuario.avatar} />
                                    { usuario.first_name } { usuario.last_name }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
        
}
