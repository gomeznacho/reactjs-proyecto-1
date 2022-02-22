import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import BotonComponent from '../pure/boton'


const ContactoComponent = ({ contacto }) => {
    const defaultContacto = new Contacto('jimy', 'jonez', 'jimy@jonez.jon', false)
    return (
        <div>
            <h2>
                Nombre: { defaultContacto.nombre }
            </h2>
            <h3>
                Apellido: { defaultContacto.apellido }
            </h3>
            <h4>
                Email: { defaultContacto.email }
            </h4>
            <div>
            <BotonComponent contacto= {defaultContacto}></BotonComponent>
            </div>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    

};


export default ContactoComponent;
