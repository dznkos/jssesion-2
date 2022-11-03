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

function ejercicio1() {
  
  var precio = 0;

  var categoria = parseInt(prompt('Ingrese categoria (1.Tinto/2.Blanco): '))
  var proveedor = parseInt(prompt('Seleccione proveedor (1. Intipalka / 2. Tacama):'))
  var tipo = parseInt(prompt('Ingrese numero del tipo vino (1.Seco/2.Semiseco/3.Dulce): '))


  switch (categoria) {
    case '1':
        if (proveedor === '1') {
          precio = 100
        }
        else {
          precio = 200
        }
      break;
    case '2':
      if (proveedor === '2') {
        precio = 80
      }
      else {
        precio = 120
      }
      break;
    default:
      break;
  }

  switch (tipo) {
    case '1':
      precio = precio * 0.20
      break;
    case '2':
      precio = precio * 0.10
      break;
    case '3':
      precio = precio * 0.08
      break;
    default:
      break;
  }

  alert(`Resultado precio: ${precio}`)
}



// Ejercicio 02:
// Desarrollar un programa que permita ingresar los nombres de muchos productos y sus precios.  
// Se debe dejar de preguntar por ellos cuando ingrese un producto con nombre "Q"
// Al final deberá mostrar cada producto con su precio y el promedio de precios.


function ejercicio2(){
  
  var listProducts = []

  for (let index = 0; ; index++) {
    
    var nom_producto = prompt(`Ingrese nombre producto nr° ${index} :` )
    var precio = parseInt(prompt(`Precio producto nr° ${index} :`))
    

    if (nom_producto.substring(0,1)==='Q') {
      console.log(listProducts)

      var total = 0;
      listProducts.forEach( (product, array) => {        
        total += product.precio
      });

      var promedio = total / listProducts.length
      var resultado = {
        promedio_prec: promedio
      }
      listProducts.push(resultado)
      alert(JSON.stringify(listProducts, '', 2))

      break;      
    }
    
    var product = {
        nom_producto,
        precio
      }
    listProducts.push(product)      
  }
  

}


// Ejercicio 03:
// En una farmacia se esta haciendo inventario de poductos, para lo que se toman los datos de los nombres, 
// categoria, la cantidad que tienen en stock y los precios.   
// Se solicita un programa que permita ingresar de uno en uno los productos y mostrar los siguiente:
// - Mostrar los productos y cantidades por categoria: [natural, generica, otros]
// - Mostrar el promedio de precios por categoria.
// - Mostrar el precio promedio de todos los productos.
// - Mostrar el costo (precio * cantidad) de todos los productos.
    
var listProducts = []

function ejercicio3(){
  
  // var precioCategoria = []

  for (let index = 0; ; index++) {
    
    var nombre = document.getElementById('name').value     
    var precio = parseFloat(document.getElementById('price').value)
    var categoria = document.querySelector('#category').value
    var cantidad = parseInt(document.getElementById('quantity').value)
    
    var product = {
        nombre,
        categoria,
        cantidad,
        precio
      }

      listProducts.push(product)
      console.log(JSON.stringify(listProducts,'', 2))
      break;
  }
}

function mostrarProductos() {
  alert(JSON.stringify(listProducts, '', 2))
}

function getCategoria(cat) {

  var total = 0;
  var promedio = 0;

  switch (cat) {
    case 'n':
        var listResp = listProducts.filter( prod => prod.categoria === 'n')
        listResp.forEach( prod => {
          total += prod.cantidad
          promedio += prod.precio
        })
        promedio = promedio / listResp.length
      break;
    case 'g':
        var listResp = listProducts.filter( prod => prod.categoria === 'g')
        listResp.forEach( prod => {
          total += prod.cantidad
        })
        promedio = promedio / listResp.length
      break;
    case 'o':
        var listResp = listProducts.filter( prod => prod.categoria === 'o')
        listResp.forEach( prod => {
          total += prod.cantidad
        })
        promedio = promedio / listResp.length
      break;
  
    default:
      break;
  }
  

  alert(` Cantidad por Categoria: ${total} \n
          Promedio Precio x Categoria: ${promedio} \n
          Productos de categoria:
          ${JSON.stringify(listResp, '', 2 )} `)

}



// Ejercicio 04:
// En un hospital ingresan muchos pacientes diariamente, por cada ingreso se registra: edad, sexo y distrito de procedencia.
// Se desea ingresar todos los pacientes de un dia y ver lo siguiente:
// 1. Cantidad de pacientes varones y mujeres
// 2. Edad promedio de pacientes por dia
// 3. Cantidad de pacientes por distrito
// 4. Edad promedio de pacientes por distrito.
    
