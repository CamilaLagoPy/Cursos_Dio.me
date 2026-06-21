let array = ['String', 1, true];
console.log(array);

let array2 = ['String', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2);

//repete cada dado dentro do array
array2.forEach(function(item, index){console.log(item, index)});

//adiciona um item no final do array
array2.push('novo item');
console.log(array2);

//apaga o último item do array
array2.pop(array2);
console.log(array2);

array2.shift(); //apaga o primeiro item do array
console.log(array2);

array2.unshift('novo item no início'); //adiciona um item no início do array
console.log(array2)

console.log(array2.indexOf(true)); //mostra o índice do item true

array2.splice(0, 3); //apaga os itens do índice 0 ao 3
console.log(array2);
