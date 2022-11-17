//convertir javascript a json
var alumno = {
  "id": 1,
  "nombre": "juan",
  "promedio": 12,
  "curso": {
      "id": 1,
      "nombre": "matematicas",
      "profesor": {
          "id": 1,
          "nombre": "jose",
          "apellido": "perez"
      }
  }
}

console.log(JSON.stringify(alumno));
console.log(JSON.stringify(alumno, null, 2));