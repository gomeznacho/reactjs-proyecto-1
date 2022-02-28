import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';



const BotonComponent = ({contacto, remove}) => {

    const [estado, setEstado] = useState(contacto.conectado);

    function cambiarEstado(){
       estado? setEstado(false):setEstado(true)
    }    

  
    return (
        <div>
                Estado: { estado ? 'Contacto en linea': 'Contacto no disponible'}
            <div>
            <button onClick={cambiarEstado}>
                Cambiar estado
            </button>
            <button onClick={() => remove(contacto)}>
                Eliminar contacto
            </button>
            </div>
        </div>
    );
};


BotonComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    remove:PropTypes.func.isRequired
};


export default BotonComponent;
