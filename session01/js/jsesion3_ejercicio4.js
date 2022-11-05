
/*
Ejercicio04:
En un hospital ingresan muchos pacientes diariamente, por cada ingreso se registra: edad, sexo y distrito de procedencia.
Se desea ingresar todos los pacientes de un dia y ver lo siguiente:
1. Cantidad de pacientes varones y mujeres
2. Edad promedio de pacientes por dia
3. Cantidad de pacientes por distrito
4. Edad promedio de pacientes por distrito.
*/

// Variables globales
var contadorPacientes = 0;
var contadorHombres = 0;
var contadorMujeres = 0;
var acumuladorEdad = 0;
var contadorLince = 0;
var contadorLima = 0;
var contadorSurco = 0;
var contadorOtros = 0; 
var acumuladorEdadLince = 0;
var acumuladorEdadLima = 0;
var acumuladorEdadSurco = 0;
var acumuladorEdadOtros = 0;


function leerDatos1(){
    do{
        ingresarDatos();
        contadorPacientes++;
    }while(confirm("Desea ingresar mas datos?"));
    mostrarDatos();
}

function ingresarDatos(){
    let edad = eval(prompt("Introduce la edad"));
    let sexo = prompt("Introduce el sexo [M/F]");
    let distrito = prompt("Introduce el distrito[lince,lima,surco]");
    console.log("Edad: " + edad);
    console.log("Sexo: " + sexo);
    console.log("Distrito: " + distrito);
    acumuladorEdad += edad;
    if(sexo == "M") contadorHombres++;
    else contadorMujeres++;

    switch(distrito){
        case "lince": contadorLince++;
                    acumuladorEdadLince += edad;break;
        case "lima": contadorLima++; 
                    acumuladorEdadLima += edad;break;
        case "surco": contadorSurco++; 
                    acumuladorEdadSurco += edad;break;  
        default : contadorOtros++; 
                    acumuladorEdadOtros += edad;break;
    }
}

function mostrarDatos(){
    console.log("Cantidad de pacientes: " + contadorPacientes);
    console.log("Cantidad de hombres: " + contadorHombres);
    console.log("Cantidad de mujeres: " + contadorMujeres);
    console.log("Edad promedio: " + (acumuladorEdad / contadorPacientes));
    console.log("Cantidad de pacientes por distrito");
    console.log("Lince: " + contadorLince);
    console.log("Lima: " + contadorLima);
    console.log("Surco: " + contadorSurco);
    console.log("Edad promedio por distrito");
    console.log("Lince: " + (acumuladorEdadLince / contadorLince));
    console.log("Lima: " + (acumuladorEdadLima / contadorLima));
    console.log("Surco: " + (acumuladorEdadSurco / contadorSurco));
    console.log("Otros: " + (acumuladorEdadOtros / contadorOtros));
}