

var myarray = [
  13, -2, 7, 0, 42, -32, 28, -1, 80, 49
]

var pos = 0, neg = 0, ceros = 0;

for (let i = 0; i < myarray.length; i++) {
  
  if (myarray[i] > 0) {
    pos++
  }else if(myarray[i] < 0) {
    neg++
  }else{
    ceros++
  }
  
}

alert(`Detalles: \n
       positivos: ${pos} \n
       negativos: ${neg} \n
       ceros: ${ceros}`)
