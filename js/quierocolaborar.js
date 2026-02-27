document.addEventListener("DOMContentLoaded", function () {

  const opciones = document.querySelectorAll("input[name='colaboracion']");
  const dinero = document.getElementById("bloque-dinero");
  const trabajo = document.getElementById("bloque-trabajo");
  const difusion = document.getElementById("bloque-difusion");


  function esconder() {
    dinero.style.display = "none";
    trabajo.style.display = "none";
    difusion.style.display = "none";
  }


  opciones.forEach(function (op) {
    op.addEventListener("change", function () {
      esconder();

      if (op.value === "dinero") {
        dinero.style.display = "block";
      } else if (op.value === "trabajo") {
        trabajo.style.display = "block";
      } else if (op.value === "difusion") {
        difusion.style.display = "block";
      }
    });
  });


  esconder();

  
  document.getElementById("form-colaborar").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente!");
  });

});
