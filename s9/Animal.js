

export class Animal{
    //atributo miembro de clase global
    nombre;
    constructor(nombre){
        this.nombre = nombre;
    }
    speak(){
        console.log(this.nombre + ' Hace ruido.');
    }
}