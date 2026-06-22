/* Faça um programa para calcular o valor gasto de combustível em uma viagem, utilizando as seguintes informações:
- Distância percorrida (em km)
- Consumo médio do veículo (em km/l)
- Preço do combustível (em R$ por litro)
*/
console.log("-----Aula sobre primeiro desafio-----");

let distancia = 500; // em km
let consumoMedio = 10; // em km/l
let precoCombustivel = 5; // em R$ por litro

let litrosConsumidos = distancia / consumoMedio;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log("Distância percorrida:", distancia, "km");
console.log("Consumo médio do veículo:", consumoMedio, "km/l");
console.log("Preço do combustível:", precoCombustivel, "R$ por litro");
console.log("Litros consumidos:", litrosConsumidos, "litros");
console.log("Valor gasto de combustível:", valorGasto.toFixed(2), "R$");

