// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 
console.log(frutas); 
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays iician en "0" 


// === Metodos para mutar arrays ===


// .push(); Agrega elementos al Array

 var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
 console.log(frutas);

// .pop(); Elimina elemento del array

 var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
 console.log(frutas);

// unshift() Ayuda a agregar un nuevo valor al inicio del array

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()  Elimina el elemento que esté al inicio del array

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf(); Muestra la posición del elemento en el array

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);