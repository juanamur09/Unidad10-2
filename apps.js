let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "azúcar";
listaDeSuper[2] = "harina";
listaDeSuper.push("coca cola", "rueditas");
listaDeSuper.unshift("papitas", "servilletas");
console.log(listaDeSuper.length);
let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length);

console.log(listaDeSuper);
console.log("La cantidad de elementos dentro del array es: " + listaDeSuper.length);
console.log("El primer elemento del array es: " + listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log("El último elemento del array es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);