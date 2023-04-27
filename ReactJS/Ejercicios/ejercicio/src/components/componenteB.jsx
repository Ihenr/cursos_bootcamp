import React, {useState} from 'react';
import PropTypes from 'prop-types';

// import { Contacto } from '../models/contacto.class';


const ComponenteB = (estado) => {

    const [conectado, setContacto] = useState(estado);
    return (
        <div>
            <h3>
                {conectado === false ? 'Contacto no disponible' : 'Contacto en linea'}
            </h3>
            <button onClick={() => setContacto(!conectado)}>
                {conectado === false ? 'Conectado' : 'Desconectado'}
            </button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool,
};


export default ComponenteB;
