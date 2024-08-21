import React from 'react'
import { useState, useEffect } from 'react'
import { MensajeComponente } from './MensajeComponente'

export const PruebasComponente = () => {

    const [usuario, setUsuario] = useState("")

    const modUsuario = e => {
        setUsuario(e.target.value)
    }

    useEffect(() => {
        console.log("Se hicieron cambios en el nombre de usuario!!")
    }, [usuario])
    
    useEffect(() => {
      console.log("Se ha cargado el componente!!")
    }, [])

    return (
        <div>
            <h3>Hook useEffect</h3>

            <strong className='label'>{ usuario }</strong>

            <form>
                <input type='text'
                    onChange={ modUsuario }
                    placeholder='Cambia el nombre'
                ></input>
            </form>

            {
                usuario === "Adiel" && <MensajeComponente />
            }
        </div>
    )
}
