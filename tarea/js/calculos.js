// Exportaciones nombradas
export const promedio = (...notas) => notas.reduce((suma, n) => suma + n, 0) / notas.length;

export const estado = (nota, minima = 13) => (nota >= minima ? "Aprobado" : "Desaprobado");

// Exportación por defecto
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

export default reporte;