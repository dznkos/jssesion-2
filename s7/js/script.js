
// Una empresa desea vender Productos en su pagina web
// 1. Debe seleccionar entres tres productos: 
//    Pocesador(300 dolares)
//    Memoria(250 dolares) 
//    Disco Duro(100 dolares).
// 2. Al seleccionar el producto se debe mostrar su precio.
// 3.  Se debe elegir la cantidad y esto debe reflejar el total automaticamente en una etiqueta.
var precio = 0;
var total = 0;

function elegirprod() {

  var indice = document.getElementById("cdbprod").selectedIndex;
  console.log(indice)  
  switch (indice) {
    case 1:
      precio = 300
      break;
    case 2:
      precio = 200
      break;
    case 3:
      precio = 100
      break;  
    default:
      break;
  }

  document.getElementById("prodprecio").value = `${precio} dolares`;

}

function calculartotal() {
  
  var cantidad = 0;

  cantidad = document.getElementById('cantidad').value

  total = cantidad * precio;

  document.getElementById('total').value = total

}

var pc01 = 0;
var pc02 = 0;
var pc03 = 0;
var pc04 = 0;
var promedio = 0;
var curso = '';
//  Ejercicio 02
// Se desea ingresar los datos para obtener le promedio de notas de los 
// siguientes cursos:
// Programmer (pc01*0.25+pc02*0.25+pc03*0.25+pc04*0.25)
// Developer (pc01*0.20+pc02*0.20+pc03*0.30+pc04*0.30)
// Expert (pc01*0.30+pc02*0.30+pc03*0.30+pc04*0.10)
// Se debe elegir de que curso se desea ingresar las notas y mostrar el promedio segun la elección. 


function elegircurso(){

  pc01 = parseInt(document.getElementById('nota1').value)
  pc02 = parseInt(document.getElementById('nota2').value)
  pc03 = parseInt(document.getElementById('nota3').value)
  pc04 = parseInt(document.getElementById('nota4').value)

  var indice = document.getElementById("cdbcurso").selectedIndex;
  console.log(indice)  
  switch (indice) {
    case 1:
      promedio = pc01*0.25+pc02*0.25+pc03*0.25+pc04*0.25
      curso = 'Programmer'
      break;
    case 2:
      promedio = pc01*0.20+pc02*0.20+pc03*0.30+pc04*0.30
      cursp = 'Developer'
      break;
    case 3:
      promedio = pc01*0.30+pc02*0.30+pc03*0.30+pc04*0.10
      curso = 'Expert'
      break;  
    default:
      break;
  }
  console.log(pc01,pc02,pc03,pc04)
  document.getElementById('lblres').value = promedio.toFixed(1)

}

// <!-- Ejercicio 03
// Desarrollar una aplicación que permita agregar elementos a un TextArea
// de tal modo que se elija el articulo de una lista de selección y se elija 
// si se compra con o sin promocion.
//     Pocesador(300 dolares)
//     Memoria(250 dolares) 
//     Disco Duro(100 dolares). -->

var add = '';

function addprod() {

  var rdbpromo = document.getElementsByName('rdbpromo')
  var promo = '';
  
  for (let i = 0; i < rdbpromo.length; i++) {    
    if (rdbpromo[i].checked) {
      promo = rdbpromo[i].value
    }    
  }

  var indice = document.getElementById("cdbaddprod").selectedIndex;
  console.log(indice)  
  switch (indice) {
    case 1:
      add = `Procesado 300 dolares - ${(promo)=='C'? 'Con promoción': 'Sin promoción'} \n`
      break;
    case 2:
      add = `Memoria 250 dolares - ${(promo)=='C'? 'Con promoción': 'Sin promoción'} \n`
      break;
    case 3:
      add = `Disco duro 100 dolares - ${(promo)=='C'? 'Con promoción': 'Sin promoción'} \n`
      break;  
    default:
      break;
  }

  var txtarea = document.getElementById('txaprod')
  
  txtarea.value += add  
}