class Curso{
  static idCurso = 0;
  constructor(nombre,creditos, horas,estado){
      this.idCurso = ++Curso.idCurso;
      this.nombre = nombre;
      this.creditos = creditos;
      this.horas = horas;
      this.estado = estado;
  }
}
const prom=13;
const eaprobado="aprobado";
const edesaprobado="desaprobado";

class Alumno{
  static idAlumno = 0;
  constructor(nombre,apellido, promedio){
      this.idAlumno = ++Alumno.idAlumno;
      this.nombre = nombre;
      this.apellido = apellido;
      this.promedio = promedio;
      this.curso = new Curso;
  }
  
  setCurso(curso){
      this.curso= curso;
  }

  get getEstado(){//evitar hardcode
      this.estado =(this.promedio>=prom)?eaprobado:edesaprobado;
      return this.estado;
  }
}

// const curso1 = new Curso("Programacion I", 4, 520, 'Habilitado');
const alumno1 = new Alumno("Jose","Sayritupac",11);
// alumno1.setCurso(curso1);

console.log(alumno1.curso);
console.log(typeof alumno1.curso);