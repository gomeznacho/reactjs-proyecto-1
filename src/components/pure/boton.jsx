import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';



const BotonComponent = ({contacto}) => {

    const [estado, setEstado] = useState(contacto.conectado);
    function cambiarEstado(){
       estado? setEstado(false):setEstado(true)
    }    

    return (
        <div>
            <h3>
                Estado: { estado ? 'Contacto en linea': 'Contacto no disponible'}
            </h3>
            <div>
            <button onClick={cambiarEstado}>
                Cambiar estado
            </button>
            </div>
        </div>
    );
};


BotonComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default BotonComponent;
