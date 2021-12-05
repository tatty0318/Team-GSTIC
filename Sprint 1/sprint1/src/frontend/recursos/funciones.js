let colores = ["blue", "white", "gray", "darkslategrey", "dimgray"]

function cambiarFondo() {
  let indice = parseInt(Math.random() * 5) - 1;
  let color = colores[indice];
  document.querySelector("body").style.background = color;

}

// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          RegistrarPersona();
          event.preventDefault()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function RegistrarPersona() {
  let id = document.querySelector("#validationId").value;
  let nombres = document.querySelector("#validationNombre").value;
  let apellidos = document.querySelector("#validationApellido").value;
  let telefono = document.querySelector("#validationTelefono").value;
  let direccion = document.querySelector("#validationDireccion").value;
  let edad = document.querySelector("#validationEdad").value;
  let fechaNacimiento = document.querySelector("#validationFechaNacimiento").value;
  let email = document.querySelector("#validationCorreo").value;
  let clave = document.querySelector("#validationClave").value;
  let empleadoId = document.querySelector("#validationId").value;
  let notificacionesPersonasId = "1";

  let url = 'http://localhost:3000/personas';
  let datos = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    direccion: direccion,
    edad: edad,
    fechaNacimiento: fechaNacimiento,
    email: email,
    clave: clave,
    empleadoId: empleadoId,
    notificacionesPersonasId, notificacionesPersonasId
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })

  alert("Datos correctos");
}
