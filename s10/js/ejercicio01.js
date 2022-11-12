// crear clase Persona con constructor
function Empleado(id, nombre, nroseguro, salario, estado) {
  this.id = id;
  this.nombre = nombre;
  this.nroseguro = nroseguro;
  this.salario = salario;
  this.estado = estado;
}
// crear objeto persona
var empleado = new Empleado(76855343,"Roy",00217446,1000,"activo");
// mostrar objeto persona
console.log(empleado);
