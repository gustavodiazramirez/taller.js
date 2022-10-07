function cambiarFoto(){
    document.getElementById("buho").src="https://biblioteca.acropolis.org/wp-content/uploads/2022/05/simbolismo-buho.jpg";
  }
  function cambiarNombre(){
    document.getElementById("nombre").innerHTML = "Sunset";
  }
  function borrarGato(){
    document.getElementById("borrando").remove();
  }

  function imprimirDatos(){
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("nombre-info").value);
    console.log(document.getElementById("ciudad").value);

    if(document.getElementById("hombre").checked === true)
      console.log("Es hombre")
    else if(document.getElementById("mujer").ckecked === true)
     console.log("Es mujer");
    
    
  }