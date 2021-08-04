//Funciones: Conjunto de sentencias para hacer ciertas tareas

//Declarativas
//En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

//Expresión, también se llaman funciones anónimas porque no tienen nombre
//En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.
var miFuncion = function(a,b){
    return a + b;
}
miFuncion(3,4);

//Example
function suma(a,b){
    var resultado = a + b;
    return resultado;
}
suma(3,4);
//example 2
var nombre = function(nombre){
    console.log('Hola ${nombre}');
}

nombre('Diego');
