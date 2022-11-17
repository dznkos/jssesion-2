const salumno =' { "nombre": "Juan", "edad": 20, "cursos": [ "HTML", "CSS", "JS" ] } '; 
const alumno = JSON.parse(salumno);
console.log(alumno);
document.getElementById('demo').innerHTML = alumno.nombre + " " + alumno.edad + " " + alumno.cursos[0];