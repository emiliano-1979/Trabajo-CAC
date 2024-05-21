const subir = document.querySelector(".arriba");
document.addEventListener('DOMContentLoaded', function () {
  subir.style.display = 'none';
});
window.onscroll = function () {
  let x = document.body.scrollTop
  let y = document.documentElement.scrollTop
  if (x > 200 || y > 200) { subir.style.display = "block"; }
  else { subir.style.display = "none"; }
}
function validarFormulario() {
  var lnamea = document.getElementById("lnamea").value.trim();
  var fnamea = document.getElementById("fnamea").value.trim();
  var birthdate = document.getElementById("birthdate").value.trim();
  var level = document.getElementById("level").value.trim();
  var grade = document.getElementById("grade").value.trim();
  var school = document.getElementById("school").value.trim();
  var lnamec = document.getElementById("lnamec").value.trim();
  var fnamec = document.getElementById("fnamec").value.trim();
  var emailc = document.getElementById("emailc").value.trim();


  if (lnamea === "" || fnamea === "" || birthdate === "" || level === "" || grade === "" || school === "" || lnamec === "" || fnamec === "" || emailc === "") {
    alert("Por favor, complete todos los campos requeridos.");
    return false;
  }

  else if (!document.querySelector('input[name="ex"]:checked')) {
    alert("Por favor, complete todos los campos requeridos.");
    return false;
  }

  else if (!document.querySelector('input[name="hno"]:checked')) {
    alert("Por favor, complete todos los campos requeridos.");
    return false;
  }

  else {
    alert("El formulario se ha enviado correctamente.");
    return true;
  }
}

function validarContactForm() {
  var email = document.getElementById("email").value.trim();
  var msg = document.getElementById("msg").value.trim();

  if (email === "" || msg === "") {
    alert("Por favor, complete todos los campos requeridos.");
    return false;
  }

  else {
    alert("El formulario se ha enviado correctamente.");
    return true;
  }
}

let origenp = ""
window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search);
  var origen = urlParams.get('origen');
  if (origen === 'cvalumno') {
    origenp = "alumno"
  } else if (origen === 'cvdocente') {
    origenp = "docente"
    // window.location="campusvirtualdocentes.html";
  }
}
function loguear() {

  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("clave").value;
  if (user != "" && pass != "") {
    if (origenp == "alumno") {
      window.location = "campusvirtual.html";
    } else if (origenp == "docente") {
      window.location = "campusvirtualdocentes.html";
    }
  } else {
    alert("Los datos no son correctos");
  }
}

window.close=function(){
  window.location="index.html"
}



