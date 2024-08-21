import React from 'react'
import { useEffect } from 'react'

export const MensajeComponente = () => {

    useEffect(() => {
        console.log("El componente esta montado!")
    
        return () => {
            console.log("El componente esta desmontado!")
        }
    }, [])
    

    return (
        <div>
            <hr />
            <span>Hemos superado el 20 en el contador</span>
        </div>
    )
}
