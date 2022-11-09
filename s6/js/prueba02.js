
function f01(){
  var nota = document.getElementById("txtNota").value;
  document.getElementById("lblNota").innerHTML = nota;
}
function f02(){
  document.getElementById("txtNombre").style = "background-color:yellow";
}
function f03(){
  document.getElementById("txtNombre").style = "background-color:white";
}
function f04(){
  var indice = document.getElementById("cboZona").selectedIndex;
  var msg;
  if(indice == 0){
      msg = "Debe seleccionar una zona";
  }else{
      msg = "Zona seleccionada: " + document.getElementById("cboZona").options[indice].text;
  }
  document.getElementById("lblZona").innerHTML = "Zona: "+msg;
}

