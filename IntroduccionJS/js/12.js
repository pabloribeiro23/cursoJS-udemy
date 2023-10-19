//"use strict" correr JS en modo estricto
//Objetos
let producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

Object.freeze(producto); //Freeze no permita que el objeto sea modificado o que se agreguen o eliminen propiedades

//Object.seal(producto); No permite agregar, o eliminar propiedades, pero si permite modificar las propiedades existentes

console.log(producto);

console.log(Object.isFrozen(producto)); //Permite saber si un objeto esta congelado
