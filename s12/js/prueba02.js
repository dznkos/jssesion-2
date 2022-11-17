//Convertir de JavaScript a JSon
const jscurso = {
  nombre: 'JavaScript',
  duracion: 30,
  precio: 200
}
const curso = JSON.stringify(jscurso);
console.log(curso);