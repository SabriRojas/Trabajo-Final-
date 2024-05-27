function saludo(nombre)
{
    alert("Bienvenido" + nombre);
}

var nombre = promp("Ingrese su nombre");

if(nombreIngresado != "") {
    saludo(nombreIngresado);
} else {
    alert("No ingreso su nombre");
}
