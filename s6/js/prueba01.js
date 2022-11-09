

function validarDatos(){
  var nombre = document.getElementById("txtNombre").value;
  if(nombre == "" || nombre == null){
      alert("Debe ingresar un nombre");
      return false;
  }
  //validar que el nombre no sea numero.
  if(!isNaN(nombre)){
      alert("El nombre no puede ser un numero");
      return false;
  }
  //validar que el nombre no tenga numeros.
  if(nombre.match(/\d+/g)){   
      alert("El nombre no puede tener numeros");
      return false;
  }
  //validar que el nombre no tenga caracteres especiales.
  if(nombre.match(/[^a-zA-Z0-9]/g)){
      alert("El nombre no puede tener caracteres especiales");
      return false;
  }
  
    //validar que se seleccione una zona.
  if(indice == null || indice == 0){
      alert("Debe seleccionar una zona");
      return false;
  }


  //validar de que el correo sea valido con expresiones regulares.
  var correo = document.getElementById("txtCorreo").value;
  if(!correo.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
      alert("El correo no es valido");
      return false;
  }


 //validar que los terminos y condiciones esten aceptados.
  var chkTerminos = document.getElementById("chkTerminos");
  if(!chkTerminos.checked){
      alert("Debe aceptar los terminos y condiciones");   
      return false;
  }

  //validar que el sexo este seleccionado.
  var rdbSexo = document.getElementsByName("rdbSexo");
  var sexo = "";
  for(var i=0; i < rdbSexo.length; i++){
      if(rdbSexo[i].checked){
          sexo = rdbSexo[i].value;
      }
  }
  if(sexo == ""){ 
      alert("Debe seleccionar un sexo");
      return false;
  }

  //validar que el  telefono sea valido.
  var telefono = document.getElementById("txtTelefono").value;
  if(!telefono.match(/^[0-9]{9}$/)){
      alert("El telefono no es valido");
      return false;
  }


  return true;
}