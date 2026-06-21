//tipos primitivos

//boolean
var volf = false;
console.log(typeof(volf));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = 'diana';
console.log(typeof(nome));

//Como declara
console.log("---------Como Declarar--------")

var variavel;
console.log(variavel);

let vari2 = 'Camila'
console.log(vari2);

const constante = 'Karina';
console.log(constante);


console.log("------Criação de Escopos---------")
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}
escopoLocal();

console.log("------Comparação-------");
var atribuicao = 'Lago';
console.log(atribuicao);

var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

console.log("-------Operadores Aritmeticos--------")
var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 3;
console.log(subtracao);

var multiplicacao = 3 * 3;
console.log(multiplicacao);

var divisao = 8 / 2;
console.log(divisao);

var restoDaDivisao = 5 % 2;
console.log(restoDaDivisao);

var potencia = 2 ** 10;
console.log(potencia);

var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

console.log("------Operadores Lógicos-------")

//&& - "e" - Considera que todos os valores sejam true
var e = true && true;
console.log(e);

// || - "ou" - Considera que qualquer valor seja true
var ou = false || false;
console.log(ou);

// ! - "não" - Inverte o valor de true para falso
var nao = !true;
console.log(nao);