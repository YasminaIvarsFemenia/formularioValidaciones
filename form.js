function validar(){

    var nombre= document.getElementById("nombre").value;
    var apellidos= document.getElementById("apellidos").value;
    var edad= document.getElementById("edad").value;
    var nif= document.getElementById("nif").value;
    var email = document.getElementById("email").value;
    var patronLetras=/^[A-Z\s]+$/;
    var patronEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var patronNif=/(^([0-9]{8,8}\-[A-Z])|^)$/i;
   var comprobar=true;


     if (!patronLetras.test(nombre)) {
          alert("El nombre sólo puede contener letras.");
      comprobar=false;
         }
 
    if(!patronLetras.test(apellidos)){
            alert("Los apellidos sólo pueden contener letras.");
        comprobar=false;
         }

   if(isNaN(edad)){
    alert("La edad no es correcta");
    comprobar=false;
   }
    if(edad>105){
      alert("La edad tiene que estar comprendida entre 0 y 105 años.")
      comprobar=false;
    }
     
   
    if (!patronNif.test(nif)) {
            alert("El formato del DNI introducido no es correcto.");
    comprobar=false;
    }

    if (!patronEmail.test(email)) {
              alert("El formato del email introducido no es correcto.");
    comprobar=false;
      }

    return comprobar;
   
}
function upperCase() {
  var nombre=document.getElementById("nombre").value
  var apellidos=document.getElementById("apellidos").value
  document.getElementById("nombre").value=nombre.toUpperCase()
  document.getElementById("apellidos").value= apellidos.toUpperCase()

}



function registrar(e){
  validar();
  e.preventDefault();
  var name= document.getElementById("nombre").value;
  var apel= document.getElementById("apellidos").value;
  var age= document.getElementById("edad").value;
  var dni= document.getElementById("nif").value;
  var pro = document.getElementById("provincia").value;
  var nuevoRegistro= [name,apel, age,dni,pro];
  text = "<ul>";
nuevoRegistro.forEach(myFunction);
text += "</ul>";
document.getElementById("registro").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
  }
}

document.getElementById("limpiar").addEventListener("click",function reset(){
    document.getElementById("registro").innerHTML = '';
  }
);

