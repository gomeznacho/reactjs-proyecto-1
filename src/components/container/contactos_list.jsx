import React, {useState} from 'react';
import { Contacto } from '../models/contacto.class';
import ContactoComponent from '../pure/contacto';
import ContactformComponent from '../pure/forms/contactForm';
import Contactformik from '../pure/forms/contactFormik';

const ContactosListComponent = () => {

    const defaultContacto1 = new Contacto('james', 'juarez', 'james@juarez.com', false)
    const defaultContacto2 = new Contacto('jim', 'jon', 'jim@jon.com', false)
    const defaultContacto3 = new Contacto('jimy', 'jonez', 'jimy@jonez.jon', false)

    const [contactos, setContactos] = useState([defaultContacto1, defaultContacto2, defaultContacto3])

    function addContacto(contacto){
        console.log('añadiendo contacto')
        const tempConts = [...contactos]
        tempConts.push(contacto)
        setContactos(tempConts)
    }

    function removeContacto(contacto){
        console.log('borrando contacto')
        const index = contactos.indexOf(contacto)
        const tempConts = [...contactos]
        tempConts.splice(index, 1)
        setContactos(tempConts);
        
    }

    return (
        <div>
            <div>
                {contactos.map((contacto, index) =>{
                    return(
                        <ContactoComponent 
                        key={index}
                        contacto={contacto}
                        remove={removeContacto}>
                        </ContactoComponent>
                    )
                })}
            </div>
            {/* <div style={{paddingTop: '50px'}}>
                <ContactformComponent add={addContacto}></ContactformComponent>
            </div> */}
            <div style={{paddingTop: '50px'}}>
                <Contactformik add={addContacto}></Contactformik>
            </div>

        </div>

    );
}

export default ContactosListComponent;
