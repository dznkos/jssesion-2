//crear la estructura de la clase Persona   (id, nombre, apellido, edad, estado)
//mostrar sus datos en consola

class Persona{
  constructor(id, nombre, apellido, edad, estado){
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.estado = estado;
  }
  getNombreCompleto(){
      return this.nombre + " " + this.apellido;
  }
  getId(){
      return this.id;
  }
  getNombre(){
      return this.nombre;
  }
  getApellido(){
      return this.apellido;
  }
  getEdad(){
      return this.edad;
  }
  getEstado(){
      return this.estado;
  }
  setId(id){
      this.id = id;
  }
  setNombre(nombre){
      this.nombre = nombre;
  }
  setApellido(apellido){
      this.apellido = apellido;
  }
  setEdad(edad){
      this.edad = edad;
  }
  setEstado(estado){
      this.estado = estado;
  }
}