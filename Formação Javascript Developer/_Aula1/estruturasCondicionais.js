/*São instruções para realizar determinadas
tarefas a partir de uma condição, seja de decisão ou repetição*/

const camilaECasada = true;
const camilaETemFilhos = false;
var idade = 20;
var play1 = 0;
var play2 = 0;
var placar;

/* if = Se...*/

if (idade >= 18) {
    console.log("\nVocê é maior de idade\n");
}   

/* else = Senão...*/
if (play1 > 0 ) {
   console.log ('Jogador 1 venceu');
} else if (play2 > 0) {
 console.log ('Jogador 1 venceu');
} else {
    console.log('Ninguém venceu\n');
}
/* If ternário */
play1 != -1 && play2 != -1 ? console.log('Jogador 1 e Jogador 2 marcaram pontos') : console.log('Ninguém marcou pontos');   

switch (placar) {
    case placar = play1 > play2:
        console.log('\nJogador 1 venceu');
        break;      
    case placar = play2 > play1:
        console.log('\nJogador 2 venceu');
        break;
    default:
        console.log('\nNinguém venceu');
        break;
}
