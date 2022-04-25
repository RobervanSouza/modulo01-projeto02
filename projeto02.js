console.clear(); 
 const prompt = require('prompt-sync')();  
 console.log("                         Jogo Jokenpô!!!")
 console.log(); 
const usuario = prompt(`Olá seja bem vindo ao jogo Jokenpô!!!   Digite seu nome:   `);
console.log();

let novamente=[];// retornar o jogo, caso o usuario desejar
do {
console.log(`Olá ${usuario }!!! seja bem vindo ao jogo Jokenpô!!!`);
console.log();

let computador1=[];
let empate = [];
let nome= [];
let n =0;


const vezes = +prompt(` ${usuario } Digite quantas rodadas deseja jogar:  `);

console.clear();


while (n<vezes){// repetir numeros de rodadas que o usuario desejar
n++;

console.log();
console.log(`Agora ${usuario} escolha  Pedra, Papel ou Tesoura  !!!`);
console.log();

const opcoes1=("(0) para Pedra \n (1) para  Tesoura \n  (2) para Papel: ")

const opcoes= ["Pedra","Tesoura","Papel"];
console.log(opcoes1)

  

  let digitaOpcao=+prompt("Das opções acima, digite a opção desejada: 0, 1 ou 2:  ");
console.log();
console.clear();

while (digitaOpcao !==0 && digitaOpcao!==1 && digitaOpcao!==2){
    digitaOpcao=+prompt(`${digitaOpcao} Invalida!!! por favor digite as opções 0, 1 ou 2: `)

}
console.log(`${usuario} escolheu `+opcoes[digitaOpcao])

let numpc = Math.random();
let mult = numpc *3;

let aleatorio=  Math.floor(mult);// usei a variavel aleatorio para mudar escolher o numero que o computador escolhe

console.log("O computador  escolheu "+opcoes[aleatorio]); 


if ( digitaOpcao ===0 && aleatorio===1) {    // comparar quem venceu a rodada
    console.log(`O ${usuario} ganhou!!! `);
    nome++;
console.log();


} else if (digitaOpcao===0 && aleatorio===2 ) {
    console.log(`O computador ganhou ganhou!!! `);
    computador1++;
   

} else if (digitaOpcao===1 && aleatorio===2 ){
    console.log(`O ${usuario} ganhou!!! `);
    nome++;
    

} else if (digitaOpcao=== 1 && aleatorio===0){
    console.log(`O computador ganhou!!! `);
    computador1++;
  

} else if (digitaOpcao=== 2 && aleatorio=== 0){
    console.log(`O ${usuario} ganhou!!! `);
    nome++;
    

} else if (digitaOpcao===2 && aleatorio===1 ){
    console.log(`O computador  ganhou!!! `);
    computador1++;
  
}
else {
    console.log("Deu empate!!! ");
    empate++;
}console.log();
}
console.clear();   
console.log(`${usuario} você ganhou ${nome} rodadas`);  // quem ganhou as rodadas
console.log(` O computador ganhou ${computador1} rodadas`);
console.log(`Empatou ${empate} rodadas `);
console.log();

if (nome> computador1) {
    console.log(`Parabéns ${usuario} você foi o campeão!!!`);// quem ganhou o jogo
}else if (computador1 > nome){
    console.log(`${usuario} Você perdeu para o Computador! 
    
     O Grande Campeão foi o Computador !!!`);
}else if ( nome=computador1 ){
    console.log("Deu empate ");
    console.log(nome);
    console.log(computador1);

}console.log();

 novamente = prompt(` ${usuario} você deseja jogar novamente? digite sim ou nao: `);
console.log();
let resposta = "Opção invalida ";

while( novamente !== "sim" && novamente !== "nao" ) {    // voltar ao inicio do jogo na opção de rodadas
    novamente= prompt(`${resposta} "digite sim ou nao  " `);
 
}
} while (novamente==="sim"){
    if (novamente="nao"){
        console.log(`fim do jogo!!!  ${usuario} volte Sempre.`);
        console.log();
    }

}
