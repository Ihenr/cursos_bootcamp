import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import ComponenteB from './componenteB'; 


const ComponenteA = ({contacto}) => {
    return (
        <div>
            <h1>Hola</h1>
            <h2>
                Nombre: {contacto.nombre}
            </h2>
            <h3>
                Apellido: {contacto.apellido}
            </h3>
            <h3>
                Email: {contacto.email}
            </h3>
            <ComponenteB estado={true}/>
        </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteA;
