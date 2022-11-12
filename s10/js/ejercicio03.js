class Curso{
  static idCurso = 0;
  constructor(nombre,creditos, horas){
      this.idCurso = ++Curso.idCurso;
      this.nombre = nombre;
      this.creditos = creditos;
      this.horas = horas;
  }
}

const sueldoA = 3500
const sueldoB = 2500
const sueldoC = 1500

class Profesor{
  static idProfesor = 0;
  constructor(nombre,categoria){
      this.idProfesor = ++Profesor.idProfesor;
      this.nombre = nombre;      
      this.categoria = categoria;
      this.sueldo = null;
      this.curso = new Curso;
  }
  
  setCurso(curso){
      this.curso= curso;
  }

  get getSueldo(){      
      switch (this.categoria) {
        case 'A':
          this.sueldo = sueldoA
          break;      
        case 'B':
          this.sueldo = sueldoB
          break;      
        case 'C':
          this.sueldo = sueldoC
          break;      
        default:
          break;
      }
      return this.sueldo;
  }
}

const curso1 = new Curso("Logistica 1", 5, 160);
const profesor1 = new Profesor("Diego Rivera","B",11);
profesor1.setCurso(curso1);

console.log(profesor1);
console.log(profesor1.curso);
console.log(profesor1.getSueldo);