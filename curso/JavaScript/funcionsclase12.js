var edad = 18;
if(edad >= 18) {
    alert("Usted es mayor de edad");
}

function mostrasEdadConsola (edadPersona)
{
    console.log("Su edad es " + edadPersona)
}

function sumaAyB(a,b)
{
    var suma = a + b;
    return suma;
}

// Inicio de codigo

var edad = 18;
var fechaActual = "21/5/2024";
if(fechaActual == "21/5/2025"){
    edad = sumaAyB(edad,1)
}

mostrarEdadConsola(edad);

console.log(edad);

//

function suma(numeroA, numeroB)
{
    var  resultado = numeroA + numeroB; 
    return resultado;
}

//ejecutar
var resultadoSuma = suma(5,3);



/* tarea act 11
var precioFinal = 1000000;

if(topping == "oreo"){
    precio = 10
} else if(topping == 'kitkat'){
    precio = 15
}else if(topping == 'kinder'){
    precioFinal = precioFinal + 25
} else {
    console.log("No tenemos ese topping");
}

console.log("El precio del helado es de " + precioFinal);
*/




/* act 12

function saludo(nombre)
{
    alert("Bienvenido! + nombre);
}

var nombre = promp("Ingrese su nombre");
{
saludo(nombreIngresado);
}

opcion 2
var nombreIngresado = prompt("Ingrese su nombre");
var apellidoIngresado = prompt("Ingrese su apellido");

saludo(nombreIngresado + " " + apellidoIngresado); 