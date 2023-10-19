//Objetos
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1Kg",
  medida: "1m",
};

//Como unir objetos - la buena practica indica no modificar los objetos originales

//Spread operator
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);
