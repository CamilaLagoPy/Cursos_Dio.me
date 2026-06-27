import { gets, print } from './funcao-aux1.js';

let media = gets();

if (media < 5) {
    print("Reprovado");
} else if (media >= 5 && media < 7) {
    print("Recuperação");
} else {
    print("Aprovado");
}
``