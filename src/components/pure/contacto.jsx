import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import BotonComponent from '../pure/boton'

import  Dropdown  from 'rsuite/Dropdown';


const ContactoComponent = ({ contacto, remove }) => {

   function removeContacto(c){
       remove(c);
   }

    return (
        <div>
            <Dropdown title={contacto.nombre}>
                <Dropdown.Item>Nombre: { contacto.nombre }</Dropdown.Item>
                <Dropdown.Item >Apellido: { contacto.apellido }</Dropdown.Item>
                <Dropdown.Item >Email: { contacto.email }</Dropdown.Item>
                <Dropdown.Item >Estado: {contacto.estado ? 'Contacto en linea': 'Contacto no disponible'}</Dropdown.Item>
                <Dropdown.Item >
                    <BotonComponent contacto = {contacto} remove={removeContacto}></BotonComponent>
                </Dropdown.Item>
            </Dropdown>
            
            {/* <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Email: { contacto.email }
            </h4> */}
            {/* <div>
            <BotonComponent contacto = {contacto} remove={removeContacto}></BotonComponent>
            </div> */}
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    remove: PropTypes.func.isRequired
};


export default ContactoComponent;
