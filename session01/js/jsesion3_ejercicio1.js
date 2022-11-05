// Ejercicio 01:
// Una empresa que vende vinos ha decidido vender sus productos por categorias:
// T  vino tinto
// B  Vino Blanco
// Los precios varian por el tipo de vino
// S  Seco
// M  SemiSeco
// D  Dulce
// Se tienen  dos proveedores
// Intipalka y Tacama
// El precio base de los vinos 
// Intipalka:(S:15%, M:10%, D:5%)
// 100 soles --> tinto
// 80 soles  --> blanco
// El precio base de los vinos
// Tacama:(S:20%, M:10%, D:8%)
// 200 soles  --> tinto
// 120 soles  --> blanco
// Se necesita un programa que permita mostrar el precio de venta de un vino dependiendo del proveedor, tipo y categoria.

// Ejercicio 1

var precio = 0;

function leerDatos1() {   

  var proveedor = parseInt(prompt('Seleccione proveedor (1.Intipalka / 2.Tacama):'))
  var categoria = parseInt(prompt('Ingrese categoria (1.Tinto / 2.Blanco): '))
  var tipo = parseInt(prompt('Ingrese numero del tipo vino (1.Seco / 2.Semiseco / 3.Dulce): '))


  switch (proveedor) {
    case 1:
        (categoria === 1) ? precio = 100 : precio = 80
        precio = (tipo == 1) ? precio += precio * 0.15 : (tipo === 2) ? precio += precio * 0.10 : precio += precio * 0.05
  
      break;
    case 2:
        (categoria === 2) ? precio = 200 : precio = 120
        precio = (tipo == 1) ? precio += precio * 0.20 : (tipo === 2) ? precio += precio * 0.10 : precio += precio * 0.08
  
      break;
    default:
      break;
  }  
  mostrarDatos()
}

function mostrarDatos() {
  console.log(`Resultado precio: ${precio}`);
}
