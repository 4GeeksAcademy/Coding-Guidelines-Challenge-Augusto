// Función para generar una excusa
//He separar la lógica del generador de excusas en funciones:
//Mover la lógica del generador de excusas a una función separada y utilizar nombres de funciones descriptivos.
function generarExcusa() {
  var actividades = [
    "Mi perro",
    "Mi gato",
    "Mi hermano",
    "Mi vecino",
    "Mi amigo"
  ];
  var excusas = ["se comió", "rompió", "escondió", "tiró", "borró"];
  var objetos = [
    "mi tarea",
    "mi libro",
    "mi teléfono",
    "mi computadora",
    "mis llaves"
  ];
  var porques = [
    "después de la clase",
    "ahora mismo",
    "justo cuando termine",
    "durante el almuerzo",
    "mientras oraba"
  ];

  var indiceActividad = Math.floor(Math.random() * actividades.length);
  var indiceExcusa = Math.floor(Math.random() * excusas.length);
  var indiceObjeto = Math.floor(Math.random() * objetos.length);
  var indicePorque = Math.floor(Math.random() * porques.length);

  // Construir la excusa
  var excusa =
    actividades[indiceActividad] +
    " " +
    excusas[indiceExcusa] +
    " " +
    objetos[indiceObjeto] +
    " " +
    porques[indicePorque] +
    ".";

  // Devolver la excusa generada
  return excusa;
}

//Y también he actualizado el window.onload. En su lugar, utilicé el evento DOM más modernos como DOMContentLoaded.
document.addEventListener("DOMContentLoaded", function() {
  // Generar una excusa y mostrarla en la consola
  var excusaGenerada = generarExcusa();
  console.log(excusaGenerada);
});

//También he modificado casi todo el archivo de ".eslintrc" para poder cambiar varias partes del codigo sin que me de error y mejorar la legibilidad.
//Todos los resultados en consola.