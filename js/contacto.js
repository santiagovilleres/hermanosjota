const formulario = document.getElementById("form-contacto");

if (formulario) {
  const estado = document.getElementById("form-estado");

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const LARGO_MINIMO_NOMBRE = 2;
  const LARGO_MINIMO_MENSAJE = 10;

  const reglas = {
    nombre(valor) {
      if (!valor) return "Ingresá tu nombre.";
      if (valor.length < LARGO_MINIMO_NOMBRE) return "El nombre es muy corto.";
      return "";
    },
    email(valor) {
      if (!valor) return "Ingresá tu email.";
      if (!EMAIL_REGEX.test(valor)) return "El email no parece válido.";
      return "";
    },
    mensaje(valor) {
      if (!valor) return "Escribinos tu consulta.";
      if (valor.length < LARGO_MINIMO_MENSAJE)
        return `El mensaje necesita al menos ${LARGO_MINIMO_MENSAJE} caracteres.`;
      return "";
    },
  };

  function mostrarError(campo, mensaje) {
    const input = document.getElementById(campo);
    document.getElementById(`error-${campo}`).textContent = mensaje;
    input.setAttribute("aria-invalid", mensaje ? "true" : "false");
  }

  function limpiarEstado() {
    estado.textContent = "";
    Object.keys(reglas).forEach((campo) => mostrarError(campo, ""));
  }

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    estado.textContent = "";

    let primerInvalido = null;

    Object.entries(reglas).forEach(([campo, validar]) => {
      const valor = document.getElementById(campo).value.trim();
      const error = validar(valor);
      mostrarError(campo, error);
      if (error && !primerInvalido) primerInvalido = campo;
    });

    if (primerInvalido) {
      document.getElementById(primerInvalido).focus();
      return;
    }

    formulario.reset();
    limpiarEstado();
    estado.textContent = "¡Gracias! Recibimos tu mensaje y te respondemos pronto.";
  });

  formulario.addEventListener("input", (evento) => {
    const campo = evento.target.id;
    if (reglas[campo] && evento.target.getAttribute("aria-invalid") === "true") {
      mostrarError(campo, reglas[campo](evento.target.value.trim()));
    }
  });
}
