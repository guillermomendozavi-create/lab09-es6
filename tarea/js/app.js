import estudiantes, { curso } from "./datos.js";
import reporte from "./calculos.js";

// Spread de objeto y de arreglo
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);
const lista = document.querySelector("#reportes");
todos.forEach(estudiante => {
  const linea = reporte(estudiante);
  console.log(linea);
  lista.innerHTML += `<li>${linea}</li>`;
});