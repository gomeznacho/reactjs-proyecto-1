import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactformComponent = ( {add} ) => {

    const nombreRef = useRef('')
    const apellRef = useRef('')
    const emailRef = useRef('')

    function addContacto(e){
        e.preventDefault()
        const newCont= new Contacto(
            nombreRef.current.value,
            apellRef.current.value,
            emailRef.current.value,
            false
        );
        add(newCont);
    }

    return (
        <div>
            <form onSubmit={addContacto}>
                <div>
                    <input ref={nombreRef} type='text' required placeholder='nombre' />
                    <input ref={apellRef} type='text' required placeholder='apellidos' />
                    <input ref={emailRef} type='text' required placeholder='email' />
                </div>
                <button type='submit'>AÑADIR</button>
            </form>
        </div>
    );
};


ContactformComponent.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactformComponent;
