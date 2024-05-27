var precioFinal = 1000000;
var topping = prompt("Ingrese su sabor de topping");
if(topping == "oreo"){
    precioFinal = precioFinal + 10
} else if(topping == 'kitkat'){
    precioFinal = precioFinal + 15
}else if(topping == 'kinder'){
    precioFinal = precioFinal + 25
} else {
    console.log("No tenemos ese topping");
}

console.log("El helado cuesta $ " + precioFinal);

switch(pedido) {
    case "carne":
        console.log("vino tinto")
        break;
    case "pescado":
        console.log("vino blanco")
        break;
    case "verduda":
        console.log("agua")
        break;
}

var arrayDeFrutas = [];
var arrayMostrar = [];
for (let index = 0; index < arrayDeFrutas.length; index++) {
    arrayMostrar.push(arrayDeFrutas[index]);
}

for (let index = 0; index < arrayMostrat.length; index++) {
    console.log(arraMostrar[index]);
}

var numero = 1;
while(numero<11){
    console.log(numero + "es menor que 11")
    numero++
}
