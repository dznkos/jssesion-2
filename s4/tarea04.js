
var numero = prompt("ingrese numero");


var d1  = numero % 10;
var d2  = Math.floor((numero % 100) / 10);
var d3 = Math.floor(numero / 100);
var res = '';
var text = '';

if ( d1 === d2 && d2 === d3 ) {
  text = 'Los numeros son iguales'
  res =  Math.sqrt(d1) * 3;
}else {
  res =  (d1 ** 2) + (d2 ** 2) + (d3 ** 2) ;
}

alert(`${text} \n la suma de las raices es: ${res}`)
