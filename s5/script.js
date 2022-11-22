
var sueldoA = 40
var sueldoB = 35
var sueldoC = 30

var sbasico = 0

function procesar(){

  

  var categoria = document.getElementById('categoria').value
  var years = document.getElementById('years').value

  console.log(categoria)
  switch (categoria) {
    case 'A':
      sbasico = sueldoA 
      break;
    case 'B':
      sbasico = sueldoB 
      break;
    case 'C':
      sbasico = sueldoC 
      break;
    default:
      break;
  }
  
  console.log(sbasico);

  if (years > 0 && years < 4){
      sbasico = sueldoA  * 1.15
  } else if(years > 3 && years < 8){
      sbasico = sueldoA  * 1.2
  } else if(years > 7 && years < 13){     
      sbasico = sueldoA  * 1.3
  } else if(years > 12){   
      sbasico = sueldoA  * 1.35
  }

  console.log(sbasico);



  document.getElementById('res').innerHTML = sbasico


}