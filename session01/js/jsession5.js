// Ejercicios:
// ejercicio01
// Calcular el sueldo de empleado dependiendo de su categoria: A:5000, B:4500, C:3000 
// Si tiene mas de 10 años de labor se le aumenta un 10% de bonificacion


function calcularSueldo() {

  var sueldo = 0;
  var cat = document.getElementById("categoria").value
  var years = parseInt(document.getElementById("years").value)

  switch (cat) {
    case 'A':
      if (years > 10) {
        sueldo = 5000 + (5000 * 0.10)
      }else {
        sueldo = 5000
      }      
      break;
    case 'B':
      if (years > 10) {
        sueldo = 4500 + (4500 * 0.10)
      }else {
        sueldo = 4500
      }
      break;
    case 'C':
      if (years > 10) {
        sueldo = 3000 + (3000 * 0.10)
      }else {
        sueldo = 3000
      }
      break;
  
    default:
      break;
  }
  console.log(sueldo);
  document.getElementById("sueldo").innerText = `Tu sueldo es: ${sueldo}`


}


// ejercicio02
// Ingreaar 5 notas de un alumno y calcular el promedio, tomando en cuenta el tipo de alumno:
//     1. Si es regular el promedio sera entre las 5 notas.
//     2. Si es espcial se tomara en cuenta las 4 notas mayores para el promedio.