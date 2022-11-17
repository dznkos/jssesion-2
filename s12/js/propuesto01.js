// Ejercicio 01 [Tiempo: 40 minutos]
// En un instituto de belleza existen dos salones de clase, 
// en cada uno hay un total de 5 alumnos[id,nombre,correo,promedio,estado], 
// cada alumno solo lleva un curso[id,nombre,precio].
// Se desea ingresar datos para los dos salones como json y mostrarlos 
// en la pagina web en una tabla.




var datos =  [
  {salon_id: 1, salon_nombre: "A", salon_capacidad: 5,
      salon_profesor: {profesor_id: 1, profesor_nombre: "Pamela", profesor_apellido: "Lopez"},
      salon_alumnos: [
        {alumno_id: 1, alumno_nombre: "Juan", alumno_promedio: 12,alumno_correo:"correo1@gmail.com", alumno_estado: true}, 
        {alumno_id: 2, alumno_nombre: "Maria", alumno_promedio: 15,alumno_correo:"correo2@gmail.com", alumno_estado: true},
        {alumno_id: 3, alumno_nombre: "Pedro", alumno_promedio: 18,alumno_correo:"correo3@gmail.com", alumno_estado: true},
        {alumno_id: 4, alumno_nombre: "Carlos", alumno_promedio: 18,alumno_correo:"correo4@gmail.com", alumno_estado: true},
        {alumno_id: 5, alumno_nombre: "Jose", alumno_promedio: 17,alumno_correo:"correo5@gmail.com", alumno_estado: true}
      ],
      salon_curso: {curso_id: 1, curso_nombre: "Cosmiatria I", curso_duracion: 30, curso_precio: 200}},
  {salon_id: 2, salon_nombre: "B", salon_capacidad: 5,
      salon_profesor: {profesor_id: 1, profesor_nombre: "Naomy", profesor_apellido: "Castro"},
      salon_alumnos: [
          {alumno_id: 1, alumno_nombre: "Pablo", alumno_promedio: 12,alumno_correo:"correo1@gmail.com", alumno_estado: true}, 
        {alumno_id: 2, alumno_nombre: "Mario", alumno_promedio: 15,alumno_correo:"correo2@gmail.com", alumno_estado: true},
        {alumno_id: 3, alumno_nombre: "Roberto", alumno_promedio: 18,alumno_correo:"correo3@gmail.com", alumno_estado: true},
        {alumno_id: 4, alumno_nombre: "Carlos", alumno_promedio: 18,alumno_correo:"correo4@gmail.com", alumno_estado: true},
        {alumno_id: 5, alumno_nombre: "Juan", alumno_promedio: 17,alumno_correo:"correo5@gmail.com", alumno_estado: true}
      ],
      salon_curso: {curso_id: 1, curso_nombre: "Cosmiatria II", curso_duracion: 30, curso_precio: 300}}
]


function mostrarData(){

  console.log('Holi')
  console.log(datos.length)

  
  var table1 = document.createElement('table1');
  table1.setAttribute('border', '1');
  
  var table2 = document.createElement('table2');
  table2.setAttribute('border', '1');

  for (var i = 0; i < datos.length ; i++){
    
    for (let j = 0; j < datos[i].salon_alumnos.length; j++) {
      console.log(datos[i].salon_nombre);
      var tr = document.createElement('tr');  
      //profe
      var tdp = document.createElement('td');
      var salon_profesor = document.createTextNode('salon_profesor');
      salon_profesor.textContent = datos[i].salon_profesor.profesor_nombre + datos[i].salon_profesor.profesor_apellido
      //aula
      console.log(datos[i].salon_curso.curso_nombre)
      var tdaula = document.createElement('td');
      var salon_curso = document.createTextNode('salon_curso');
      salon_curso.textContent = datos[i].salon_curso.curso_nombre

      var td0 = document.createElement('td');
      var salon_nombre = document.createTextNode('salon_nombre');
      salon_nombre.textContent = datos[i].salon_nombre 
      var td1 = document.createElement('td');
      var alumno_id = document.createTextNode('alumno_id');
      alumno_id.textContent = datos[i].salon_alumnos[j].alumno_id
      var td2 = document.createElement('td');
      var alumno_nombre = document.createTextNode('alumno_nombre');
      alumno_nombre.textContent = datos[i].salon_alumnos[j].alumno_nombre
      var td3 = document.createElement('td');
      var alumno_promedio = document.createTextNode('alumno_promedio');
      alumno_promedio.textContent = datos[i].salon_alumnos[j].alumno_promedio
      var td4 = document.createElement('td');
      var alumno_correo = document.createTextNode('alumno_correo');
      alumno_correo.textContent = datos[i].salon_alumnos[j].alumno_correo
      var td5 = document.createElement('td');
      var alumno_estado = document.createTextNode('alumno_estado');
      alumno_estado.textContent = datos[i].salon_alumnos[j].alumno_estado

      tdp.appendChild(salon_profesor);
      tdaula.appendChild(salon_curso);
      td0.appendChild(salon_nombre);
      td1.appendChild(alumno_id);
      td2.appendChild(alumno_nombre);
      td3.appendChild(alumno_promedio);
      td4.appendChild(alumno_correo);
      td5.appendChild(alumno_estado);

      tr.appendChild(tdp);
      tr.appendChild(tdaula);

      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      if (i === 0) {
        table1.appendChild(tr);   
      } else {
        table2.appendChild(tr); 
      }
         
    }
      
  }
  document.getElementById('tabla1').appendChild(table1)
  document.getElementById('tabla2').appendChild(table2)

}

mostrarData()








































