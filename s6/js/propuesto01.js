// Ejercicio01.
// Desarrollar una pagina web con formulario de notas de alumnos:
//     Un alumno puede ingresar 5 notas.
//     El alumno puede ser regular o especial
//     Si es regular el promedio es con las 5 notas
//     Si es especial el promedio en con las 4 notas mayores.
// Para ingresar las notas use RANGE, valide las notas [0,20]
// Seleccione el tipo con con combo 
// Mostrar el promedio en un LABEL

var notas =[]
var tipo = ''

function f01(){
  document.getElementById("lblnota1").innerHTML = document.getElementById("nota1").value;
}
function f02(){
  document.getElementById('lblnota2').innerText = document.getElementById("nota2").value 
}
function f03(){
  document.getElementById('lblnota3').innerText = document.getElementById("nota3").value 
}
function f04(){
  document.getElementById('lblnota4').innerText = document.getElementById("nota4").value
}
function f05(){  
  document.getElementById('lblnota5').innerText = document.getElementById("nota5").value 
}

function validar() {
  notas = []
  notas.push(eval(document.getElementById("nota5").value));
  notas.push(eval(document.getElementById("nota1").value))
  notas.push(eval(document.getElementById("nota2").value));
  notas.push(eval(document.getElementById("nota3").value));
  notas.push(eval(document.getElementById("nota4").value));

  if (notas.length < 5) {
    alert('Debe ingresar todas las notas')
    return false
  }

  var rdbTipo = document.getElementsByName("rdbTipo");  
  for (let i = 0; i < rdbTipo.length; i++) {    
    if (rdbTipo[i].checked) {
      tipo = rdbTipo[i].value
    }
  }
  if(tipo == ""){ 
    alert("Debe seleccionar un tipo");
    return false;
  }
  return true;
}

function procesar(){

  if (!validar()) {
    alert('Debe completar todos los campos')
    return ;
  }

// Si es regular el promedio es con las 5 notas
// Si es especial el promedio en con las 4 notas mayores.
var prom = 0;
  if (tipo == 'R') {
    console.log(notas);
    prom = notas.reduce( (a,b) => a + b, 0)    
    console.log(prom);
    console.log(notas.length);
    console.log(prom/ notas.length );
  }else{
    min = Math.min(...notas)
    prom = notas.filter( (n) => n !== min)
    console.log( prom.reduce( (a,b) => a + b, 0)   / prom.length );
  }

}

