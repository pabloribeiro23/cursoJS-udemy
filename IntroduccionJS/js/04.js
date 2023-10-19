//Tipos de datos

//String o cadenas de texto
const producto = "Monitor de 20 Pulgadas";
const producto2 = String("Monitor 30 Pulgadas");
const producto3 = new String("Monitor 50 Pulgadas");

console.log(producto);

//Metodos de strings
//.length
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
console.log(tweet.length);

//indexOf() (retorna posición)
console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("Tablet"));

//includes() (retorna true o false)
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));
