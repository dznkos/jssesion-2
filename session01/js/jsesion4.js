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
function eje3 () {
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

// Propuesto01.
// En un evento de 5 dias (lunes 7 nov al viernes 11 nov) 
// se desea colocar exposiciones de 1 o 2 horas maximo entre horarios de 9am a 8pm.
// Hacer un programa que permita reservar espacios de tiempo que esten dentro del rango permitido y que no permita traslapes.
// Al final se debera mostrar las fechas y horarios reservados.


var eventodia1 = []
var eventodia2 = []
var eventodia3 = []
var eventodia4 = []
var eventodia5 = []


function ejepro1(){

  // Debe ingresar rangos dia( 7-11) hora (1-2) horario(9-20)(9am.8pm)
  var reserva =  prompt('Consulte reserva en orden dia(7nv-11nv), rghora (1,2) hora inicio(9am-20pm) : ')

  var resvalues = reserva.split(',')
  var dia = resvalues[0]
  var rghora = parseInt(resvalues[1])
  var hini = parseInt(resvalues[2])

  //validar hora
  if ((hini < 9 || hini > 19) || (hini == 19 && rghora == 2)) {
    console.log('Horario invalido');
    return;
  }

  switch (dia) {
    case '7':      
      if (eventodia1.includes(hini)) {
        console.log('horario no disponible')
      }else {
        if (rghora == 2) {
          var hr2 = hini + 1 
          eventodia1.push(hini)
          eventodia1.push(hr2)
          console.log( 'Reserva dia 7nov horas:', formatoHora(eventodia1) );
        }else {        
          eventodia1.push(hini)
          console.log( 'Reserva dia 7nov horas:', formatoHora(eventodia1) );
        }        
      }
      break;
    case '8':
      if (eventodia2.includes(hini)) {
        console.log('horario no disponible')
      }else {
        if (rghora == 2) {3
          var hr2 = hini + 1 
          eventodia2.push(hini)
          eventodia2.push(hr2)
          console.log( 'Reserva registrada 8nov horas:', formatoHora(eventodia2) );
        }else {
          eventodia2.push(hini)
          console.log( 'Reserva registrada 8nov horas:', formatoHora(eventodia2) );
        }        
      }
      break;
    case '9':
      if (eventodia3.includes(hini)) {
        console.log('horario no disponible')
      }else {
        if (rghora == 2) {
          var hr2 = hini + 1 
          eventodia3.push(hini)
          eventodia3.push(hr2)
          console.log( 'Reserva registrada 9nov horas:', formatoHora(eventodia3) );
        }else {
          eventodia3.push(hini)
          console.log( 'Reserva registrada 9nov horas:', formatoHora(eventodia3) );
        }        
      }
      break;
    case '10':
      if (eventodia4.includes(hini)) {
        console.log('horario no disponible')
      }else {
        if (rghora == 2) {
          var hr2 = hini + 1 
          eventodia4.push(hini)
          eventodia4.push(hr2)
          console.log( 'Reserva registrada 10nov horas:', formatoHora(eventodia4) );
        }else {
          eventodia4.push(hini)
          console.log( 'Reserva registrada 10nov horas:', formatoHora(eventodia4) );
        }        
      }
      break;
    case '11':
      if (eventodia5.includes(hini)) {
        console.log('horario no disponible')
      }else {
        if (rghora == 2) {
          var hr2 = hini + 1 
          eventodia5.push(hini)
          eventodia5.push(hr2)
          console.log( 'Reserva registrada 11nov horas:', formatoHora(eventodia5) );
        }else {
          eventodia5.push(hini)
          console.log( 'Reserva registrada 11nov horas:', formatoHora(eventodia5) );
        }        
      }
      break;  
    default:
      break;
  }
}

function mostrarReservas(){
  console.log('===== Reservas =====')
  imprimirReservas(eventodia1, 7)
  imprimirReservas(eventodia2, 8)
  imprimirReservas(eventodia3, 9)
  imprimirReservas(eventodia4, 10)
  imprimirReservas(eventodia5, 11)
}

function imprimirReservas(reservas, dia) {
  if (reservas.length > 0 ) {    
    console.log(`Reserva del dia ${dia}nov x horas:`, formatoHora(reservas) );
  }else {    
    console.log(`Reserva del dia ${dia}nov x horas: No se encontraron reservas`);
  }
}

function formatoHora(res){
  return res.map( rs => {
    var hora = (rs < 12) ? rs +'am' : rs +'pm' 
    return hora
  } )
}
