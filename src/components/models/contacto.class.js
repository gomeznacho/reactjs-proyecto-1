export class Contacto{
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;

    constructor(nombre, appelido, email, conectado){
        this.nombre = nombre;
        this.apellido = appelido;
        this.email = email;
        this.conectado = conectado;
    }
}