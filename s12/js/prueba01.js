//Convertir de String a JSon
const scurso ='{ "nombre":"JavaScript", "duracion": 30, "precio": 200 }';
console.log(scurso);
const curso = JSON.parse(scurso);
console.log(curso);