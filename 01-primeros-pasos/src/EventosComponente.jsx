import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al botón!! " + nombre)
    }

    const hasDadoDobleClick = (e) => {
        alert("Has dado doble click!!")
    }

    const hasEntrado = (e) => {
        console.log("Has entrado")
    }

    const hasSalido = (e) => {
        console.log("Has salido")
    }

    const estasDentro = e => {
        console.log("Estas dentro del input!")
    }

    const estasFuera = e => {
        console.log("Estas fuera del input!")
    }

    return (
        <div>
            <h2>Eventos en React</h2>

            {/** Evento click */}
            <button onClick={ e => hasDadoClick(e, "Adiel") }>Dame Click</button><br/>

            {/** Evento click */}
            <button onDoubleClick={ hasDadoDobleClick }>Dame Doble Click</button><br/>

            {/** Evento onMouseEnter onMouseLeave */}
            <div
                className='caja'
                onMouseEnter={ hasEntrado }
                onMouseLeave={ hasSalido }
            >Pasa por encima
            </div><br/>

            {/** Evento onFocus y onBlur */}
            <input
                type='text'
                onFocus={ estasDentro }
                onBlur={ estasFuera }
                placeholder='Introduce tu nombre...'
            ></input>
        </div>
    )
}
