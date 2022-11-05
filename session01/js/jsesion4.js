// Ejercicios:

// Ejercicio01.
// Ingresar en un prompt 5 nombres separados por comas y en otro prompt 5 notas (0-20).
// Mostrar el siguiente reporte:
//     a. cada nombre con su nota
//     b. el promedio de notas
//     c. la nota mayor
//     d. la nota menor.

function eje1 () {

  var nombres = prompt('Nombres alumnos:');
  var notas = prompt('Notas de alumnos:');


  const arraynom = nombre.split(',') 
  const arraynot = notas.split(',') 

    var snotas = 0
    var mayor = 0

  for (let index = 0; index < nombres.length; index++) {
    const element = arraynom[index] + arraynot[index];
    console.log(element)
    snotas += arraynot[index]
    if (parseInt(arraynot[index]) > mayor) {
      mayor = parseInt(arraynot[index]);
    }else if (parseInt(arraynot[index]) > menor) {
      menor = parseInt(arraynot[index])
    }

  }
  console.log('Promedio :', snotas/arraynot.length );
  console.log('Mayor:', mayor)
  console.log('Menor:', menor)

}


// Ejercicio02.
// Genera una fecha de navidad y averigua cuantos dias faltan para que llegue esa fecha este año.

function eje2 () {
let fechaActual = new Date();
let navidad = new Date(fechaActual.getFullYear(),11,25);
let dias = (navidad.getTime() - fechaActual.getTime())/(1000*60*60*24);
console.log("Faltan " + dias + " dias para navidad");
}
// Ejercicio03.
// Generar 5 notas (0-20) aleatorias y obtener:
// a. la nota mayor
// b. la nota menor
// c. el promedio de notas.
function eje1 () {
let notas = [];
let suma = 0;
let mayor = 0;
let menor = 0;
for(let i=0;i<5;i++){
    notas.push(Math.floor(Math.random() * 21));
    console.log(notas[i]);
    suma += notas[i];
    if(notas[i]>mayor){
        mayor = notas[i];
    }
    if(notas[i]<menor){
        menor = notas[i];
    }
}
console.log("Promedio: " + suma/notas.length);
console.log("Nota mayor: " + mayor);
console.log("Nota menor: " + menor);
}