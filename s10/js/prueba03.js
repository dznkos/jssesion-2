//esta estructura solo se puede usar una vez en ests script

var persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
  direccion: {
      calle: "Calle 1",
      numero: 123
  }
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona.direccion.calle);
console.log(persona.direccion.numero);