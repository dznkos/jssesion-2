const scurso ='{ "nombre":"JavaScript", "duracion": 30, "precio": 200 }';
const curso = JSON.parse(scurso);
console.log(curso);
document.getElementById('demo').innerHTML = curso.nombre + " " + curso.duracion + " " + curso.precio;