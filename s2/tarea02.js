
var nombre = prompt("Nombre Producto");

var precio = prompt("Ingrese precio:");

var cantidad = prompt("Ingrese cantidad:");
  
var monto = precio * cantidad;
var importe = 0;

if (cantidad < 10) {
  importe = monto - monto * 0.035; 
}else if ( cantidad >= 10 && cantidad <= 20){
  importe = monto - monto * 0.075; 
} else {
  importe = monto - monto * 0.095; 
}



alert(`Producto es \n 
       ${nombre} \n
       Importe es: ${importe}  `)

