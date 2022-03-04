import React, { useRef } from 'react';
import { Contacto } from '../../models/contacto.class.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contactformik = ({add}) => {

    let contact = new Contacto()

    const initialValues = {
        nombre: '',
        apellido: '',
        email: '',
        conectado: false
    }

    const contacSchema = Yup.object().shape(
        {
            nombre: Yup.string().required('falta el nombre'),
            apellido: Yup.string().required('faltan los apellidos'),
            email: Yup.string().required('se requiere el email'),
            conectado: Yup.boolean()
        }
    )
    function addContacto(values){
        const newCont= new Contacto(
            values.nombre,
            values.apellido,
            values.email,
            false
        );
        console.log(newCont)
        add(newCont);
    }

    return (
        <div>
            <h4>FORMIK:</h4>    
            <Formik
                initialValues={initialValues}
                validationSchema={ contacSchema }
                onSubmit={addContacto}
                >
                {({
                    values, touched, errors, isSubmitting, handleChange, handleBlur
                }) => (
                    <Form>
                    <label htmlFor="nombre">Nombre</label>
                        <Field  id="nombre" type="text" name="nombre" placeholder="introduce el nombre" />
                        {
                            errors.nombre && touched.nombre && 
                            (
                                <ErrorMessage name="nombre" component='div'></ErrorMessage>
                            )
                        }

                    <label htmlFor="apellido">Apellido</label>
                    <Field id="apellido" type="text" name="apellido" placeholder="introduce el apellido"  />
                    {
                        errors.apellido && touched.apellido && 
                        (
                            <ErrorMessage name="apellido" component='div'></ErrorMessage>
                        )
                    }
                    <Field id="email" type="email" name="email" placeholder="example@email.com"  />
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Añadir</button>
                            {isSubmitting ? (<p>registrando</p>): null}

                    </Form>
                )}

            </Formik>    
        </div>
    );
}

export default Contactformik;
