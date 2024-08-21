import React from 'react'
import PropTypes from 'prop-types';


export const TercerComponente = ({nombre, ficha_medica}) => {

    return (
        <div>
            <h2>Comunicación entre componentes</h2>

            <ul>
                <li>{ nombre }</li>
                <li>{ ficha_medica.altura }</li>
                <li>{ ficha_medica.estado }</li>
                <li>{ ficha_medica.alergias }</li>
            </ul>
        </div>
    )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    ficha_medica: PropTypes.object.isRequired
}

TercerComponente.defaultProps = {
    nombre: "Adiel"
}